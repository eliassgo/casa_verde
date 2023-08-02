import { T } from './styles'

export type Props = {
  children: string
  fontSize?: string
}

const Titulo = ({ children, fontSize }: Props) => (
  <T fontSize={fontSize}>{children}</T>
)

export default Titulo
