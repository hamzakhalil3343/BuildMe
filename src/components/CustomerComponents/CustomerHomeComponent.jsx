import React from 'react';
import HomeTab from './HomeTab';
import ProminentAppBar from './ProminentAppBar';

function CustomerHomeComponent(props) {
    return (
        <div>
            <ProminentAppBar/>
            <HomeTab/>
        </div>
    );
}

export default CustomerHomeComponent;