import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 4;
  position: fixed;
  top: 0;
  left: 0;
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const OverlayBackdrop = styled(Overlay)`
  background: rgba(0, 0, 0, 0.7);
  z-index: 5;
`

export const OverlayBody = styled(Overlay)`
  overflow-y: auto;
  z-index: 6;
`

export const Box = styled(motion.div)`
  border-radius: 5px;
  padding: 24px;
  background: rgba(0, 0, 0, 0.7);
  position: relative;

  img {
    object-fit: contain;
    max-height: 90vh;
    max-width: 90vw;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 3px;
  right: 3px;
  color: var(--text-primary);
  transition: filter 0.2s background 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: brightness(0.8);
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
  }
`
