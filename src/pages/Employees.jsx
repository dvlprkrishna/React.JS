import '../App.css';
import Employee from '../component/Employee';
import AddEmployee from '../component/AddEmployee';
import EditEmployee from '../component/EditEmployee';
import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

function Employees() {

  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: 'Caleb',
        role: 'Technical Manager',
        img: 'https://randomuser.me/api/portraits/men/86.jpg'
      },
      {
        id: 2,
        name: 'Sal',
        role: 'Assitant Manager',
        img: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      {
        id: 3,
        name: 'Jeff',
        role: 'Frontend Developer',
        img: 'https://images.pexels.com/photos/638700/pexels-photo-638700.jpeg?h=350&auto=compress&cs=tinysrgb'
      },
      {
        id: 4,
        name: 'Talyor',
        role: 'Human Resources',
        img: 'https://images.pexels.com/photos/355036/pexels-photo-355036.jpeg?h=350&auto=compress&cs=tinysrgb'
      }
    ]
  )


  function updateEmployee(id, newName, newRole){

    const updatedEmp = employees.map((emp)=>{
      if (id === emp.id) {
        return {...emp, name: newName, role: newRole}
      }
      return emp
    })
    setEmployees(updatedEmp);
  }

  function addEmployee(name, role, img){
    const newEmployee = [...employees, {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    }]
    setEmployees(newEmployee)
  }
  return (

    <div className="">
       <div className='flex flex-wrap justify-center '>
         {employees.map((emp )=>{
          const editEmployee = <EditEmployee id={emp.id} name={emp.name} role={emp.role} updateEmployee={updateEmployee}/>

          return (<Employee id={emp.id} key={emp.id} name={emp.name} role={emp.role} img={emp.img} editEmployee={editEmployee}/>)
        })}
       </div>
        <div  className='flex flex-wrap justify-center '>
          <AddEmployee addEmployee={addEmployee}/>
        </div>
    </div>
  );
}

export default Employees;
