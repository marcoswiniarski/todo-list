import style from 'styled-components'

export const Main = style.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #576574;
`

export const Header = style.h2`
  color: #FFF;
  text-transform: uppercase;
`

export const Actions = style.div`
  padding: 16px;
`

export const Input = style.input`
  padding: 8px;
  margin-right: 3px;
  min-width: 260px;
`

export const Button = style.button`
  padding: 10px;
  min-width: 90px;
  color: #FFF;
  background-color: #222f3e;
  border: none;
  border-radius: 10px;
`
export const Count = style.span`
  color: #FFF;
  margin-bottom: 10px;
`

export const List = style.ul`
  list-style-type: none;
  color: #FFF;
  text-transform: uppercase;
`

export const Item = style.li`
  padding: 2px;
  text-decoration: ${(props: { remaining: any }) => props.remaining ? 'line-through': 'none'}
`
