import PropTypes from 'prop-types'

import './index.css'

export const Section = ({ cl, children }) => {
  return (
    <section className={`section ${cl}`}>{children}</section>
  )
}

Section.propTypes = {
  cl: PropTypes.string,
  children: PropTypes.node.isRequired
}