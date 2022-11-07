
import classNames from "classnames/bind";
import styles from './AccountsItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import Image from "../Image";

const cx = classNames.bind(styles)

function AccountsItem() {
    return (
    <div className={cx('wrapper')}>
       <Image className={cx('avatar')} src="https://scontent.fsgn7-1.fna.fbcdn.net/v/t39.30808-1/302061779_1320382448496409_4050517796874385705_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=JjcZIJAz-EwAX8KVMYV&_nc_ht=scontent.fsgn7-1.fna&oh=00_AfBikw3fbPIbwDlyIEIeoJ_Elbkm4Dac_O01P3ac5FovzA&oe=63629959" alt="Annn"/>
       <div className={cx('info')}>
         <h4 className={cx('name')}>
            <span>Le Quoc An</span>
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
         </h4>
      
           <span className={cx('username')}>lequocan</span>
       </div>
    </div>
 );
}

export default AccountsItem;