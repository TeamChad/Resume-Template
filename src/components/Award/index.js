import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

export default class Award extends Component {
  
  render() {
    const { name, date } = this.props

    return (
      <div className="resume-award">
        <h4>{date} {name}</h4>
      </div>
    )
  }
}

Award.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}