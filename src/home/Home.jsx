import React from 'react'
import styles from './Home.css'
import { connect } from "react-redux"

export class Head extends React.Component {
  render() {
    return <div>
      <h1>Package Search</h1>
    </div>
  }
}

export class SearchBox extends React.Component {
  render() {
    return <form className={styles.search_container}>
      <input className={styles.search_box} type="text"/>
      <input type="submit"/>
    </form>
  }
}

class Home extends React.Component {

  render() {
    return <div>
      <pre>
        {this.props.package.name}
      </pre>
      <Head/>
      <SearchBox/>
    </div>
  }

  componentDidMount() {
    console.log(this.props)
  }

}


Home.propTypes = { package: React.PropTypes.object.isRequired };

export default connect((state) => {
  return {
    package: state._package
  }
})(Home)