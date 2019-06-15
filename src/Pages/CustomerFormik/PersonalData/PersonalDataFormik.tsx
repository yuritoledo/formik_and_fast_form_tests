import React, { useState, useEffect } from 'react'
import { useFormik, Form, Field } from 'formik'
import { Values } from './Interfaces';
import { TextField, Button } from '@material-ui/core';

const initialValues: Values = {
  name: '', age: '', email: ''
}


const PersonalData = () => {

  const { handleSubmit, isSubmitting, isValid, getFieldProps } = useFormik({
    initialValues,

    onSubmit: values => {
      console.log(values)
    }
  })

  const [inputname, metaname] = getFieldProps({ name: 'name' })
  const [inputage, metaage] = getFieldProps({ name: 'age', type: 'number' })
  const [inputemail, metaemail] = getFieldProps({ name: 'email', type: 'email' })

  console.log(1)

  return (
    <form onSubmit={handleSubmit} >
      <TextField name='name' {...inputname} />
      <TextField name='age' {...inputage} />
      <TextField name='email' {...inputemail} />
      <Button type='submit' disabled={!isValid || isSubmitting} >
        Enviar
      </Button>
    </form>
  )
}

export default PersonalData
