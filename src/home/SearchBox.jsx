import React from 'react'
import { connect } from "react-redux"
import styles from './Home.css'
import { fetchPackageInfo } from '../actions/index'

class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      package_no: 'no in state'
    }

    this.searchIt = this.searchIt.bind(this)
    this.changePackageNo = this.changePackageNo.bind(this)
  }

  render() {
    return <form onSubmit={this.searchIt} className={styles.search_container}>
      <input className={styles.search_box} type="text"
             value={this.state.package_no}
             onChange={this.changePackageNo}
      />
      <input type="submit"/>
    </form>
  }

  searchIt() {
    this.props.fetchPackageInfo(this.state.package_no)
    return false
  }

  changePackageNo(event) {
    this.setState({
      package_no: event.target.value
    })
  }

}

SearchBox.propTypes = {
  fetchPackageInfo: React.PropTypes.func.isRequired
}

export default connect((state) => {return {}}, {fetchPackageInfo})(SearchBox)