import { FC } from 'react'
import styles from './chip.module.css'

interface ChipProps {
  label: string
}

export const Chip: FC<ChipProps> = ({ label }) => (
  <div className={styles.base}>{label}</div>
)
