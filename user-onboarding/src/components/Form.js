import React from 'react'




export default function Form(props){
    const {handleChange, form, handleSubmit, checkBoxChange, buttonDisabled, errors} = props

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
                <label htmlFor="tos"> Terms of Service
                    <input
                        type='checkbox'
                        name='tos'
                        checked={form.tos === true}
                        onChange={onCheckboxChange}
                    />
                </label>
              <button disabled={buttonDisabled} onClick={handleSubmit}>Submit</button> 

              
            </form>
            <div className="errors-container">
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.tos}</div>
            </div> 
        </div>
    )
        
}