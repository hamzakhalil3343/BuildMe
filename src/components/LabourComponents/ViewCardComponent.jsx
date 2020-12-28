import React from 'react';

function ViewCardComponent(props) {
    return (
        <div>
            {JSON.stringify(props.data)}
        </div>
    );
}

export default ViewCardComponent;