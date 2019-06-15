import React from 'react'
import { Field } from 'react-final-form';
import { TextField } from '@material-ui/core';

interface InputProps {
  name: string
  label: string
}

export const Input = ({ name, label }: InputProps) => {
  return (
    <Field
      name={name}
      margin="normal"
      variant="outlined"
    >
      {({ input, meta }) => (
        <div>
          <TextField
            label={label}
            placeholder={name}
            // helperText={<ErrorMessage error={meta.error} touched={meta.touched} name={name} />}
            {...input}
          />
          {meta.touched && meta.error && (
            <span data-testid={`error-${name}`} >{meta.error}</span>
          )}
        </div>
      )}
    </Field>
  )
}