import React from 'react'
import { connect } from "react-redux"

import SearchBox from './SearchBox.jsx'

export class Head extends React.Component {
  render() {
    return <div>
      <h1>Package Search</h1>
    </div>
  }
}

class Home extends React.Component {

  render() {
    return <div>
      <Head/>
      <SearchBox/>

      <pre>
        {this.props.package.ready ? this.props.package.packagesInfo.Payload[0].TransferName : 'no data'}
      </pre>

    </div>
  }

}
Home.propTypes = {
  package: React.PropTypes.object.isRequired
};
export default connect((state) => {
  return {
    package: state._package
  }
})(Home)