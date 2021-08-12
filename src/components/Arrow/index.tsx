import { RenderArrowProps } from 'react-elastic-carousel'
import { Container } from './style'

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

export const Arrow = ({ type, onClick, isEdge }: RenderArrowProps) => {
  const pointer =
    type === 'PREV' ? (
      <MdKeyboardArrowLeft size={48} />
    ) : (
      <MdKeyboardArrowRight size={48} />
    )
  return (
    <Container>
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    </Container>
  )
}
