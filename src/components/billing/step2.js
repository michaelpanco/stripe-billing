import React from 'react';
import styles from './billing.module.css';
import { Button, Note, InputSelect, InputCheck } from '@components/common';
import { useState } from 'react';

const Step2 = (props) => {
    const [finishDisabled, setFinishDisabled] = useState(true);
    const { backToIntro, setUp } = props;

    const onCurrencyCheckChange = (event) => {
        if (event.target.checked) {
            setFinishDisabled(false);
        } else {
            setFinishDisabled(true);
        }
    };
    const setUpAccount = () => {
        setUp();
    };

    return (
        <>
            <div className={styles.billing__navigation} onClick={backToIntro}>
                <div className={styles.billing__back}>
                    <span className="material-icon-fill material-symbols-outlined material-icon-medium material-icon-dark">
                        arrow_back_ios
                    </span>
                </div>
                Back
            </div>
            <div className={styles.billing__title}>Choose Billing Currency</div>
            <p>Select the currency you want to use to bill your clients.</p>
            <Note text="Note: Billing currency cannot be changed in the future. Please make sure you select the correct currency." />
            <InputSelect
                lists={[
                    {
                        value: 'USD',
                        label: 'USD - United State Dollars'
                    },
                    {
                        value: 'GBP',
                        label: 'GBP - British Pound'
                    },
                    {
                        value: 'AUD',
                        label: 'AUD - Australian Dollar'
                    },
                    {
                        value: 'JPY',
                        label: 'JPY - Japanese Yen'
                    }
                ]}
            />
            <InputCheck
                onChange={onCurrencyCheckChange}
                name="currencyAware"
                label="I am aware that I cannot change currency later"
            />
            <div className={styles.billing__button}>
                <Button
                    disabled={finishDisabled}
                    width={126}
                    onClick={setUpAccount}
                >
                    Finish Setup
                </Button>
            </div>
        </>
    );
};

export default Step2;
