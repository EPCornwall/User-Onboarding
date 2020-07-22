import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import UserList from './components/UserList'


const initialFormValue = {
  name:'',
  email:'',
  password:'',
  //TOS checkbox
}
const initialUsers = []

function App() {
  const [form, setForm] = useState(initialFormValue)
  const [users, setUsers] = useState(initialUsers)
  return (
    <div className="App">
     <Form form={form}/>
     <UserList/>
    </div>
  );
}

export default App;
