import React from "react";
import { useAuth } from "../../Context/AuthContext";
import { Container } from "react-bootstrap";

export default function Dashboard(props){

    const { currentUser } = useAuth();
    return(
        <Container>
            Hello from Student Dashboard
        </Container>
    )
}