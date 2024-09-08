import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export const Dashboard = () => {

    const [balance, setBalance] = useState(null);


    const fetchBalance = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setBalance(response.data.balance);
        } catch (error) {
            console.error("Error fetching balance:", error);
            
        }
    };
    
    useEffect(() => {
        fetchBalance();
    }, []);

    const [SearchParams]=useSearchParams()
    const firstname = SearchParams.get("firstname")      
    
    const UserAlphabet = firstname[0]
        
    return <div>
        <Appbar UserAlphabet={UserAlphabet}/>
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}