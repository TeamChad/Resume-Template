import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Skill from '../Skill/'
import './styles.css'

export default class AsideOne extends Component {

  _renderSkills() {
    const { appReady, skills } = this.props

    return skills.map((skill, i) => {
      return (
        <Skill
          key={i}
          appReady={appReady}
          name={skill.name}
          rating={skill.rating} />
      )
    })
  }

  _renderInterests() {
    const { interests } = this.props,
          interestsList = interests.map((interest, i) => {
            return (
              <li key={i}>{interest}</li>
            )
          })

    if (interests.length) {
      return (
        <ul>{interestsList}</ul>
      )
    }

    return null
  }
  
  render() {
    const { name, photo, summary } = this.props,
          skillsList = this._renderSkills(),
          interestsList = this._renderInterests()

    return (
      <aside className="resume-aside-one">
        <header>
          <img src={photo} alt={`${name} profile. `} />
        </header>
        <div className="resume-aside-one__body">
          <div className="resume-aside-one__section">
            <h2>About Me.</h2>
            <div dangerouslySetInnerHTML={{__html: summary}}></div>
          </div>
          <div className="resume-aside-one__section">
            <h2>Skills.</h2>
            {skillsList}
          </div>
          <div className="resume-aside-one__section">
            <h2>Interests.</h2>
            {interestsList}
          </div>
        </div>
      </aside>
    )
  }
}

AsideOne.propTypes = {
  appReady: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  interests: PropTypes.array.isRequired
}