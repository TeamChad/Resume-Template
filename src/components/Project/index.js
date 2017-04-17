import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

export default class Project extends Component {
  
  render() {
    const { name, client, summary, duties, technologies } = this.props,
          dutiesList = duties.join('; ') + '.',
          techList = technologies.join('; ') + '.'

    return (
      <div className="resume-project">
        <h4>{name}</h4>
        <h5><em>{client}</em></h5>
        <div dangerouslySetInnerHTML={{__html: summary}}></div>
        <p><strong>Duties:</strong> {dutiesList}</p>
        <p><strong>Technologies:</strong> {techList}</p>
      </div>
    )
  }
}

Project.defaultProps = {
  duties: [],
  technologies: []
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  duties: PropTypes.array.isRequired,
  technologies: PropTypes.array.isRequired
}