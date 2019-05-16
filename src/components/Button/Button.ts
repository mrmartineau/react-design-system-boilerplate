import styled from 'styled-components'
import { space, SpaceProps, color, ColorProps } from 'styled-system'
import { tokens } from '../../tokens'

interface ButtonProps extends SpaceProps, ColorProps {}

export const Button = styled.button<ButtonProps>`
  background-color: #fff;
  border: 1px solid #ddd;
  font-weight: bold;
  font-size: 20px;
  border-radius: ${tokens.get('radii')};
  padding: 0.3em 1em;
  ${space};
  ${color};
`
