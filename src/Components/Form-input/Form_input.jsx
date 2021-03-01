import React from 'react'
import './Form_input.scss'
const Form_input = ({handleChange, label, ...spreadProps})=>(
    <div className= 'group'>
        <input className='form-input' onChange={handleChange} {...spreadProps}/>
        {label?(
            <label className={`${spreadProps.value.length ? 'shrink':''} 
            form-input-label`}>
                {label}
            </label>
        ):null}
    </div>
)
export default Form_input;