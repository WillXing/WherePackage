import {
  GET_PACKAGE_INFO
} from '../constants/actionTypes'

const packageState = {
  ready: false,
  packagesInfo: {}
}

export function _package( state = packageState, action ) {
  switch(action.type) {
    case GET_PACKAGE_INFO:
      let next_state

      if(action.status == 'success' ) {
        console.log('Reducer: fetched')
        next_state = Object.assign({}, state, {
          ready: true,
          packagesInfo: action.package_info
        })
      }else {
        console.log('Reducer: fetching')
        next_state = state
      }


      return next_state
    default:
      return state
  }
}