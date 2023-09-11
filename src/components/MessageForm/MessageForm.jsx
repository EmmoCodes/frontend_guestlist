import React, { useState } from 'react'

function MessageForm(props) {
  const [err, setErr] = useState(false)

  const send = e => {
    e.preventDefault()
    setErr(true)
    const form = new FormData(e.target)
    console.log(form)
    fetch('http://localhost:9898/api/comments', {
      method: 'POST',
      body: form,
    }).then(response => {
      props.reload(prev => !prev)
      e.target.reset()
    })
  }

  return (
    <form onSubmit={send}>
      <input name="firstname" type="text" id="first_name" placeholder="Firstname" />
      <input name="lastname" type="text" id="last_name" placeholder="lastname" />
      <input name="email" type="email" id="email" placeholder="Email" />
      <textarea name="message" id="comment" cols="30" rows="3" placeholder="write a comment"></textarea>
      {err && <p>Error</p>}
      <button type="submit">Send</button>
    </form>
  )
}

export default MessageForm
