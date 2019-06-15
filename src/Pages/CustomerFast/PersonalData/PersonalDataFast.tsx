import React, { useState, useEffect } from 'react'
import { Container, Button, TextField } from '@material-ui/core'
import { Form, useForm, } from 'react-final-form'
import { Values, ErrorValues } from './Interfaces'
import { Input } from './Components/Components';
import { FormApi } from 'final-form';

const initialValues: Values = {
  name: '', age: '', email: ''
}

const validation = (values: Values) => {
  const err: ErrorValues = {}
  if (!values.name) {
    err.name = 'Insira o nome'
  }
  if (!values.email) {
    err.email = 'Insira o email'
  }
  if (!values.age) {
    err.age = 'Insira a idade'
  }

  return err
}

const PersonalData = () => {

  const [values, setValues] = useState(initialValues)
  useEffect(() => {
    setTimeout(() => {
      setValues({ age: 13, email: 'yuri@yri', name: 'batman' })
    }, 1000);
  }, [])

  const onSubmit = (values: Values) => {
    console.log(values)
  }

  const cep = (form: FormApi<Values>) => {
    form.change('name', 'uhuuuuuu')
  }


  return (
    <Container>
      <Form
        initialValues={values}
        onSubmit={onSubmit}
        validate={validation}
      >
        {({ handleSubmit, form, invalid, submitting }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Input name='name' label='Name' />
              <Input name='age' label='Age' />
              <Input name='email' label='email' />
              <Button type='button' onClick={() => cep(form)} >cep</Button>
              <Button type='submit' disabled={invalid || submitting} >
                Enviar
              </Button>
            </form>
          )
        }}

      </Form>
    </Container>
  )
}

export default PersonalData
