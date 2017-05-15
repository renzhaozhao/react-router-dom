import React, { Component } from 'react'
import moment from 'moment'

import Todos from '../../components/Todos'

const format = 'MMMM Do YYYY, h:mm:ss a'

class About extends Component {
  state = {
    time: moment(new Date()).format(format)
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: moment(new Date()).format(format)
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div className="container">
        {this.state.time}
        <Todos />
      </div>
    )
  }
}

export default About
