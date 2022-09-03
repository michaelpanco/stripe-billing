import React from 'react';
import { Container } from '@components/common/container';
import { Alert, Toast } from '@components/common';
import styles from './billing.module.css';
import { useState } from 'react';

// Import Steps
import Step1 from '@components/billing/step1';
import Step2 from '@components/billing/step2';
import PreLoader from '@components/billing/preloader';

// Import Icons
import {
    GroupIcon,
    ProductServicesIcon,
    InvoicesIcon,
    WrenchIcon
} from '../common/icons';

const Billing = (props) => {
    const [currentStep, setCurrentStep] = useState('Step 1');
    const [confirming, setConfirming] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [connectedAccounts, setConnectedAccounts] = useState([]);

    const confirmAccount = () => {
        setConfirming(true);
        setTimeout(() => {
            setCurrentStep('Step 2');
            setConfirming(false);
            setShowToast(true);
        }, 3000);
    };

    const setUpAccount = () => {
        setCurrentStep('Importing');
        setTimeout(() => {
            setConnectedAccounts((connectedAccountsArr) => [
                ...connectedAccountsArr,
                'item'
            ]);
            setCurrentStep('Step 1');
        }, 3000);
    };

    const backToIntro = () => {
        setCurrentStep('Step 1');
    };

    return (
        <div className={styles.billing}>
            <div className={styles.billing__head}>
                <div className={styles.billing__label}>
                    <strong>Client Billing</strong> -{' '}
                    <span>
                        A full payment solution for your business, free with{' '}
                        {props.company}
                    </span>
                </div>
                <div className={styles.billing__action}>
                    Docs
                    <span className="material-symbols-outlined">
                        open_in_new
                    </span>
                </div>
            </div>

            {currentStep === 'Importing' && (
                <div className={styles.billing__menu}>
                    <div className={styles.billing__icons}>
                        <div className={styles.billing__label}>Overview</div>
                        <div className={styles.billing__icon}>
                            <GroupIcon label="Clients" />
                        </div>
                        <div className={styles.billing__icon}>
                            <ProductServicesIcon label="Product &amp; Services" />
                        </div>
                        <div className={styles.billing__icon}>
                            <InvoicesIcon label="Invoices" />
                        </div>
                    </div>
                    <div className={styles.billing__action}>
                        <div className={styles.billing__button}>
                            <WrenchIcon label="Configure" color={'#000000'} />
                        </div>
                    </div>
                </div>
            )}

            {currentStep !== 'Importing' && connectedAccounts.length < 1 && (
                <Alert
                    imageIcon={
                        <img
                            src="assets/images/megaphone.png"
                            alt="Announcement"
                        />
                    }
                    title="Upgrade to pay 0% transaction fee"
                    text="Pay 0% transaction fee and get added benefits by upgrading your account."
                    buttonText="Upgrade"
                />
            )}

            <Container>
                <div className={styles.billing__content}>
                    {currentStep !== 'Importing' && (
                        <div className={styles.billing__head}>
                            <div className={styles.billing__label}>
                                <strong>Getting Started</strong>
                            </div>
                            <div className={styles.billing__action}>
                                {currentStep} of 2 &nbsp;
                                <span
                                    className={`material-icon-fill material-symbols-outlined material-icon-small ${
                                        currentStep !== 'Step 1' &&
                                        'material-icon-faded'
                                    }`}
                                >
                                    radio_button_unchecked
                                </span>
                                <span
                                    className={`material-icon-fill material-symbols-outlined material-icon-small ${
                                        currentStep !== 'Step 2' &&
                                        'material-icon-faded'
                                    }`}
                                >
                                    radio_button_unchecked
                                </span>
                            </div>
                        </div>
                    )}
                    <div className={styles.billing__body}>
                        {currentStep === 'Step 1' && (
                            <Step1
                                confirmAccount={confirmAccount}
                                confirming={confirming}
                                connectedAccounts={connectedAccounts}
                            />
                        )}
                        {currentStep === 'Step 2' && (
                            <Step2
                                backToIntro={backToIntro}
                                setUp={setUpAccount}
                            />
                        )}
                        {currentStep === 'Importing' && <PreLoader />}
                    </div>
                </div>
            </Container>
            <Toast
                imageIcon={
                    <img src="assets/images/check.png" alt="Announcement" />
                }
                show={showToast}
                text="Stripe account connected successfully!"
            />
        </div>
    );
};

export { Billing };
