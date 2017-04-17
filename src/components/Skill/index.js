import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

export default class Skill extends Component {
  
  render() {
    const { appReady, name, rating } = this.props,
          styles = appReady ? { width: `${(rating * 10)}%` } : {}

    return (
      <p className="resume-skill">
        {name}
        <span>
          <span
            style={styles}
            title={`${rating} / 10`}>
          </span>
        </span>
      </p>
    )
  }
}

Skill.defaultProps = {
  rating: 0
}

Skill.propTypes = {
  appReady: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}