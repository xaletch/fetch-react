import React from "react"
import './container.css'

export const Container = ({ children, cl }) => {
  return (
    <div className={`container ${cl}`}>
      {children}
    </div>
  )
}
