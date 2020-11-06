import { combineReducers } from 'redux'

import dataTable from './reducers/dataTable/reducer'
import regionList from './reducers/region/reducer'
import departementList from './reducers/departement/reducer'
import communeList from './reducers/commune/reducer'

const reducers = {
  dataTable,
  regionList,
  departementList,
  communeList
}

export default combineReducers(reducers)
