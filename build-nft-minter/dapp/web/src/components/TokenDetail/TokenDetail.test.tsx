import { render } from '@redwoodjs/testing/web'

import TokenDetail from './TokenDetail'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TokenDetail', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TokenDetail src={''} />)
    }).not.toThrow()
  })
})
