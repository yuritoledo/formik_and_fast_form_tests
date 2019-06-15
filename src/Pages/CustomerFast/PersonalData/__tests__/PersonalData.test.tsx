import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import PersonalData from '../PersonalDataFast';

// test('should match snapshot', () => {
//   const { asFragment } = render(<PersonalData />)
//   expect(asFragment()).toMatchSnapshot()
// })

describe('Input Name', () => {
  const name = 'name'
  const value = 'yuri'

  test('should Input name works', () => {
    const { getByPlaceholderText } = render(<PersonalData />)
    const input = getByPlaceholderText(name) as HTMLInputElement
    fireEvent.change(input, { target: { value } })

    expect(input.value).toBe(value)
  })

  test('should Input name show error', () => {
    const { getByPlaceholderText, getByTestId, debug } = render(<PersonalData />)
    const input = getByPlaceholderText(name) as HTMLInputElement
    fireEvent.blur(input, { target: { value: '' } })

    const errorMessage = getByTestId(`error-name`)

    expect(input.value).toBe('')
    expect(errorMessage).toBeInTheDocument()
  })

})
