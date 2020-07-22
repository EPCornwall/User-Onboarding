import React from 'react';
import Users from './Users'
export default function UserList(props){
    return(
        <div>
            {props.users.map((object, index)=>{
                return <Users users={object} key={index}/>
            })}
        </div>
    )
}