import React from 'react'
import './Custom-Button.scss'
const Custom_button = ({children , inverted , isGoogle , ...otherProps})=>(
    <button className={` ${inverted? 'inverted' : ''} custom-button ${isGoogle? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}

    </button>
)
export default Custom_button;