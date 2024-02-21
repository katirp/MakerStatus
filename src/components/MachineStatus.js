import React, { useState, useEffect } from 'react';
import './MachineStatus.css'

const MachineStatusComponent = ({ machineType, isLoggedInAsTechnician }) => {
    const [countInService, setCountInService] = useState(0);

    return (
        <div className="machine-status-container">
            <h1 className="machine-type">
                {machineType}
            </h1>
        </div>
    )
}

export default MachineStatusComponent;
