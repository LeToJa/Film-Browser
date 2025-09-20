import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import Layout from '.'

vi.mock('react-router-dom', () => ({
  Link: ({ children }: { children: string }) => <a>{children}</a>,
}))

describe('Layout', () => {
  it('matches snapshot with children', () => {
    const { container } = render(
      <Layout>
        <div>Child Content</div>
      </Layout>
    )
    expect(container).toMatchSnapshot()
  })
})
