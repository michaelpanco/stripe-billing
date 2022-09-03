import React from 'react';
import styles from './toast.module.css';

const Toast = (props) => {
    const { show, imageIcon, text } = props;

    return (
        show && (
            <div className={styles.toast}>
                <div className={styles.toast__icon}>{imageIcon}</div>
                <div className={styles.toast__message}>
                    <div className={styles.toast__text}>{text}</div>
                    <div className={styles.toast__timestamp}>a seconds ago</div>
                </div>
            </div>
        )
    );
};

export { Toast };
