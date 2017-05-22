import React, { Component } from 'react'
import { func, number } from 'prop-types'

import './style.scss'


class Pagination extends Component {
  static propTypes = {
    current: number,
    defaultCurrent: number,
    total: number,
    defaultPageSize: number,
    pageSize: number,
    onChange: func
  }

  static defaultProps = {
    current: 1,
    defaultCurrent: 1,
    total: 0,
    defaultPageSize: 10,
    pageSize: 10,
    onChange: () => { }
  }

  state = {
    pages: Math.ceil(this.props.total / this.props.pageSize),
    current: this.props.current
  }

  handleChange = page => {
    if (this.state.current === page) {
      return
    }

    this.setState({
      current: page
    })

    this.props.onChange(page)
  }

  handlePrev = () => {
    this.setState(prevState => ({
      current: prevState.current - 1
    }))
    console.log(this.state.current)
  }

  render() {
    const pages = Array.from({ length: this.state.pages }, (v, i) => i + 1)
    return (
      <ul className="vp-pagination ">
        <li className="first">{'|<'}</li>
        <li onClick={this.handlePrev} className="prev">{'<'}</li>
        {
          pages.map((v, i) => (
            <li
              className={this.state.current === i + 1 ? 'active' : ''}
              key={i}
              onClick={page => this.handleChange(i + 1)}
            >
              {v}
            </li>)
          )
        }
        <li className="next">{'>'}</li>
        <li className="last">{'>|'}</li>
      </ul>
    )
  }
}


/* Pagination.*/

export default Pagination
