import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d70dc7d9a8d99f921a6717717496bc17~c5_300x300.webp?x-expires=1656846000&x-signature=WZDlAg6%2FQuai%2Fo6Jew9skmGP08k%3D"
                alt="Lam"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Hồ Anh Lâm</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>@anhlam1611</span>
            </div>
        </div>
    );
}

export default AccountItem;
