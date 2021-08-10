import { useContext, BaseSyntheticEvent } from 'react'

import { ModalContext } from '../../contexts/ModalContext'
import { Container } from './style'

interface ImageProps {
  src: string
  area: string
  alt: string
}

export const GalleryImage: React.FC<ImageProps> = ({ src, area, alt }) => {
  const { getSrc, srcImage, openImageModal } = useContext(ModalContext)

  const getUrl = (e: BaseSyntheticEvent) => {
    getSrc(e.target.src)
    openImageModal()
  }

  return (
    <Container onClick={getUrl} src={src} style={{ gridArea: area }} alt={alt} />
  )
}
