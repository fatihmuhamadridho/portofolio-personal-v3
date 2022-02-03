import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Ini toggle</h1>
        <div className={styles.toggle}>
          <input 
            type="checkbox" 
            className={styles.checkbox}
            id={styles.checkbox}
          />
          <label htmlFor="checkbox" className={styles.label}>
            <div className={styles.toggle_cloud}>
              <Image 
                src={'/cloud.png'}
                alt=''
                width={'100%'}
                height={'100%'}
              />
            </div>
            <div className={styles.toggle_sun}></div>
          </label>
        </div>
      </main>
    </div>
  )
}

export default Home
