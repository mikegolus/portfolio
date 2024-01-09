import { FC, HTMLAttributeAnchorTarget } from 'react'
import styles from './button.module.css'
import Link from 'next/link'

interface LinkButtonProps {
  href: string
  label?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  target?: HTMLAttributeAnchorTarget
}

export const LinkButton: FC<LinkButtonProps> = ({
  href,
  label,
  onClick,
  target,
}) => (
  <Link href={href} className={styles.base} onClick={onClick} target={target}>
    {label}
  </Link>
)
