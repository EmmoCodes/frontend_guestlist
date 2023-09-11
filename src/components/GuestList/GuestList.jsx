import React, { useEffect, useState } from 'react'
import GuestItem from '../GuestItem/GuestItem.jsx'
import '../GuestItem/GuestItem.scss'
import MessageForm from '../MessageForm/MessageForm.jsx'

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
      <MessageForm reload={setRefresh} />
      <article className="item_wrapper">
        {messages.map((item, key) => (
          <GuestItem key={key} item={item} />
        ))}
      </article>
    </section>
  )
}

export default GuestList
