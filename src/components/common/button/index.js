import React from 'react';
import styles from './button.module.css';
import { Loader } from '@components/common/loader';

const Button = (props) => {
    const { disabled, children, onClick, width, processing } = props;

    const submit = () => {
        if (!disabled) {
            onClick();
        }
    };

    return (
        <div
            className={`${styles.button} ${disabled && styles.disabled}`}
            style={{ width: width }}
            onClick={submit}
        >
            {processing ? <Loader size={20} color={'#858484'} /> : children}
        </div>
    );
};

export { Button };
