import React from 'react'

export class SearchBox extends React.Component {
  render() {
    return <form>
      <input type="text"/>
      <input type="submit"/>
    </form>
  }
}

export default class Home extends React.Component {
  render() {
    return <SearchBox/>
  }
}