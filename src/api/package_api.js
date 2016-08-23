import 'whatwg-fetch'

export function getPackageInfo(package_no) {
  let url = `https://www.ewe.com.au/oms/api/tracking/ewe/${package_no}`

  return fetch(url, {
    method: 'GET'
  })
}