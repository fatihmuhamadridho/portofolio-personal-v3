import styles from '../../styles/TestimoniCards.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStar,
} from '@fortawesome/free-solid-svg-icons'

export default function TestimoniCards(props: any) {
    return (
        <div className={styles.cards_testimoni}>
            <div className={styles.cards_testimoni_profile}>
                <div className={styles.cards_testimoni_profile_detail}>
                    <div className={styles.cards_testimoni_profile_detail_person}>
                        <div style={{ width: "50px", borderRadius: "100% !important" }}>
                            <Image
                                src={`/profile/${props.imageSrc}`}
                                alt=''
                                width={'100%'}
                                height={'100%'}
                                layout='responsive'
                                objectFit='contain'
                            />
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                            <p style={{ fontSize: "18px", fontWeight: "500", lineHeight: "20px" }}>{props.name}</p>
                            <p style={{ color: "#4F5665" }}>{props.address}</p>
                        </div>
                    </div>
                    <div className={styles.cards_testimoni_profile_detail_rating}>
                        <p style={{ paddingRight: "5px" }}>{props.rating}</p>
                        <div style={{ width: "16px" }}>
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FEA250" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.cards_testimoni_content}>
                <p style={{ fontSize: "16px", fontWeight: "400", lineHeight: "25px" }}>“{props.text}”.</p>
            </div>
        </div>
    )
}