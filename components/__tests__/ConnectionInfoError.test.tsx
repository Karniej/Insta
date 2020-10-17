import * as React from 'react'
import ConnectionInfoError from '../ConnectionInfoError/ConnectionInfoError'
import { render, fireEvent } from '@testing-library/react-native'

it(`renders correctly`, () => {
  const tree = render(<ConnectionInfoError errorMessage='error' />).toJSON()

  expect(tree).toMatchSnapshot()
})
