import React from 'react'

// import Icon from './Icon'

export default ({className, to, onClick}) => (
  <button type="button" onClick={onClick} className={`button button--text button--icon ${className}`} aria-label={to}>
  1111
    {/* <Icon className="icon" icon={to} /> */}
  </button>
)