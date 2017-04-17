import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Project from '../Project/'
import './styles.css'

export default class PageTwo extends Component {

  _renderProjects() {
    return this.props.projects.map((project, i) => {
      return (
        <Project
          key={i}
          name={project.name}
          client={project.client}
          summary={project.summary}
          duties={project.duties}
          technologies={project.technologies} />
      )
    })
  }
  
  render() {
    const projects = this._renderProjects()

    return (
      <div className="resume-main-two">
        <div className="resume-main-two__body">
          <div className="resume-main-two__section">
            <h3>Recent Projects.</h3>
            {projects}
          </div>
        </div>
      </div>
    )
  }
}

PageTwo.propTypes = {
  projects: PropTypes.array.isRequired
}