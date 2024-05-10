import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar.jsx'
import Body from './Body.jsx'
import MessageBlock from './MessageBlock.jsx'
import { useNavigate } from 'react-router-dom'

const Chat = ({ socket }) => {


  const navigate = useNavigate();

  const [messages, setMessages] = useState([])
  const [status, setStatus] = useState('')



  useEffect(()=> {
    if (!(localStorage.getItem('user'))) {
      console.log(true)
      navigate('/')
    }
  }, [])




  useEffect(()=> {
    socket.on('responce', (data) => {
      setMessages([...messages, data])
    })
  }, [socket, messages])

  useEffect(()=> {
    socket.on('responceTyping', (data) => setStatus(data))
    setTimeout(() => setStatus(''), 5000)
  }, [socket, status])

  return (
    <div className='chart'>
      <Sidebar socket={socket} />
      <main className='main'>
        <Body messages={messages} status={status} />
        <MessageBlock socket={socket} />
      </main>
    </div>
  )
}

export default Chat