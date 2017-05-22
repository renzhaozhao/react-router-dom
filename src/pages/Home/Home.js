import React, { Component } from 'react'
import App from '../../components/App'
import Pagination from '../../components/Pagination'

class Home extends Component {
  state = {
    number: 12
  }

  onChange = page => {
    console.log(page)
  }

  handleClick = () => {
    const number = this.state.number + 1
    this.setState({ number })
  }

  render() {
    return (
      <div className="container" style={{ background: '#2a2f34', padding: 10 }}>
        <App />
        <div>{this.state.number}</div>
        <button onClick={this.handleClick}>+++</button>
        <Pagination
          onChange={this.onChange}
          total={50}
        />
      </div>
    )
  }
}

export default Home
