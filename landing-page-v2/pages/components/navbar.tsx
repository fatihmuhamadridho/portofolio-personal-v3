import styles from '../../styles/Navbar.module.scss';
import Image from 'next/image';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();

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
                    <li><a href="#section1">About</a></li>
                    <li><a href="#section2">Features</a></li>
                    <li><a href="#section3">Pricing</a></li>
                    <li><a href="#section4">Testimonials</a></li>
                    <li><a href="">Help</a></li>
                </ul>
            </div>
            <div className={styles.navbar_sign}>
                <div className="navbar_singin">
                    <button style={{ cursor: "pointer" }} onClick={() => Swal.fire('Not yet available, sorry.')}>Sign In</button>
                </div>
                <div className={styles.navbar_signup}>
                    <button style={{ cursor: "pointer" }} onClick={() => Swal.fire('Not yet available, sorry.')}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}