import { useEffect,useState } from "react";
import { useNavigate } from "react-router";


export function ProtectedRoute ({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{  
        const token = localStorage.getItem('accessToken');
        if(token){
            setIsAuthenticated(true)
        } else{
            setIsAuthenticated(false)
            navigate("/login", { replace: true });
        }

    },[])

    return isAuthenticated ? <>{children}</> : null;
    
}