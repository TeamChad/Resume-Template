import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classnames from 'classnames'
import AsideOne from '../components/AsideOne/'
import PageOne from '../components/PageOne'
import AsideTwo from '../components/AsideTwo/'
import PageTwo from '../components/PageTwo'
import * as appActions from '../actions'

class Resume extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.actions.appReady()
    })
  }

  render() {
    const { appReady, contact, social, job, photo, summary, skills, interests, roles, awards, projects } = this.props

    return (
      <div className={classnames('container', {
        'app-ready': appReady
      })}>
        <div className="resume">
          <PageOne
            name={`${contact.firstname} ${contact.lastname}`}
            job={job}
            roles={roles}
            awards={awards} />
          <AsideOne
            appReady={appReady}
            name={`${contact.firstname} ${contact.lastname}`}
            photo={photo}
            summary={summary}
            skills={skills}
            interests={interests} />
        </div>
        <div className="resume">
          <PageTwo
            projects={projects} />
          <AsideTwo
            social={social}
            contact={contact} />
        </div>
      </div>
    )
  }
}

Resume.propTypes = {
  appReady: PropTypes.bool.isRequired,
  contact: PropTypes.string.isRequired,
  social: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  interests: PropTypes.array.isRequired,
  roles: PropTypes.array.isRequired,
  awards: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  appReady: state.resume.appReady,
  contact: state.resume.contact,
  social: state.resume.social,
  job: state.resume.job,
  photo: state.resume.photo,
  summary: state.resume.summary,
  skills: state.resume.skills,
  interests: state.resume.interests,
  roles: state.resume.roles,
  awards: state.resume.awards,
  projects: state.resume.projects
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Resume)
