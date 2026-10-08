import React, { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const ViewStudent = () => {
    const [users,setUsers]= useState([])
    const navigate = useNavigate()
    
    function fetchData(){
        axios.get("http://localhost:5000/users")
        .then((x)=>{setUsers(x.data)})
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        fetchData()
    },[])

    const handleUpdate = (id) =>{
        navigate(`/updatestudent/${id}`)
    }
    const handleDelete =(id)=>{
        axios.delete(`http://localhost:5000/users/${id}`)
        .then(()=>{
            fetchData()
        })
        .catch(err=>console.log(err))
    }
    
    return (
        <>
        <center><h1 className="student"><u>Students</u></h1></center>
        
        {users.map((x)=>{
            return <div>
                <h2>Name: {x.name}</h2>
                <h2>Email: {x.email}</h2>
                <h2>Department:{x.department}</h2>
                <h2>Course: {x.course}</h2>
                <button onClick={()=>{handleUpdate(x.id)}}style={{backgroundColor: 'blue',borderRadius:'100px' , color:'white'}}>Edit</button>
                <button onClick={()=>{handleDelete(x.id)}}style={{backgroundColor: 'blue',borderRadius:'100px' , color:'white'}}>Delete</button>
            </div>
        })}
        </>
    )
}

export default ViewStudent