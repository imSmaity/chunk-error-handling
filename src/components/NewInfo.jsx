import React from 'react'

const NewInfo = ({ title, date }) => {
  return (
    <div>
      <div>
        Title: <b>{title}</b>
      </div>
      <div>
        Created date: <b>{date}</b>
      </div>
    </div>
  )
}

export default NewInfo
