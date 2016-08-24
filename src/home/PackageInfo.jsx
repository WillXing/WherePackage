import React from 'react'

export default class PackageInfo extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return <div>
      <p>

      </p>
      <table>
        <thead>

        </thead>
        <tbody>
        {
          this.props.package.packagesInfo.Payload[0].Details.map((detail,i) => {
            return <tr key={i}>
              <td>
                {detail.Place}
              </td>
              <td>
                {detail.Message}
              </td>
              <td>
                {detail.DateString}
              </td>
            </tr>
          })
        }
        </tbody>
      </table>

      <pre>
        {this.props.package.packagesInfo.Payload[0].TransferName}
      </pre>

    </div>
  }

  renderTransferList() {

  }
}

PackageInfo.propTypes = {
  package: React.PropTypes.object.isRequired
}