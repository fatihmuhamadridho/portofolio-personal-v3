import styles from '../../styles/Layout.module.scss';
import Navbar from './navbar';

export default function Layout(props: any) {
    return(
        <div className={styles.layout}>
            <Navbar />
            {props.children}
        </div>
    )
}