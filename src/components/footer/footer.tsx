import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      &copy;{new Date().getFullYear()} Mike Golus. Made from scratch.
    </footer>
  )
}
