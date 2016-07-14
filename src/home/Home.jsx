import React from 'react'
import styles from './Home.css'

export class SearchBox extends React.Component {
  render() {
    return <form className={styles.search_container}>
      <input className={styles.search_box} type="text"/>
      <input type="submit"/>
    </form>
  }
}

export default class Home extends React.Component {
  render() {
    return <SearchBox/>
  }
}