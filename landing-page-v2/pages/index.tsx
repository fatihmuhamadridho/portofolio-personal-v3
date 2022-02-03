import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from './components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.section1}>
          <div className={styles.section1_content}>
            <h1>Want anything to be easy with LaslesVPN.</h1>
            <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
            <button>Get Started</button>
          </div>
          <div className={styles.section1_image}>

          </div>
          <Image 
            src={"/Illustration_1.png"}
            alt=''
            width={'100%'}
            height={'100%'}
          />
        </div>
        <div className={styles.section2}>

        </div>
      </div>
    </Layout>
  )
}

export default Home
