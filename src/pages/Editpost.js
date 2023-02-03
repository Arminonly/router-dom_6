import React from 'react';
import { useParams,useNavigate} from 'react-router-dom';
    
    export default function Editposts(){
        const navigate = useNavigate()
        const goBack = ()=>{
            navigate(-1)
            }
        const {id} = useParams()
            return (
            <div>
            <button onClick={goBack}>go back</button>
                <h1>Edit post -  {id} </h1>
            </div>
        );
}