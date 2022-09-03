import React from 'react';
import styles from './alert.module.css';
import { Button } from '@components/common/button';

const Alert = (props) => {
    const { title, text, buttonText, imageIcon } = props;
    return (
        <div className={styles.alert}>
            <div className={styles.alert__icon}>{imageIcon}</div>
            <div className={styles.alert__texts}>
                <div className={styles.alert__title}>{title}</div>
                <div className={styles.alert__text}>{text}</div>
            </div>
            <div className={styles.alert__button}>
                <div className={styles.alert__wrapper}>
                    <Button width={101}>{buttonText}</Button>
                </div>
            </div>
        </div>
    );
};

export { Alert };
