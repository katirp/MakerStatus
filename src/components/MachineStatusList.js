import React, { useState, useEffect } from 'react';
import MachineStatusComponent from './MachineStatus';
import './MachineStatusList.css'

const MachineStatusList = ({ isLoggedInAsTechnician }) => {
  
    // An array of machine types 
  const [machineTypes, setMachineTypes] = useState([
    '3D Printers',
    'Laser Cutters',
    'Sewing Machines',
    'Embroidery Machines',
    'Roland Vinyl Cutter',
    'Cameo Vinyl Cutter',
    'Serger',
    'Miter Saw',
    'Band Saw',
    // ... any other machine types
  ]);

  return (
    <div className="grid">
      {machineTypes.map((type) => (
        <MachineStatusComponent
          key={type}
          machineType={type}
          isLoggedInAsTechnician={isLoggedInAsTechnician}
        />
      ))}
    </div>
  );
};

export default MachineStatusList;
