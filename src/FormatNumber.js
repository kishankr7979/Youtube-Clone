import React from 'react';

const formatNumber = ({ number }) => {
    return <span > { new Intl.NumberFormat().format(number) } < /span>
}
export default formatNumber;