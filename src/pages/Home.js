import { Link } from 'react-router-dom'; 
import MachineStatusList from '../components/MachineStatusList';
import './Home.css'

export default function Home() {
    return (
        <div>
            <div className="button-container">
                <button>
                <Link to="/login" className="login">Technician Login</Link>    
                </button>
            </div>
                  
            <div className="title-container">
                <h1 className="title">
                    MakerStatus
                </h1>  
            
            </div>
            <MachineStatusList isLoggedInAsTechnician = {"True"}></MachineStatusList>
        </div>
    )
}