import React from 'react'




export default function Form(props){
    const {handleChange, form, handleSubmit, checkBoxChange} = props

    const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkBoxChange(name, checked)
    }
    return(
        <div>
            <form>
                <input
                    placeholder='Name'
                    name='name'
                    value={form.name}
                    onChange={(e)=>{handleChange(e)}}
                />
                <input
                    placeholder='Email'
                    name='email'
                    value={form.email}
                    onChange={(e)=>{handleChange(e)}}
                />
                <input
                    placeholder='Password'
                    name='password'
                    value={form.password}
                    onChange={(e)=>{handleChange(e)}}
                />
                <label> Terms of Service
                    <input
                        type='checkbox'
                        name='tos'
                        checked={form.tos ===true}
                        onChange={onCheckboxChange}
                    />
                </label>
                
            </form>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
        
}