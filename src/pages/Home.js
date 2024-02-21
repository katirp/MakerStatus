import { Link } from 'react-router-dom'; 
import MachineStatusList from '../components/MachineStatusList';
import './Home.css'

export default function Home() {
    return (
        <div>
            <Link to="/login">Technician Login</Link>          
            <h1>
                MakerStatus
            </h1>  
            <MachineStatusList isLoggedInAsTechnician = {"False"}></MachineStatusList>
        </div>
    )
}