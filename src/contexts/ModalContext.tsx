import { ReactNode, createContext, useState } from 'react'
import { disableScroll, enableScroll } from '../utils/handleScroll'

interface ModalContextData {
  imageModalIsOpen: boolean
  openImageModal: () => void
  closeImageModal: () => void
  srcImage: string
  getSrc: (src: string) => void
}

interface ModalContextProviderProps {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextData)

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [imageModalIsOpen, setImageModalIsOpen] = useState(false)
  const [srcImage, setSrcImage] = useState('')

  const openImageModal = () => {
    setImageModalIsOpen(true)
    disableScroll()
  }

  const closeImageModal = () => {
    setImageModalIsOpen(false)
    setSrcImage('')
    enableScroll()
  }

  const getSrc = (src: string) => {
    setSrcImage(src)
  }

  return (
    <ModalContext.Provider
      value={{ imageModalIsOpen, openImageModal, closeImageModal, srcImage, getSrc }}
    >
      {children}
    </ModalContext.Provider>
  )
}
