import { Box, CloseButton, Container, OverlayBackdrop, OverlayBody } from './style'

import { MdClose } from 'react-icons/md'
import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'

export const ImageModal: React.FC = () => {
  const { closeImageModal, srcImage } = useContext(ModalContext)

  function closeModalClickingInOverlay(e: any) {
    if (e.currentTarget === e.target) {
      closeImageModal()
    }
  }
  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <OverlayBackdrop />
      <OverlayBody onClick={closeModalClickingInOverlay}>
        <Box initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <img src={srcImage} alt="imagem" />
          <CloseButton onClick={closeImageModal}>
            <MdClose size="26" />
          </CloseButton>
        </Box>
      </OverlayBody>
    </Container>
  )
}
