import {
  GET_PACKAGE_INFO
} from '../constants/actionTypes'

const initialState = {
  name: 'Test Package'
}

export function _package( state = initialState, action ) {
  switch(action.type) {
    case GET_PACKAGE_INFO:
      return state
    default:
      return state
  }
}