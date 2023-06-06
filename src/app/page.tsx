import Image from 'next/image'
import styles from './page.module.css'
import Numeros from '@/components/numeros'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Numeros></Numeros>
      </div>
    </main>
  )
}
