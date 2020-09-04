import { render, screen } from '@testing-library/react'
import List from '.'

describe('<List />', () => {

  it('Deve bater o render com o snapshot do componente', () => {
    const { container } = render(<List />)
    expect(container).toMatchSnapshot()
  })

  it('Deve apresentar o titulo dentro de um <h2/>', () => {
    render(<List />)
    expect(screen.getByRole('heading', { name: /Todo list/i })).toBeInTheDocument()
  })

  it('Deve apresentar os estilos iniciais corretamente', () => {
    const { container } = render(<List />)
    expect(container.firstChild).toHaveStyle({
      'display': 'flex',
      'flex-direction': 'column',
      'background-color': '#576574',
      'height': '100%'
    })
  })
})


