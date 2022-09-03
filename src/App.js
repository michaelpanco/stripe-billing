import React from 'react';
import './styles/global.css';
import { Billing } from '@components';

function App() {
    return (
        <div className={'mainContainer'}>
            <Billing company="Acme Corp." />
        </div>
    );
}
export default App;
