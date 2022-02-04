import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from './components/layout'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faMapMarkerAlt,
  faServer,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.section1}>
          <div className={styles.section1_content}>
            <p style={{ fontSize: "45px", fontWeight: "500", lineHeight: "70px" }}>Want anything to be easy with <span style={{ fontWeight: "bold" }}>LaslesVPN.</span></p>
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
            />
          </div>
          {/* <img src="/Illustration_1.png" alt="" /> */}
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
        <div className={styles.section2}>
          <div className={styles.section2_image}>
            <Image 
              src={'/Illustration_2.png'}
              alt=''
              width={'100%'}
              height={'100%'}
              layout='responsive'
              objectFit='contain'
            />
          </div>
          <div className={styles.section2_content}>
            <p style={{ fontSize: "35px", fontWeight: "500", lineHeight: "50px", width: "400px", paddingTop: "70px" }}>We Provide Many Features You Can Use</p>
            <p style={{ fontSize: "16px", lineHeight: "30px" }}>You can explore the features that we provide with fun and have their own functions each feature.</p>
            <ul style={{ fontSize: "14px", lineHeight: "30px" }}>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#2FAB73", width: "24px", height: "24px" }} />
                <p>Powerfull online protection.</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#2FAB73", width: "24px", height: "24px" }} />
                <p>Internet without borders.</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#2FAB73", width: "24px", height: "24px" }} />
                <p>Supercharged VPN.</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#2FAB73", width: "24px", height: "24px" }} />
                <p>No specific time limits.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
