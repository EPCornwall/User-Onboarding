import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import UserList from './components/UserList'


const initialFormValue = {
  name:'',
  email:'',
  password:'',
  tos:'false'
}
const initialUsers = [{}]

function App() {
  const [form, setForm] = useState(initialFormValue)
  const [users, setUsers] = useState(initialUsers)

  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const checkboxChange = (name, isChecked) => {

  //   setForm({
  //     ...form,
  //     [name]: isChecked
  //   })
  // }

  const handleSubmit = (e) =>{
    setUsers([...users, form])
  }

  return (
    <div className="App">
     <Form form={form} handleChange={handleChange} handleSubmit={handleSubmit}/>
     <UserList users={users}/>
    </div>
  );
}

export default App;
