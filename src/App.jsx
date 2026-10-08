import React from "react";
import Nav from './components/Nav'
import AddStudent from './pages/AddStudent'
import ViewStudent from './pages/ViewStudent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UpdateStudent from "./pages/UpdateStudent";
const App = () => {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path='/addstudent' element={<AddStudent/>}/>
        <Route path='/viewstudent' element={<ViewStudent/>}/>
        <Route path='/updatestudent/:id' element={<UpdateStudent/>}/>
      </Routes>
    </Router>
    </>
  )
}
export default App