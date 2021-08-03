import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_PASSWORD } from '../Graphql/Mutation'

function UpdateUserPassword() {
  const [username, setUsername] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

    const [updateUserPassword, { error }] = useMutation(UPDATE_PASSWORD)

    return (
        <div className="updateUserPassword">
          <input 
            type="text" 
            name="username" 
            placeholder="Username" onChange={e => setUsername(e.target.value)}
          />
          <input 
            type="password" 
            name="oldPassword" 
            placeholder="Current Password" onChange={e => setOldPassword(e.target.value)}
          />
          <input 
            type="password" 
            name="newPassword" 
            placeholder="New Password" onChange={e => setNewPassword(e.target.value)}
          />
          <button onClick={() => updateUserPassword({variables: {username, oldPassword, newPassword}})}>Update User Password</button>
        </div>
    )
}

export default UpdateUserPassword
