import Image from "next/image"
import styles from '../styles/components/Navbar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return(
        <div className={styles.navbar}>
            <div className={styles.navbar_left}>
                <div className={styles.navbar_left_icon}>
                    <Image 
                        src={"/icon.png"}
                        alt=""
                        width={'170px'}
                        height={'35px'}
                        objectFit='contain'
                    />
                </div>
                <div className={styles.navbar_left_list}>
                    <ul>
                        <li>Sell</li>
                        <li>Marketplace</li>
                        <li>Community</li>
                        <li>Develop</li>
                        <li>Resources</li>
                    </ul>
                </div>
            </div>
            <div className={styles.navbar_right}>
                <div className={styles.navbar_right_login}>
                    <button>Log In</button>
                </div>
                <div className={styles.navbar_right_getstarted}>
                    <button>Get Started</button>
                </div>
                <div className={styles.navbar_right_search} style={{ width: "16px", height: "16px" }}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
        </div>
    )
}