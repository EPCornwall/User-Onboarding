import React from 'react'

export default function Users(props){
const {name, email, password, tos} = props.users
    return(
        <div className='userCards'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>TOS:{tos}</p>
        </div>
    )
}