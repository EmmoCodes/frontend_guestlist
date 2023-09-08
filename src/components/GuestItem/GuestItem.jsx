import React from 'react'
import './GuestItem.scss'

function GuestItem({ item }) {
  return (
    <div className="item_frame">
      <h3>
        {item.firstname}
        {item.lastname}
      </h3>
      <p>{item.email}</p>
      <p>schreibt: {item.message}</p>
    </div>
  )
}

export default GuestItem
