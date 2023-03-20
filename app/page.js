import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Form from './components//Form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      Setup of Lexical
      <div>
      <Form />
      </div>
      <div>Show the data</div>
    </main>
  )
}
