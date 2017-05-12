import React from 'react'
import FilterLink from './FilterLink'

const Footer = () => (
  <p>
    Show:&nbsp;
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    &nbsp;
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    &nbsp;
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer
