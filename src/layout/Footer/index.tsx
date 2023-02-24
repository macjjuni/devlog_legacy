import { text } from '@/styles/global'

const Footer = () => {
  return <footer className={`${text.light} text-sm fc justify-end h-footer italic`}>{new Date().getFullYear()} kkusaeng.</footer>
}

export default Footer
