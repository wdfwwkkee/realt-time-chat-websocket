import React from 'react'
import { useNavigate } from 'react-router-dom'

const body = ({ messages, status }) => {

    console.log(messages)

    const navigate = useNavigate();

    const handleLeave = () => {
        localStorage.removeItem('user')
        navigate('/')
    }

    return (
        <div className='Body'>
            <header className='header'>
                <button onClick={handleLeave} className='btn'>Покинуть чат</button>
            </header>
            <div className="container">
                {
                    messages.map(e => (
                        e.name === localStorage.getItem('user') ? (
                            <div key={e.id} className="chats">
                                <p>Вы</p>
                                <div className="message-sender">
                                    <div>{e.text}</div>
                                </div>
                            </div>
                        ) : (
                            <div key={e.id} className="chats">
                                <p>{e.name}</p>
                                <div className="message-recipient">
                                    <div>{e.text}</div>
                                </div>
                            </div>
                        )
                    ))
                }




                {status ? (
                    <div className="status">
                        <p>{status}...</p>
                    </div>

                )
                    : null

                }

            </div>
        </div>
    )
}

export default body