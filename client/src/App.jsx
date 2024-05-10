
import { Link, Route, Routes } from 'react-router-dom'
import socketIO from 'socket.io-client'
import Home from './components/Home/Home'
import Chat from './components/Chat/Chat'
import './assets/styles/style.scss'

const socket = socketIO.connect('http://localhost:5000')


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home socket={socket} />} />
      <Route path='/chat' element={<Chat socket={socket} />} />



      <Route path='/*' element={<div>404 <Link to='/'>Back</Link></div>} />

    </Routes>
  )
}

export default App
