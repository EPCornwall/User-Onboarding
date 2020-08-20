import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import UserList from './components/UserList';
import * as Yup from "yup";


const initialFormValue = {
  name:'',
  email:'',
  password:'',
  tos: false
}
const initialUsers = [{}]

export default function App() {
  const [form, setForm] = useState(initialFormValue)
  const [users, setUsers] = useState(initialUsers)
  const [buttonDisabled, setButtonDisabled] = useState(true)

  useEffect(() => {
    formSchema.isValid(form).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [form]);

  const [errors, setErrors] = useState({
    name:'',
    email:'',
    password:'',
    tos: ''
  });

  const formSchema = Yup.object().shape({
    name: Yup
    .string()
    .required("Name is required"),
    email: Yup
    .string()
    .email("Must be an email")
    .required("Email is required"),
    password: Yup
    .string()
    .required("Password is required"),
    tos: Yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions")

  });

  const handleChange = (e) =>{
    Yup
    .reach(formSchema, e.target.name)
    .validate(e.target.value)
    .then(valid => {
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    })
    .catch(err => {
      setErrors({
        ...errors,
        [e.target.name]: err.errors[0]
      });
    });

  setForm({
    ...form,
    [e.target.name]: e.target.value
  });
  e.persist();
  };

   

  const checkBoxChange = (name, isChecked) => {
    setForm({
      ...form,
      [name]: isChecked
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    setUsers([...users, form])
    setForm(initialFormValue)
  }

  return (
    <div className="App">
     <Form form={form} 
     handleChange={handleChange} 
     handleSubmit={handleSubmit} 
     checkBoxChange={checkBoxChange}
     buttonDisabled={buttonDisabled}
     errors={errors} />
     <UserList users={users}/>
    </div>
  );
};
