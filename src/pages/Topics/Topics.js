import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import './style.scss'

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <div className="siderbar">
      <NavLink to={`${match.url}/rendering`}>
        Rendering with React
      </NavLink>
      <NavLink to={`${match.url}/components`}>
        Components
      </NavLink>
      <NavLink to={`${match.url}/props-v-state`}>
        Props v. State
      </NavLink>
    </div>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)

export default Topics