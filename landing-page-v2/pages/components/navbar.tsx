import styles from '../../styles/Navbar.module.scss';
import Image from 'next/image';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const router = useRouter();
    let [scrollParam, setScrollParam] = useState<number>(0);

    useEffect(() => {
        addEventListener("scroll", event => {
            setScrollParam(scrollY);
        }, { passive: true });
    }, [])

    // console.log(scrollParam);

    return (
        <div className={styles.navbar}>
            <a href="" className={styles.navbar_logo} onClick={() => router.push('/')}>
                <div className={styles.logo_icon}>
                    <Image
                        src={"/favicon.ico"}
                        alt=''
                        width={'100%'}
                        height={'100%'}
                    />
                </div>
                <p>Lasles</p>
                <p style={{ fontWeight: "bold" }}>VPN</p>
            </a>
            <div className={styles.navbar_list}>
                <ul>
                    <li className={scrollParam >= 0 && scrollParam < 700 ? styles.navbar_list_active : styles.navbar_list_notactive}><a href="#section1">About</a></li>
                    <li className={scrollParam >= 700 && scrollParam < 1170 ? styles.navbar_list_active : styles.navbar_list_notactive}><a href="#section2">Features</a></li>
                    <li className={scrollParam >= 1170 && scrollParam < 2998 ? styles.navbar_list_active : styles.navbar_list_notactive}><a href="#section3">Pricing</a></li>
                    <li className={scrollParam >= 2998 && scrollParam < 3585 ? styles.navbar_list_active : styles.navbar_list_notactive}><a href="#section4">Testimonials</a></li>
                    <li className={scrollParam >= 3585 ? styles.navbar_list_active : styles.navbar_list_notactive}><a href="#section5">Help</a></li>
                </ul>
            </div>
            <div className={styles.navbar_sign}>
                <div className={styles.navbar_signin}>
                    <button style={{ cursor: "pointer" }} onClick={() => Swal.fire('Not yet available, sorry.')}>Sign In</button>
                </div>
                <div className={styles.navbar_signup}>
                    <button style={{ cursor: "pointer" }} onClick={() => Swal.fire('Not yet available, sorry.')}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}