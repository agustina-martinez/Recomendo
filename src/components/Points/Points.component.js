import React, {useState} from 'react';
import {OnboardPoints, OnboardEachPoint} from './Points.styles';

const Points = () => {
    const [keyActive, setKeyActive] = useState(null);
    const auxArray = [0, 1, 2, 3];

    return (
        <OnboardPoints>
            {
                auxArray.map(i => (
                    <OnboardEachPoint
                        // onClick={() => handleNavItem(to)}
                        active={keyActive === i ? true : false}
                        key={i}
                        onClick={() => keyActive === i ? setKeyActive(null) : setKeyActive(i)}
                    />
                ))
            }
        </OnboardPoints>
    );
}

export default Points;
