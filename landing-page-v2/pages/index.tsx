import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faMapMarkerAlt,
  faServer,
  faCheckCircle,
  faCheck,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/navbar';
import TestimoniCards from './components/testimoniCards';
import { useEffect, useState } from 'react';
import $ from 'jquery'
import Footer from './components/footer'

const Home: NextPage = () => {
  let [scrollParam, setScrollParam] = useState<number>(0);

  useEffect(() => {
    const scroll = document.querySelector('#testimoni');
    scroll?.addEventListener("scroll", event => {
      setScrollParam(scroll.scrollLeft)
      // console.log(scroll.scrollWidth)
    }, { passive: true });
  }, [setScrollParam])

  function scrollLeftButton() {
    $('html, body, #testimoni').scrollLeft(scrollParam - 1000)
  }

  function scrollRightButton() {
    $('html, body, #testimoni').scrollLeft(scrollParam + 1000)
  }

  // console.log(scrollParam)

  return (
    <div className={styles.layout}>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9923826095006802" crossOrigin="anonymous"></script>
        <title>Lasles VPN</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.section1} id='section1'>
          <div className={styles.section1_content}>
            <p style={{ fontSize: "45px", fontWeight: "500", lineHeight: "70px", marginTop: "0px" }}>Want anything to be easy with <span style={{ fontWeight: "bold" }}>LaslesVPN.</span></p>
            <p style={{ color: "#4F5665" }}>Provide a network for all your needs with ease and fun using <span style={{ fontWeight: "bold" }}>LaslesVPN</span> discover interesting features from us.</p>
            <button onClick={() => Swal.fire('Not yet available, sorry.')}>Get Started</button>
            <div className={styles.buttonfilter}></div>
          </div>
          <div className={styles.section1_image}>
            <Image 
              src={"/Illustration_1.png"}
              alt=''
              width='100%'
              height='100%'
              layout='responsive'
              objectFit='contain'
              priority
            />
          </div>
        </div>
        <div className={styles.graphbar}>
          <div className={styles.graphbar_detail}>
            <div className={styles.graphbar_detail_users}>
              <div className={styles.graphbar_detail_users_icon}>
                <FontAwesomeIcon icon={faUser}
                  style={{ 
                    width: "20px",
                    height: "20px",
                    color: "#F53838",
                  }}
                />
              </div>
              <div>
                <p className={styles.graphbar_detail_users_header}>90+</p>
                <p>Users</p>
              </div>
            </div>
            <span style={{ height: "125px", border: "1px solid #EEEFF2" }}></span>
            <div className={styles.graphbar_detail_locations}>
              <div className={styles.graphbar_detail_locations_icon}>
                <FontAwesomeIcon icon={faMapMarkerAlt}
                  style={{ 
                    width: "20px",
                    height: "20px",
                    color: "#F53838",
                  }}
                />
              </div>
              <div>
                <p className={styles.graphbar_detail_locations_header}>30+</p>
                <p>Locations</p>
              </div>
            </div>
            <span style={{ height: "125px", border: "1px solid #EEEFF2" }}></span>
            <div className={styles.graphbar_detail_servers}>
              <div className={styles.graphbar_detail_servers_icon}>
                <FontAwesomeIcon icon={faServer}
                  style={{ 
                    width: "20px",
                    height: "20px",
                    color: "#F53838",
                  }}
                />
              </div>
              <div>
                <p className={styles.graphbar_detail_servers_header}>30+</p>
                <p>Locations</p>
              </div>
            </div>
          </div>
          <div className={styles.graphbarfilter}></div>
        </div>
        <div className={styles.section2} id='section2'>
          <div className={styles.section2_image}>
            <Image 
              src={'/Illustration_2.png'}
              alt=''
              width={'100%'}
              height={'100%'}
              layout='responsive'
              objectFit='contain'
              priority
            />
          </div>
          <div className={styles.section2_content}>
            <p style={{ fontSize: "35px", fontWeight: "500", lineHeight: "50px", width: "400px", paddingTop: "70px" }}>We Provide Many Features You Can Use</p>
            <p style={{ fontSize: "16px", lineHeight: "30px" }}>You can explore the features that we provide with fun and have their own functions each feature.</p>
            <ul style={{ fontSize: "14px", lineHeight: "30px" }}>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#2FAB73", width: "16px", height: "16px" }} />
                <p>Powerfull online protection.</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#2FAB73", width: "16px", height: "16px" }} />
                <p>Internet without borders.</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#2FAB73", width: "16px", height: "16px" }} />
                <p>Supercharged VPN.</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#2FAB73", width: "16px", height: "16px" }} />
                <p>No specific time limits.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.section3} id='section3'>
          <div className={styles.section3_content1}>
            <p style={{ fontSize: "35px", fontWeight: "500", lineHeight: "50px", marginTop: "80px" }}>Choose Your Plan</p>
            <p style={{ width: "555px", fontSize: "16px", textAlign: "center", lineHeight: "30px", marginBottom: "60px" }}>Let&apos;s choose the package that is best for you and explore it happily and cheerfully.</p>
          </div>
          <div className={styles.section3_content2}>
            <div className={styles.section3_content2_freeplan}>
              <div className={styles.section3_content2_freeplan_top}>
                <div style={{ width: "145px", height: "145px", marginTop: "50px"}}>
                  <Image 
                    src={"/Plan.png"}
                    alt=''
                    width={'50%'}
                    height={'50%'}
                    layout='responsive'
                    objectFit='contain'
                  />
                </div>
                <p style={{ fontSize: "18px", fontWeight: "500", lineHeight: "30px", margin: "30px 0px" }}>Free Plan</p>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#2FAB73", width: "16px", height: "16px" }} />
                    <p>Unlimited Bandwitch</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#2FAB73", width: "16px", height: "16px" }} />
                    <p>Encrpted Connection</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#2FAB73", width: "16px", height: "16px" }} />
                    <p>No Traffic Logs</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#2FAB73", width: "16px", height: "16px" }} />
                    <p>Works on All Devices</p>
                  </li>
                </ul>
              </div>
              <div className={styles.section3_content2_freeplan_bottom}>
                <p style={{ fontSize: "25px", fontWeight: "500", lineHeight: "30px" }}>Free</p>
                <button onClick={() => Swal.fire('Not yet available, sorry.')}>Select</button>
              </div>
            </div>
            <div className={styles.section3_content2_standardplan}>
              <div className={styles.section3_content2_standardplan_top}>
                <div style={{ width: "145px", height: "145px", marginTop: "50px"}}>
                  <Image 
                    src={"/Plan.png"}
                    alt=''
                    width={'50%'}
                    height={'50%'}
                    layout='responsive'
                    objectFit='contain'
                  />
                </div>
                <p style={{ fontSize: "18px", fontWeight: "500", lineHeight: "30px", margin: "30px 0px" }}>Standard Plan</p>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#2FAB73", width: "16px", height: "16px" }} />
                    <p>Unlimited Bandwitch</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#2FAB73", width: "16px", height: "16px" }} />
                    <p>Encrpted Connection</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#2FAB73", width: "16px", height: "16px" }} />
                    <p>Yes Traffic Logs</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#2FAB73", width: "16px", height: "16px" }} />
                    <p>Works on All Devices</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#2FAB73", width: "16px", height: "16px" }} />
                    <p>Connect Anywhere</p>
                  </li>
                </ul>
              </div>
              <div className={styles.section3_content2_standardplan_bottom}>
                <p style={{ fontSize: "25px", fontWeight: "500", lineHeight: "30px" }}>$9 / <span style={{ fontWeight: "normal" }}>mo</span></p>
                <button onClick={() => Swal.fire('Not yet available, sorry.')}>Select</button>
              </div>
            </div>
            <div className={styles.section3_content2_premiumplan}>
              <div className={styles.section3_content2_premiumplan_top}>
                <div style={{ width: "145px", height: "145px", marginTop: "50px"}}>
                  <Image 
                    src={"/Plan.png"}
                    alt=''
                    width={'50%'}
                    height={'50%'}
                    layout='responsive'
                    objectFit='contain'
                  />
                </div>
                <p style={{ fontSize: "18px", fontWeight: "500", lineHeight: "30px", margin: "30px 0px" }}>Premium Plan</p>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#2FAB73", width: "16px", height: "16px" }} />
                    <p>Unlimited Bandwitch</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#2FAB73", width: "16px", height: "16px" }} />
                    <p>Encrpted Connection</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#2FAB73", width: "16px", height: "16px" }} />
                    <p>No Traffic Logs</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#2FAB73", width: "16px", height: "16px" }} />
                    <p>Works on All Devices</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#2FAB73", width: "16px", height: "16px" }} />
                    <p>Connect Anywhere</p>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#2FAB73", width: "16px", height: "16px" }} />
                    <p>Get New Features</p>
                  </li>
                </ul>
              </div>
              <div className={styles.section3_content2_premiumplan_bottom}>
                <p style={{ fontSize: "25px", fontWeight: "500", lineHeight: "30px" }}>$12 / <span style={{ fontWeight: "normal" }}>mo</span></p>
                <button onClick={() => Swal.fire('Not yet available, sorry.')}>Select</button>
                <div className={styles.section3_content2_premiumplan_bottom_filter}></div>
              </div>
            </div>
          </div>
          <div className={styles.section3_content3}>
            <p style={{ width: "380px", marginTop: "100px", fontSize: "35px", fontWeight: "500", lineHeight: "50px", textAlign: "center" }}>Huge Global Network of Fast VPN</p>
            <p style={{ width: "555px", marginTop: "20px", fontSize: "16px", fontWeight: "400", lineHeight: "30px", textAlign: "center" }}>See <span style={{ fontWeight: "500" }}>LaslesVPN</span> everywhere to make it easier for you when you move locations.</p>
          </div>
          <div className={styles.section3_content4} style={{ width: "90%", marginTop: "100px" }}>
            <Image 
              src={"/Huge_Global.png"}
              alt=''
              width={'100%'}
              height={'55%'}
              layout='responsive'
              objectFit='contain'
              priority
            />
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "1000px" }}>
              <Image 
                src={"/Sponsored.png"}
                alt=''
                width={'100%'}
                height={'20%'}
                layout='responsive'
                objectFit='contain'
                priority
              />
            </div>
          </div>
        </div>
        <div className={styles.section4} id='section4'>
          <div className={styles.section4_content}>
            <p style={{ width: "450px", height: "100px", fontSize: "35px", fontWeight: "500", lineHeight: "50px", textAlign: "center" }}>Trusted by Thousand of Happy Customer</p>
            <p style={{ width: "555px", height: "60px", margin: "20px 0px 60px 0px", fontSize: "16px", fontWeight: "400", lineHeight: "30px", textAlign: "center", color: "#4F5665" }}>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
          </div>
        </div>
        <div className={styles.testimoni} id="testimoni">
          <TestimoniCards
            imageSrc={'person0.jpeg'}
            name={'Fatih Muhamad Ridho'}
            address={'Tangerang, Indonesia'}
            rating={'5.0'}
            text={'This is very unusual for my business that currently requires a virtual private network that has high security.'}
          />
          <TestimoniCards
            imageSrc={'person1.png'}
            name={'Viezh Robert'}
            address={'Warsaw, Poland'}
            rating={'4.5'}
            text={'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best'}
          />
          <TestimoniCards
            imageSrc={'person2.png'}
            name={'Yessica Christy'}
            address={'Shanxi, China'}
            rating={'4.5'}
            text={'I like it because I like to travel far and still can connect with high speed'}
          />
          <TestimoniCards
            imageSrc={'person3.png'}
            name={'Kim Young Jou'}
            address={'Seoul, South Korea'}
            rating={'4.6'}
            text={'This is very unusual for my business that currently requires a virtual private network that has high security.'}
          />
        </div>
        <div className={styles.testimoni_scroll}>
          <div className={styles.testimoni_scroll_bar}>
            <div className={scrollParam < 180 ? styles.testimoni_scroll_bar_active : styles.testimoni_scroll_bar_notactive}></div>
            <div className={scrollParam >= 180 && scrollParam < 360 ? styles.testimoni_scroll_bar_active : styles.testimoni_scroll_bar_notactive}></div>
            <div className={scrollParam >= 360 && scrollParam < 540 ? styles.testimoni_scroll_bar_active : styles.testimoni_scroll_bar_notactive}></div>
            <div className={scrollParam >= 540 ? styles.testimoni_scroll_bar_active : styles.testimoni_scroll_bar_notactive}></div>
          </div>
          <div className={styles.testimoni_scroll_button}>
            <div className={styles.testimoni_scroll_button_icon}>
              <FontAwesomeIcon icon={faArrowAltCircleLeft} size='1x' onClick={() => scrollLeftButton()} />
            </div>
            <div className={styles.testimoni_scroll_button_icon}>
              <FontAwesomeIcon icon={faArrowAltCircleRight} size='1x' onClick={() => scrollRightButton()} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.subscribe}>
        <div className={styles.subscribe_container}>
          <div className={styles.subscribe_container_content}>
            <p style={{ width: "370px", marginBottom: "20px", fontSize: "35px", fontWeight: "500", lineHeight: "45px" }}>Subscribe Now for Get Special Features!</p>
            <p style={{ width: "400px", fontSize: "16px", fontWeight: "400", lineHeight: "30px" }}>Let&apos;s subscribe with us and find the fun.</p>
          </div>
          <div className={styles.subscribe_container_button}>
            <button onClick={() => Swal.fire('No yet available, sorry.')}>Subscribe Now</button>
            <div className={styles.subscribe_container_button_filter}></div>
          </div>
        </div>
      </div>
      <div className={styles.section5} id='section5'>
        <Footer />
      </div>
    </div>
  )
}

export default Home