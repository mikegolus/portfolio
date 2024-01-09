'use client'

import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import styles from './cursor.module.css'
import cx from 'classnames'

type CursorPosition = { x: number | null; y: number | null }

export const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: null,
    y: null,
  })
  const [targetIsHover, setTargetIsHover] = useState(false)

  const getCursorPosition = useCallback((e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY })
    const element = document.elementFromPoint(e.clientX, e.clientY)
    if (
      element?.nodeName.toLowerCase() === 'a' ||
      element?.nodeName.toLowerCase() === 'button'
    ) {
      setTargetIsHover(true)
    } else {
      setTargetIsHover(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', getCursorPosition)
    return () => {
      document.removeEventListener('mousemove', getCursorPosition)
    }
  }, [getCursorPosition])

  if (cursorPosition.x === null || cursorPosition.y === null) {
    return null
  }

  return (
    <>
      <div
        className={styles.primary}
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
      />
      <motion.div
        initial={false}
        className={cx(styles.secondary, targetIsHover && styles.hover)}
        animate={{
          x: cursorPosition.x,
          y: cursorPosition.y,
          transition: { type: 'spring', mass: 0.2, damping: 10 },
        }}
      />
    </>
  )
}
