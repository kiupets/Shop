import React from 'react'
import './form-input.styles.scss'
const FormInput = ({ value, label, handleChange, ...other }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...other} />
      {label ? (
        <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  )
}
export default FormInput
