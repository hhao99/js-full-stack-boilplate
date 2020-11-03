import React, {useState, useEffect } from 'react'

export default ()=> {
    const [message, setMessage] = useState('message')

    const fetchData =  ()=> {
        fetch('/json')
        .then( res=> res.json())
        .then( json => setMessage(json.msg))
       
    }
    useEffect( ()=> {
        fetchData()
    },[])

    return (
        <h1>{message}</h1>
    )
}