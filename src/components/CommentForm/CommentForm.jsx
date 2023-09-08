import React, { useRef } from 'react'

function CommentForm(props) {
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const send = () => {
    const post = {
      id: crypto.randomUUID(),
      firstname: firstNameRef.current.value,
      lastname: lastNameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    }

    fetch('http://localhost:9898/api/comments', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(post),
    }).then(() => {
      props.reload(prev => !prev)
    })
  }

  return (
    <section>
      <input ref={firstNameRef} type="text" id="first_name" placeholder="Firstname" />
      <input ref={lastNameRef} type="text" id="last_name" placeholder="lastname" />
      <input ref={emailRef} type="email" id="email" placeholder="Email" />
      <textarea
        ref={messageRef}
        name="comment"
        id="comment"
        cols="30"
        rows="3"
        placeholder="write a comment"></textarea>
      <button onClick={send} type="submit">
        Send
      </button>
    </section>
  )
}

export default CommentForm
