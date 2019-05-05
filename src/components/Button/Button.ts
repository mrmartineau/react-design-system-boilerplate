import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'

export const Button = styled.button<SpaceProps>`
  background-color: #fff;
  border: 1px solid #ddd;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0.5em;
  padding: 0.3em 1em;
  ${space};
`
