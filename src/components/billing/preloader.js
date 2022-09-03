import React from 'react';
import styles from './billing.module.css';
import { Loader } from '@components/common';

const PreLoader = (props) => {
    const {} = props;

    return (
        <>
            <div className={styles.billing__loader}>
                <Loader color="#aaaaaa" />
            </div>

            <div className={styles.billing__title}>
                Importing Stripe Configurations
            </div>
            <p>
                Please wait while we are importing your Stripe configurations.
                It will only take a few seconds…
            </p>
        </>
    );
};

export default PreLoader;
