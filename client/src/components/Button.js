import React, { Fragment } from 'react';

const Button = ({ buttonText, onClick }) => {
    return (
        <Fragment>
            <div className="block px-4 py-2 bg-gray-300 hover:bg-gray-600 hover:text-white rounded-md transition duration-300ms" onClick={onClick}>{buttonText}</div>
        </Fragment>
    )
}

export default Button