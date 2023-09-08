import React, { useEffect, useState } from 'react'
import CommentForm from '../CommentForm/CommentForm.jsx'
import GuestItem from '../GuestItem/GuestItem.jsx'
import '../GuestItem/GuestItem.scss'

function GuestList() {
  const [refresh, setRefresh] = useState(false)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch('http://localhost:9898/api/comments')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(data => setMessages(data))
      .catch(err => console.log(err))
  }, [refresh])

  return (
    <section>
      <h1>Guest List</h1>
      <h2>Add a comment</h2>
      <CommentForm reload={setRefresh} />
      <article className="item_wrapper">
        {messages.map((item, key) => (
          <GuestItem key={key} item={item} />
        ))}
      </article>
    </section>
  )
}

export default GuestList
