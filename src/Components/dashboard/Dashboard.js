import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectsList from '../projects/ProjectsList';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    console.log(this.props)
    const { projects } = this.props; 
    return (
        <div className="dashboard container">
            <div className="row">
              <div className="col sm12 m6">
                <ProjectsList projects={projects}/>
              </div>
              <div className="col sm12 m5 offset-m1"></div>
                <Notifications/>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}
export default connect(mapStateToProps)(Dashboard);
