import React from 'react';
import styles from './input_select.module.css';

const InputSelect = (props) => {
    const { lists } = props;
    return (
        <div className={styles.inputSelect__wrapper}>
            <select className={styles.inputSelect}>
                {lists.map((list, index) => {
                    return (
                        <option key={index} value={list.value}>
                            {list.label}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export { InputSelect };
