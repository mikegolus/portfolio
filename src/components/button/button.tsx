import { FC } from 'react'
import styles from './button.module.css'

interface ButtonProps {
  label?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => (
  <button type="button" className={styles.base} onClick={onClick}>
    {label}
  </button>
)
