import React from 'react';

interface IErrorMessageProps {
    error: string,
}

const ErrorMessage = ({error}: IErrorMessageProps) => {
    return (
        <p className="text-center text-red-600">{error}</p>
    );
};

export default ErrorMessage;