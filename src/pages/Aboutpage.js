import React from 'react';
import { useNavigate } from 'react-router-dom';

    
    export default function About(){
        const navigate = useNavigate();
        const goHome = () => {
            navigate('/');
          };
            return (
            <div>
                <h1 >About Us</h1>
                <button onClick={goHome}>HOME</button>
            </div>
        );
}