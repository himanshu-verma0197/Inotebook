import React, { useEffect, useState } from "react";

export const Alert = ({ type = "primary", message, duration = 3000 }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (message) {
            setVisible(true); // show alert when message changes
            const timer = setTimeout(() => {
                setVisible(false);
            }, duration);

            return () => clearTimeout(timer); // cleanup on unmount or message change
        }
    }, [message, duration]);

    if (!message || !visible) return null;

    return (
        <div className={`alert alert-${type}`} role="alert">
            {message}
        </div>
    );
};
