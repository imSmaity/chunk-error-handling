import React from 'react'

const NewInfo = ({ title, date }) => {
  return (
    <div>
      <b>{title}</b>
      <div>{date}</div>
    </div>
  )
}

export default NewInfo
