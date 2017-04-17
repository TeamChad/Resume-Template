import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

export default class Role extends Component {
  
  render() {
    const { title, company, date, summary, showSummary, duties } = this.props,
          dutiesList = duties.join('; ') + '.'

    return (
      <div className="resume-role">
        <h4>{title} | {company}</h4>
        <h5 className="resume-role__date"><em>{date}</em></h5>
        { showSummary ? (<div dangerouslySetInnerHTML={{__html: summary}}></div>) : null }
        <p><strong>Duties:</strong> {dutiesList}</p>
      </div>
    )
  }
}

Role.defaultProps = {
  showSummary: true,
  duties: []
}

Role.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  showSummary: PropTypes.bool.isRequired,
  duties: PropTypes.array.isRequired,
}