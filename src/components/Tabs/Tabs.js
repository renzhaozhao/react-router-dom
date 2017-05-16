import React, { Component } from 'react'
import './style.scss'

class Tabs extends Component {
  state = {
    tabs: this.props.tabs,
    activeKey: this.props.activeKey
  }

  componentWillMount() {

  }

  handleClick = key => {
    const tabs = this.state.tabs.map((v, i) => {
      if (key === i) {
        v.active = true
      } else {
        v.active = false
      }
      return v
    })

    this.setState({
      tabs,
      activeKey: key
    })
  }

  render() {
    const { tabs, activeKey = 1 } = this.state
    tabs[activeKey].active = true
    return (
      <div className="tab-box">
        <ul className="tab-nav">
          {
            tabs.map((v, i) => (
              <li
                onClick={key => this.handleClick(i)}
                key={i}
                className={v.active ? 'active' : ''}
              >
                {v.title}
              </li>)
            )
          }
        </ul>
        <div className="tab-content">
          {
            tabs.map((v, i) => (
              <div
                className="tab-item"
                style={{ display: i === activeKey ? 'block' : 'none' }}
                key={i}
              >
                {v.content}
              </div>
            )
            )
          }
        </div>
      </div>
    )
  }
}

export default Tabs
