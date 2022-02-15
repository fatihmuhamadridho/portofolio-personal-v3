import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>WooCommerce</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.section1}>
          <div className={styles.section1_background}>
            <Image
              src={"/hero_section.png"}
              alt=""
              width={'100%'}
              height={'100%'}
              layout="responsive"
              objectFit='contain'
            />
          </div>
          <div className={styles.section1_content}>
            <p style={{ width: "820px", height: "285px", paddingLeft: "200px", fontSize: "65px", fontWeight: "700", lineHeight: "95px" }}>Building exactly the eCommerce website you want.</p>
            <div className={styles.section1_content_detail}>
              <p>WooCommerce is a customizable, open-source eCommerce platform build on WordPress.</p>
              <p>Get started quickly and make your way.</p>
            </div>
            <div className={styles.section1_content_button}>
              <button>Start a New Store</button>
              <p>or</p>
              <p>Customize &amp; Extends</p>
            </div>
          </div>
          <div className={styles.section1_image}>
            <Image 
              src={"/featured-image.png"}
              alt=""
              width={'100%'}
              height={'80%'}
              layout="responsive"
              objectFit='contain'
            />
          </div>
        </div>
        <div className={styles.section2}>

        </div>
        <div className={styles.section3}>

        </div>
        <div className={styles.section4}>

        </div>
        <div className={styles.section5}>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
