import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../Graphql/Mutation'

function CreateUser() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [createUser, { error }] = useMutation(CREATE_USER)

    return (
        <div className="createUser">
          <input 
            type="text" 
            name="name" 
            placeholder="Name" onChange={e => setName(e.target.value)}
          />
          <input 
            type="text" 
            name="username" 
            placeholder="Username" onChange={e => setUsername(e.target.value)}
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" onChange={e => setPassword(e.target.value)}
          />
          <button onClick={() => createUser({variables: {name, username, password}})}>Create User</button>
        </div>
    )
}

export default CreateUser
