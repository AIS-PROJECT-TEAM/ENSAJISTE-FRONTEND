import React from "react";
import { useAuth } from "../../Context/AuthContext";
export default function Dashboard(props){

    const { currentUser } = useAuth();
    return(
        <div>
            Hello from User Dashboard
        </div>
    )
}