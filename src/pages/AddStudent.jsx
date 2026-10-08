import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [department, setDepartment] = useState("")
    const [course, setCourse] = useState("")
    const navigate = useNavigate()

    function handleData(e){
        e.preventDefault()
        const students = {name, email, department, course}
        axios.post("http://localhost:5000/users",students)
        .then(()=>{
            setName("")
            setEmail("")
            setDepartment("")
            setCourse("")
            alert("Data saved")
            navigate("/viewstudent")
        })
        .catch(err=>console.log(err))
    }  
    return (
    <div className="addstudent">
    <center>
        <form action="" onSubmit={handleData} className="student-form">
            <h1><u>Add Student</u></h1> <br />
                <input type="text" placeholder='Enter Name' required value={name} onChange={(e)=>{setName(e.target.value)}}/> <br/>
                <input type="text" placeholder='Enter Email' required value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br/>
                <input type="text" placeholder='Enter Department' required value={department} onChange={(e)=>{setDepartment(e.target.value)}}/> <br/>
                <input type="text" placeholder='Enter Course' required value={course} onChange={(e)=>{setCourse(e.target.value)}}/> <br/>
             <button style={{backgroundColor: 'blue',borderRadius:'100px' , color:'white'}}>Add Student</button>
            </form>

    </center>
    </div>
    )
}
export default AddStudent