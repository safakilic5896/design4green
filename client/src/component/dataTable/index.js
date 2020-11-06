import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export const DataTable = (props) => {
  return (
    <div>
      <BootstrapTable data={props.dataTable} striped hover pagination exportCSV>
          <TableHeaderColumn isKey dataField='nom'> Nom de la Commune </TableHeaderColumn>
          <TableHeaderColumn dataField='codePostal'>Code Postal</TableHeaderColumn>
          <TableHeaderColumn dataField='quartier'>Nom du quartier</TableHeaderColumn>
          <TableHeaderColumn dataField='scoreGlob'>Score Global</TableHeaderColumn>
          <TableHeaderColumn dataField='scoreGlobDept'>Score Global Départemental</TableHeaderColumn>
          <TableHeaderColumn dataField='scoreGlobReg'>Score Global Régional</TableHeaderColumn>
      </BootstrapTable>,
    </div>
  )
}
