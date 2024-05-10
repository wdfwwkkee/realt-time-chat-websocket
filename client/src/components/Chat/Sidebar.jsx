import React, { useEffect, useState } from 'react'

const sidebar = ({socket}) => {

    const [users, setUsers] = useState([])

    

    useEffect(()=> {

        socket.on('responceNewUser', (data) => {
            setUsers( data)
        })


    },[users, socket])

    const filteredList = users.filter((value, index, self) => {
        index === self.findIndex((t) => (
            t.user === value.user && t.socketIO === value.socketIO
        ))
    })


    return (
        <div className='sidebar'>
            <h4 className='headers'>Users</h4>
            <ul className='users'>
                {users.map(e => 
                    <li key={e.socketIO}>{e.user}</li>
                )}
            </ul>
        </div>
    )
}

export default sidebar