import React, { useState, useEffect } from 'react';
import './MachineStatus.css'
import db from '../firebase';
import { doc, updateDoc } from "firebase/firestore";


const MachineStatusComponent = ({ machineType, machineInService, machineTotal, isLoggedInAsTechnician, id }) => {

    const handleUpdateCount = async (increment) => {
        const newInService = increment ? machineInService + 1 : machineInService - 1;
        
        // Ensure the new count is within valid bounds before proceeding
        if (newInService >= 0 && newInService <= machineTotal) {
            // Create a reference to the machine document in Firestore
            const machineRef = doc(db, "machines", id);
            console.log(machineRef)
            
            // Update the document
            try {
                await updateDoc(machineRef, {
                    available: newInService
                });
            } catch (error) {
                console.error("Error updating document: ", error);
                // Handle the error appropriately - maybe show an error message to the user
            }
        }
    };

    return (
        <div className="machine-status-container">
            <h1 className="machine-type">
                {machineType}
            </h1>
            <h1 className='machine-type'>
                {machineInService}/{machineTotal}
            </h1>
            {isLoggedInAsTechnician && (
                <div className="controls">
                    <button className="count-button" onClick={() => handleUpdateCount(true)} disabled={machineInService >= machineTotal}>+</button>
                    <button className="count-button" onClick={() => handleUpdateCount(false)} disabled={machineInService <= 0}>-</button>
                </div>
            )}
        </div>
    )
}

export default MachineStatusComponent;
