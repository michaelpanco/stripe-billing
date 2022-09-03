import React from 'react';
import styles from './input_check.module.css';

const InputCheck = (props) => {
    const { label, name, onChange } = props;
    return (
        <div className={styles.inputCheck}>
            <input
                type="checkbox"
                onChange={(event) => onChange(event)}
                id={name}
                name={name}
            />
            <label for={name}> {label}</label>
        </div>
    );
};

export { InputCheck };
