import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Role from '../Role/'
import Award from '../Award/'
import './styles.css'

export default class PageOne extends Component {

  _renderRoles() {
    return this.props.roles.map((role, i) => {
      return (
        <Role
          key={i}
          title={role.title}
          company={role.company}
          date={role.date}
          summary={role.summary}
          showSummary={role.showSummary}
          duties={role.duties} />
      )
    })
  }

  _renderAwards() {
    return this.props.awards.map((award, i) => {
      return (
        <Award
          key={i}
          name={award.name}
          date={award.date} />
      )
    })
  }
  
  render() {
    const { name, job } = this.props,
          roles = this._renderRoles(),
          awards = this._renderAwards()

    return (
      <div className="resume-main-one">
        <h1>{name}</h1>
        <h2>{job}</h2>
        <div className="resume-main-one__body">
          <div className="resume-main-one__section">
            <h3>Work Experience.</h3>
            {roles}
          </div>
          <div className="resume-main-one__section">
            <h3>Awards.</h3>
            {awards}
          </div>
        </div>
      </div>
    )
  }
}

PageOne.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  roles: PropTypes.array.isRequired,
  awards: PropTypes.array.isRequired
}