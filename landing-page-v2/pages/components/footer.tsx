import styles from '../../styles/Footer.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagramSquare,
    faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_about}>
                <div className={styles.footer_about_profile}>
                    <div className={styles.footer_about_profile_icon}>
                        <Image
                            src={"/favicon.ico"}
                            alt=''
                            width={'100%'}
                            height={'100%'}
                            layout='responsive'
                            objectFit='contain'
                        />
                    </div>
                    <p style={{ paddingLeft: "10px", fontSize: "20px", fontWeight: "500", lineHeight: "25px" }}>Lasles<span style={{ fontWeight: "700" }}>VPN</span></p>
                </div>
                <div style={{ width: "340px", marginBottom: "30px" , color: "#4F5665" }}>
                    <p style={{ fontSize: "16px", fontWeight: "400", lineHeight: "30px" }}><span style={{ fontWeight: "500" }}>LaslesVPN</span> is a private virtual network that has unique features and has high security.</p>
                </div>
                <div className={styles.footer_about_socialmedia}>
                    <div className={styles.footer_about_socialmedia_facebook}>
                        <FontAwesomeIcon icon={faFacebook} size='1x' />
                    </div>
                    <div className={styles.footer_about_socialmedia_twitter}>
                        <FontAwesomeIcon icon={faTwitterSquare} size='1x' />
                    </div>
                    <div className={styles.footer_about_socialmedia_instagram}>
                        <FontAwesomeIcon icon={faInstagramSquare} size='1x' />
                    </div>
                </div>
                <div>
                    <p style={{ fontSize: "16px", fontWeight: "400", lineHeight: "30px", color: "#AFB5C0" }}>&copy; Lasles<span style={{ fontWeight: "500" }}>VPN</span></p>
                </div>
            </div>
            <div className={styles.footer_components}>
                <ul>
                    <span style={{ display: "flex", marginBottom: "15px !important", fontSize: "18px", fontWeight: "500", lineHeight: "30px" }}><li><a href="">Product</a></li></span>
                    <div className={styles.footer_components_list}>
                        <li><a href="#section4">Download</a></li>
                        <li><a href="#section4">Pricing</a></li>
                        <li><a href="#section4">Locations</a></li>
                        <li><a href="#section4">Server</a></li>
                        <li><a href="#section4">Countries</a></li>
                        <li><a href="#section4">Blog</a></li>
                    </div>
                </ul>
                <ul>
                    <span style={{ display: "flex", marginBottom: "15px !important", fontSize: "18px", fontWeight: "500", lineHeight: "30px" }}><li><a href="">Engage</a></li></span>
                    <div className={styles.footer_components_list}>
                        <li><a href="#section4">LaslesVPN ?</a></li>
                        <li><a href="#section4">FAQ</a></li>
                        <li><a href="#section4">Tutorials</a></li>
                        <li><a href="#section4">About Us</a></li>
                        <li><a href="#section4">Privacy Policy</a></li>
                        <li><a href="#section4">Terms of Service</a></li>
                    </div>
                </ul>
                <ul>
                    <span style={{ display: "flex", marginBottom: "15px !important", fontSize: "18px", fontWeight: "500", lineHeight: "30px" }}><li><a href="">Earn Money</a></li></span>
                    <div className={styles.footer_components_list}>
                        <li><a href="#section4">Affiliate</a></li>
                        <li><a href="#section4">Become Partner</a></li>
                    </div>
                </ul>
            </div>
        </div>
    )
}