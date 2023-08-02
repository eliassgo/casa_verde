import { P } from './styles'

export type Props = {
  children: string
  fontSize?: string
}

const Paragrafo = ({ children, fontSize }: Props) => (
  <P fontSize={fontSize}>{children}</P>
)

export default Paragrafo
