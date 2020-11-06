import React from 'react';
import loading from '../../assets/images/loading4.gif'

const Preloader = (props) => {
    return (
        <div>
            <img src={loading} />
        </div>
    )
}

export default Preloader