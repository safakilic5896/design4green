import React from 'react';
import { useState, useEffect } from 'react';
import {Typeahead} from 'react-bootstrap-typeahead'
import{Form, Button, Col, Card, Container, Row, Alert, Navbar} from 'react-bootstrap';
import {DataTable} from './component/dataTable'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import {getRegion} from './http/region';
import {regionData} from './reducers/region/actions';
import {departemenData} from './reducers/departement/actions';
import {communeData} from './reducers/commune/actions';
import {getDepartement} from './http/departement';
import {getCommune} from './http/commune';
import {changeDataTable} from './reducers/dataTable/actions';
import {getSearch} from './http/search';

const App = () =>  {

    const [regionSelections, setRegionSelections] = useState([]);
    
    const [departementSelections, setDepartementSelections] = useState([]);
    
    const [communeSelections, setCommuneSelectionsSelections] = useState([]);
    
    const dataTable = useSelector(state => state.dataTable)

    const regionList = useSelector(state => state.regionList)

    const departementList = useSelector(state => state.departementList)

    const communeList = useSelector(state => state.communeList)

    const dispatch = useDispatch();
    
    useEffect(() => {
      getRegion().then(response => dispatch(regionData(response)))
      getDepartement('').then(response => dispatch(departemenData(response)))
      getCommune('', '').then(response => dispatch(communeData(response)))
    }, [])

    const handleRegionSelections = (event) => {
      if (event[0] === undefined) {
        setRegionSelections(event)
        getDepartement('').then(response => dispatch(departemenData(response)))
        getCommune('','').then(response => dispatch(communeData(response)))
        setDepartementSelections([])
        setCommuneSelectionsSelections([])
      } else {
        setRegionSelections(event)
        getDepartement(event[0]).then(response => dispatch(departemenData(response)))
        getCommune('',event[0]).then(response => dispatch(communeData(response)))
        setDepartementSelections([])
        setCommuneSelectionsSelections([])
      }
    };

    const handleDepartementSelections = (event) => {
      if (event[0] === undefined) {
        setDepartementSelections(event)
        getCommune('', '').then(response => dispatch(communeData(response)))
        setCommuneSelectionsSelections([])
      } else {
        setDepartementSelections(event)
        getCommune(event[0], '').then(response => dispatch(communeData(response)))
        setCommuneSelectionsSelections([])
      }
    }

    const handleSearch = () => {
      getSearch(regionSelections[0], departementSelections[0], communeSelections[0]).then(response => dispatch(changeDataTable(response)))
    }

  return (
    <Container fluid>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        Application d'Indice
      </Navbar.Brand>
    </Navbar>
    <Presentation/>
    <Form style={{border: '1px solid #e5e5e5'}}>
      <Form.Row>
        <Form.Group as={Col} md={{ span: 2, offset: 1 }} controlId="validationCustom01">
          <Form.Label>Région</Form.Label>
          <Typeahead
          id="ChooseRegion"
          labelKey="Region"
          onChange={handleRegionSelections}
          options={regionList}
          inputProps={{ required: true }}
          placeholder="Choisir une région"
          selected={regionSelections}
        />
        </Form.Group>
        <Form.Group as={Col} md={{ span: 2, offset: 1 }} controlId="validationCustom02">
          <Form.Label>Département</Form.Label>
          <Typeahead
          id="ChooseDepartement"
          labelKey="Departement"
          onChange={handleDepartementSelections}
          options={departementList}
          inputProps={{ required: true }}
          placeholder="Choisir un département"
          selected={departementSelections}
        />
          </Form.Group>
          <Form.Group as={Col} md={{ span: 2, offset: 1 }} controlId="validationCustom03">
          <Form.Label>Commune</Form.Label>
          <Typeahead
          id="ChooseCommune"
          labelKey="Commune"
          onChange={setCommuneSelectionsSelections}
          options={communeList}
          inputProps={{ required: true }}
          placeholder="Choisir une commune"
          selected={communeSelections}
        />
          </Form.Group>
        </Form.Row>
        <div class="d-flex justify-content-end">
          <Button onClick = {handleSearch} style={{float: 'right', margin:'1vh'}}>Rechercher</Button>
      </div>
    </Form>
    <DataTable dataTable={dataTable}/>
    </Container>
    )
  }

  function Presentation() {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>Application Indice de Fragilité</Alert.Heading>
          <p>
          Cet outil permet, que vous soyez une commune, un département ou une région de comparer votre
          indice de fragilité numérique avec les autres territoires.
          </p>
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Fermer
            </Button>
          </div>
        </Alert>
      </>
    );
  }

export default App;
