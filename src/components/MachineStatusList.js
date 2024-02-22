import React, { useState, useEffect } from 'react';
import MachineStatusComponent from './MachineStatus';
import './MachineStatusList.css'
import db from '../firebase';
import { QuerySnapshot, onSnapshot, collection, getDocs } from "firebase/firestore";



const MachineStatusList = ({ isLoggedInAsTechnician }) => {  
    const [machines, setMachines] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      const ref = collection(db, "machines");
  
      // Correct usage of onSnapshot with Firebase modular SDK
      const getMachines = onSnapshot(ref, (querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          // items.push(doc.data());
          items.push({ id: doc.id, ...doc.data() });

        });
        setMachines(items);
        setLoading(false);
      });
      // Cleanup subscription on unmount
      return () => getMachines();
    }, []);

  return (
    <div className="grid">
      {machines.map((machine) => (
        <MachineStatusComponent
        machineType={machine.name}
        machineInService={machine.available}
        machineTotal={machine.total}
        isLoggedInAsTechnician={isLoggedInAsTechnician}
        id = {machine.id}
        />
      ))}
    </div>
  );
};

export default MachineStatusList;
