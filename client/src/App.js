import React from 'react';
import {useState} from 'react'
import {Typeahead} from 'react-bootstrap-typeahead'
import{Form, Button, Col, Card, Container, Row} from 'react-bootstrap';
import {DataTable} from './component/dataTable'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>  {
   const [validated, setValidated] = useState(false);

    const [regionSelections, setRegionSelections] = useState([]);
    
    const [departementSelections, setDepartementSelections] = useState([]);
    
    const [communeSelections, setCommuneSelectionsSelections] = useState([]);
    
    const handleSearch = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

  return (
    <Container fluid>
    <Card style={{border: 'none'}}>
      <Card.Body>Application Indice</Card.Body>
    </Card>
    <Form noValidate validated={validated} onSubmit={handleSearch} style={{border: '1px solid #e5e5e5'}}>
      <Form.Row>
        <Form.Group as={Col} md={{ span: 2, offset: 1 }} controlId="validationCustom01">
          <Form.Label>Région</Form.Label>
          <Typeahead
          id="ChooseRegion"
          labelKey="Region"
          onChange={setRegionSelections}
          options={[]}
          inputProps={{ required: true }}
          placeholder="Choisir une région"
          selected={regionSelections}
        />
        </Form.Group>
        <Form.Group as={Col} md={{ span: 2, offset: 1 }} controlId="validationCustom02">
          <Form.Label>Département</Form.Label>
          <Typeahead
          id="ChooseDepartement"
          labelKey="Region"
          onChange={setDepartementSelections}
          options={[]}
          inputProps={{ required: true }}
          placeholder="Choisir un département"
          selected={departementSelections}
        />
          </Form.Group>
          <Form.Group as={Col} md={{ span: 2, offset: 1 }} controlId="validationCustom03">
          <Form.Label>Commune</Form.Label>
          <Typeahead
          id="ChooseDepartement"
          labelKey="Region"
          onChange={setCommuneSelectionsSelections}
          options={[]}
          inputProps={{ required: true }}
          placeholder="Choisir un département"
          selected={communeSelections}
        />
          </Form.Group>
        </Form.Row>
        <div class="d-flex justify-content-end">
          <Button type="submit" style={{float: 'right', margin:'1vh'}}>Rechercher</Button>
          <p style={{float: 'right', margin:'1vh'}} class="font-weight-bold">+ Upload le pdf</p>
      </div>
    </Form>
    <DataTable/>
    </Container>
    )
  }

export default App;
