import React from 'react';
import styles from './note.module.css';

const Note = (props) => {
    const { text } = props;
    return (
        <div className={styles.note}>
            <div className={styles.note__icon}>
                <div className={styles.note__wrapper}>
                    <span className="material-symbols-outlined material-icon-white material-icon-large">
                        priority_high
                    </span>
                </div>
            </div>
            <div className={styles.note__text}>{text}</div>
        </div>
    );
};

export { Note };
