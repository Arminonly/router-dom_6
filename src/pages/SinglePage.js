import React from 'react';
import { useParams } from 'react-router-dom';
    
    export default function SinglePage(){
        const {id } = useParams()
        
            return (
            <div>
                <h2>SinglePage</h2>
                {id}
            </div>
        );
}