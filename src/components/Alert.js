import React, { useEffect, useState } from "react";

const Alert = ({ alert, duration = 3000 }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (alert?.msg) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [alert, duration]);

    if (!alert?.msg || !visible) return null;

    return (
        <div className={`alert alert-${alert.type}`} role="alert">
            {alert.msg}
        </div>
    );
};

export default Alert;
