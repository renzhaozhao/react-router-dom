import React, { Component } from 'react'
import App from '../../components/App'

class Home extends Component {
  state = {
    number: 1
  }

  handleClick = () => {
    const number = this.state.number + 1
    this.setState({ number })
  }

  render() {
    return (
      <div className="container">
        <App />
        <div>{this.state.number}</div>
        <button onClick={this.handleClick}>+++</button>
        <div style={{ height: 300 }}>test阿萨德阿萨德阿萨德</div>
        <div style={{ height: 300 }}>test阿萨德阿萨德阿萨德</div>
        <div style={{ height: 300 }}>test阿萨德阿萨德阿萨德</div>
        <div style={{ height: 300 }}>test阿萨德阿萨德阿萨德</div>
        <div style={{ height: 300 }}>test阿萨德阿萨德阿萨德</div>
        <div style={{ height: 300 }}>test阿萨德阿萨德阿萨德</div>
        <div style={{ height: 300 }}>test阿萨德阿萨德阿萨德</div>
        <div style={{ height: 300 }}>test阿萨德阿萨德阿萨德</div>
      </div>
    )
  }
}

export default Home
