import { useContext } from 'react'
import { DatesContext } from '../../contexts/DatesContext'
import { Highlighter } from '../Highlighter'
import { Container } from './style'

export const YearButton: React.FC<App.Date> = ({ id, date, team, isActive }) => {
  const { activeData } = useContext(DatesContext)

  const handleClick = () => {
    activeData({ id, date, team, isActive })
  }

  return (
    <Container onClick={handleClick} isActive={isActive}>
      {date}
      {isActive && <Highlighter team={team} />}
    </Container>
  )
}
