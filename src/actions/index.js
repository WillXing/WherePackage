import {
  GET_PACKAGE_INFO
} from '../constants/actionTypes'

import { getPackageInfo } from '../api/package_api'

function getPackageInfoAction() {
  return {
    type: GET_PACKAGE_INFO
  }
}

function receivedPackageInfoAction(package_info) {
  return {
    type: GET_PACKAGE_INFO,
    status: 'success',
    package_info: package_info
  }
}

export function fetchPackageInfo(package_no) {
  return dispatch => {
    console.log('Action Fetching start')

    dispatch(getPackageInfoAction())

    return getPackageInfo(package_no).then(response => response.json())
      .then(json => {

        console.log('Action Fetched:',json)

        dispatch(receivedPackageInfoAction(json))
      })
  }
}