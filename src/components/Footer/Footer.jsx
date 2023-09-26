import style from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <p>ⓒ React App {new Date().getFullYear()}</p>
    </footer>
  )
}
