import React from 'react'
import { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { Link } from 'react-router-dom'
import { baseUrl } from '../shared'

const Customers = () => {

  const [customers, setCustomers] = useState()

  useEffect(()=>{
    fetch(baseUrl +'api/customers')
    .then((response)=> response.json())
    .then((data)=>{
      setCustomers(data.customers)
    })
  },[])

  return (
    <>
    <h1>Heres are customers list - </h1>
      {customers ? customers.map((customer)=>{
        return <p><Link to={'/customers/'+ customer.id} key={uuidv4()}>- {customer.name}</Link></p>
      }) : null}
    </>
  )
}

export default Customers