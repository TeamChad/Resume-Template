import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

export default class AsideTwo extends Component {

  render() {
    const { social, contact } = this.props,
          { mobile, email } = contact

    return (
      <aside className="resume-aside-two">
        <div className="resume-aside-two__body">
          <div className="resume-aside-two__section">
            <h2>Contact.</h2>
            <address>
              <strong>Mobile:</strong> {mobile} <br />
              <strong>Email:</strong> {email} <br />
              <strong>LinkedIn:</strong> <a href={social.linkedin}>{social.linkedin}</a>
            </address>
          </div>
        </div>
      </aside>
    )
  }
}

AsideTwo.propTypes = {
  contact: PropTypes.string.isRequired,
  social: PropTypes.string.isRequired
}