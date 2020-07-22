import React from 'react'

export default function Form(props){
    const {handleChange, form, handleSubmit} = props
    return(
        <div>
            <form>
                <input
                    placeholder='Name'
                    name='name'
                    value={form.name}
                    onChange={(e)=>{handleChange(e)}}
                />
                
            </form>
        </div>
    )
        
}