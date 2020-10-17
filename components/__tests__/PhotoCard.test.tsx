import * as React from 'react'
import PhotoCard from '../PhotoCard/PhotoCard'
import { render, fireEvent, waitFor } from '@testing-library/react-native'

jest.mock('@react-native-community/async-storage', () => jest.fn())

it(`renders correctly`, () => {
  const props = {
    imgSrc: '',
    description: 'Description',
    onPress: jest.fn(),
  }
  const tree = render(<PhotoCard {...props} />).toJSON()

  expect(tree).toMatchSnapshot()
})
