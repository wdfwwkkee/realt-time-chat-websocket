import React, { useState } from 'react'

const MessageBlock = ({socket}) => {

  const [message, setMessage] = useState('')


  const isTyping = () => {
    socket.emit('typing', `${localStorage.getItem('user')} is typing`)
  }


  const handleSend = (e) => {
    e.preventDefault()

    if (message.trim() && localStorage.getItem('user')) {
      socket.emit('message', {
        text : message,
        name : localStorage.getItem("user"),
        id : `${socket.id}-${Math.random()}`,
        socketID : socket.id
      })
    }

    console.log({
      user : localStorage.getItem('user'),
      message
    })
    setMessage("")
  }

  return (
    <div className='message-block'>
      <form onSubmit={handleSend}>
        <input value={message} onKeyDown={isTyping} onChange={(e) => setMessage(e.target.value)} type="text" className='user-message' />
        <button>Сказать</button>
      </form>

    </div>
  )
}

export default MessageBlock