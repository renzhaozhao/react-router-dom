import React, { Component } from 'react'
import moment from 'moment'

import Todos from '../../components/Todos'
import Tabs from '../../components/Tabs/Tabs'

const format = 'MMMM Do YYYY, h:mm:ss a'

class About extends Component {
  state = {
    time: moment(new Date()).format(format),
    tabs: [{
      title: 'title 1',
      content: 'content 1'
    }, {
      title: 'title 2',
      content: 'content 2'
    }, {
      title: 'title 3',
      content: 'content 3'
    }]
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
        <Tabs
          tabs={this.state.tabs}
          activeKey={0}
        />
        {this.state.time}
        <Todos />
      </div>
    )
  }
}

export default About
