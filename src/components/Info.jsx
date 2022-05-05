import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import obi from '../obi_wan_kenobi.jpg'
export default function Info() {
    const {category , id} = useParams();
    const [info, setInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(response => {
            setInfo(response.data)
            setIsLoading(false)
        })
        .catch(err => {
            setInfo(null)
            setIsLoading(false)
        })
    },[category, id])

    return(
        <div>
            {isLoading?
                <p style={{margin:'0 10px'}}>Loading . . .</p>:
                info?
                    <div style={{margin:'0 10px'}}>
                    {Object.keys(info).map(item => 
                        <p key={item}>{item}: {info[item]}</p>
                        )}
                        </div>:
                <div>
                    <p>These aren't the droids you're looking for</p>
                    <img src={obi} alt="obi" width={200} height={200}/>
                </div>
                
            }

        </div>
    );
}