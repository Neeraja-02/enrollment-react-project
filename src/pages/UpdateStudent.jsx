import React,{useState} from "react"
import { Navigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import  { useNavigate }  from "react-router-dom"

const UpdateStudent = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [department, setDepartment] = useState("")
    const [course, setCourse] = useState("")

    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:5000/users/${id}`)
        .then(x=>{
            setName(x.data.name)
            setEmail(x.data.email)
            setDepartment(x.data.department)
            setCourse(x.data.course)
            
        })
        .catch(err=>console.log(err))
    },[])

    const handleUpdate = (e)=>{
        e.preventDefault()
        const UpdateStudent = {name,email,department,course}
        axios.put(`http://localhost:5000/users/${id}`,UpdateStudent)
        .then(()=>{
            navigate("/viewstudent")
        })
        .catch(err=>console.log(err))
    }

    return(
        <>
            <center>
                <form action="" onSubmit={handleUpdate}>
                    <h1><u>Update Student</u></h1>
                        <input type="text" placeholder='Enter Name' required value={name} onChange={(e)=>{setName(e.target.value)}}/> <br/>
                        <input type="text" placeholder='Enter Email' required value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br/>
                        <input type="text" placeholder='Enter Department' required value={department} onChange={(e)=>{setDepartment(e.target.value)}}/> <br/>
                        <input type="text" placeholder='Enter Course' required value={course} onChange={(e)=>{setCourse(e.target.value)}}/> <br/><br/>
                    <button style={{backgroundColor: 'blue',borderRadius:'100px' , color:'white'}}>Update Student</button>
                </form>
            </center>
        </>
    )
}
export default UpdateStudent