'use client'

import {
  animate,
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from 'framer-motion'
import {
  Button,
  Dialog,
  Heading,
  Modal,
  ModalOverlay,
} from 'react-aria-components'
import { useState } from 'react'
import styles from './modal.module.css'
import { useAppContext } from '../app/app'

// Wrap React Aria modal components so they support framer-motion values.
const MotionModal = motion(Modal)
const MotionModalOverlay = motion(ModalOverlay)

const inertiaTransition = {
  type: 'inertia' as const,
  bounceStiffness: 300,
  bounceDamping: 40,
  timeConstant: 300,
}

const staticTransition = {
  duration: 0.5,
  ease: [0.32, 0.72, 0, 1],
}

const SHEET_MARGIN = 34
const SHEET_RADIUS = 12

export const Sheet = () => {
  const [isOpen, setOpen] = useState(false)
  const h = window.innerHeight - SHEET_MARGIN
  const y = useMotionValue(h)
  const bgOpacity = useTransform(y, [0, h], [0.4, 0])
  const bg = useMotionTemplate`rgba(0, 0, 0, ${bgOpacity})`
  const { rootElementRef } = useAppContext()
  const rootElement = rootElementRef?.current

  // Scale the body down and adjust the border radius when the sheet is open.
  const bodyScale = useTransform(
    y,
    [0, h],
    [(window.innerWidth - SHEET_MARGIN) / window.innerWidth, 1],
  )
  const bodyTranslate = useTransform(
    y,
    [0, h],
    [SHEET_MARGIN - SHEET_RADIUS, 0],
  )
  const bodyBorderRadius = useTransform(y, [0, h], [SHEET_RADIUS, 0])

  useMotionValueEvent(
    bodyScale,
    'change',
    (v) => (rootElement.style.scale = `${v}`),
  )
  useMotionValueEvent(
    bodyTranslate,
    'change',
    (v) => (rootElement.style.translate = `0 ${v}px`),
  )
  useMotionValueEvent(
    bodyBorderRadius,
    'change',
    (v) => (rootElement.style.borderRadius = `${v}px`),
  )

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open sheet</Button>
      <AnimatePresence>
        {isOpen && (
          <MotionModalOverlay
            // Force the modal to be open when AnimatePresence renders it.
            isOpen
            onOpenChange={setOpen}
            className={styles.overlay}
            style={{ backgroundColor: bg as any }}
          >
            <MotionModal
              className={styles.base}
              initial={{ y: h }}
              animate={{ y: 0 }}
              exit={{ y: h }}
              transition={staticTransition}
              style={{
                y,
                top: SHEET_MARGIN,
                // Extra padding at the bottom to account for rubber band scrolling.
                paddingBottom: window.screen.height,
              }}
              drag="y"
              dragConstraints={{ top: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.y > window.innerHeight * 0.75 || velocity.y > 10) {
                  setOpen(false)
                } else {
                  animate(y, 0, { ...inertiaTransition, min: 0, max: 0 })
                }
              }}
            >
              <div className={styles['drag-affordance']} />
              <Dialog className={styles.dialog}>
                <Heading slot="title">Modal sheet</Heading>
                <p>
                  This is a dialog with a custom modal overlay built with React
                  Aria Components and Framer Motion.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean sit amet nisl blandit, pellentesque eros eu,
                  scelerisque eros. Sed cursus urna at nunc lacinia dapibus.
                </p>
              </Dialog>
            </MotionModal>
          </MotionModalOverlay>
        )}
      </AnimatePresence>
    </>
  )
}
