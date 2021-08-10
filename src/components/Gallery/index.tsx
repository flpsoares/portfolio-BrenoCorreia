import {
  Container,
  FifthColumn,
  FirstColumn,
  FourthColumn,
  SecondColumn,
  SixthColumn,
  ThirdColumn,
  Wrapper
} from './style'

import { GalleryImage } from '../GalleryImage'

import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import { ImageModal } from '../ImageModal'

export const Gallery: React.FC = () => {
  const { imageModalIsOpen } = useContext(ModalContext)

  return (
    <Container>
      <h1>GALERIA DE FOTOS</h1>
      <Wrapper>
        {imageModalIsOpen && <ImageModal />}
        <FirstColumn>
          <GalleryImage area="f1" src="/assets/galery/foto11.jpg" alt="foto11" />
          <GalleryImage area="f2" src="/assets/galery/foto20.jpg" alt="foto20" />
          <GalleryImage area="f3" src="/assets/galery/foto4.jpg" alt="foto4" />
          <GalleryImage area="f4" src="/assets/galery/foto2.jpg" alt="foto2" />
        </FirstColumn>
        <SecondColumn>
          <GalleryImage area="f1" src="/assets/galery/foto16.jpg" alt="foto16" />
          <GalleryImage area="f2" src="/assets/galery/foto21.jpg" alt="foto21" />
          <GalleryImage area="f3" src="/assets/galery/foto17.jpg" alt="foto17" />
        </SecondColumn>
        <ThirdColumn>
          <GalleryImage area="f1" src="/assets/galery/foto18.jpg" alt="foto18" />
          <GalleryImage area="f2" src="/assets/galery/foto3.jpg" alt="foto3" />
          <GalleryImage area="f3" src="/assets/highlights/thumb2.png" alt="thumb2" />
        </ThirdColumn>
        <FourthColumn>
          <GalleryImage area="f1" src="/assets/galery/foto8.jpg" alt="foto8" />
          <GalleryImage area="f2" src="/assets/galery/foto10.jpg" alt="foto10" />
          <GalleryImage area="f3" src="/assets/galery/foto4.jpg" alt="foto4" />
          <GalleryImage area="f4" src="/assets/galery/foto12.jpg" alt="foto12" />
        </FourthColumn>
        <FifthColumn>
          <GalleryImage area="f1" src="/assets/galery/foto19.jpg" alt="foto19" />
          <GalleryImage area="f2" src="/assets/galery/foto20.jpg" alt="foto20" />
          <GalleryImage area="f3" src="/assets/galery/foto14.jpg" alt="foto14" />
        </FifthColumn>
        <SixthColumn>
          <GalleryImage area="f1" src="/assets/galery/foto10.jpg" alt="foto10" />
          <GalleryImage area="f2" src="/assets/galery/foto21.jpg" alt="foto21" />
          <GalleryImage area="f3" src="/assets/galery/foto11.jpg" alt="foto11" />
        </SixthColumn>
      </Wrapper>
    </Container>
  )
}
