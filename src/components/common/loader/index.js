import React from 'react';
import styles from './loader.module.css';

const Loader = (props) => {
    const { color, size } = props;
    let strokeColor = '#fff';
    let spinnerSize = 50;
    if (color) {
        strokeColor = color;
    }
    if (size) {
        spinnerSize = size;
    }

    return (
        <svg
            className={styles.spinner}
            style={{ width: spinnerSize, height: spinnerSize }}
            viewBox="0 0 50 50"
        >
            <circle
                className={styles.path}
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke-width="5"
                stroke={strokeColor}
            ></circle>
        </svg>
    );
};

export { Loader };
