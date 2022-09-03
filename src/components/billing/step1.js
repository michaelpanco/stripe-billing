import React from 'react';
import styles from './billing.module.css';
import { Button } from '@components/common';

const Step1 = (props) => {
    const { confirming, confirmAccount, connectedAccounts } = props;

    const stripeAccounts = connectedAccounts.map((account, index) => {
        return (
            <div key={index} className={styles.billing__account}>
                <div className={styles.billing__info}>
                    <div>
                        <div className={styles.billing__label}>
                            [name] Stripe Account
                        </div>
                        <div className={styles.billing__label}>[email]</div>
                    </div>
                </div>
                <div className={styles.billing__status}>
                    <span className={styles['billing__status--connected']}>
                        Connected
                    </span>

                    <img src="assets/images/circle_check.png" alt="Connected" />
                </div>
            </div>
        );
    });

    return (
        <>
            <img src="assets/images/stripe_logo.png" alt="Stripe Logo" />
            <div className={styles.billing__title}>Connect Stripe Account</div>
            {connectedAccounts.length < 1 ? (
                <>
                    <p>
                        Client Billing requires a free Stripe account, connect
                        your existing account or create a new one to get
                        started.
                    </p>
                    <div className={styles.billing__fee}>
                        <div className={styles.billing__label}>
                            Transaction Fee
                        </div>
                        <div className={styles.billing__label}>5%</div>
                    </div>
                </>
            ) : (
                <div className={styles.billing__accounts}>{stripeAccounts}</div>
            )}

            <div className={styles.billing__button}>
                <Button
                    processing={confirming}
                    disabled={confirming}
                    width={200}
                    onClick={confirmAccount}
                >
                    {connectedAccounts.length > 0 ? 'Continue' : 'Get Started'}
                </Button>
            </div>
            {connectedAccounts.length < 1 && (
                <div className={styles.billing__help}>
                    <a href="/">
                        Find out more about Client billing
                        <span className="material-symbols-outlined">
                            open_in_new
                        </span>
                    </a>
                </div>
            )}
        </>
    );
};

export default Step1;
