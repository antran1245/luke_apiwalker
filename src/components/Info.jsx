import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Info() {
    const {category , id} = useParams();
    useEffect(()=>{
        console.log(category)
    },[category, id])

    return(
        <h1>hello {category}</h1>
    );
}