import React from 'react'
import { ListGroup, Card, Button } from 'react-bootstrap';
import user from '../Images/user.jpg';

const ContactCard = (props) => {
    const { id , name, phone, type} = props.contacts;
  return (
   <>
               
<Card style={{ width: '80rem' }}>
    <img className='image' src = {user} alt = "user" />
  <ListGroup variant="flush">
    <ListGroup.Item>{`Name : ${name}, Phone : ${phone}, Type : ${type}`}</ListGroup.Item>
  <Button variant="danger" type="submit" style={{ width: "80px" ,fontSize : "0.6rem" }}>Delete</Button> 
  {/* <Button variant="success" type="submit" style={{ width: "80px" ,fontSize : "0.6rem" }}>Edit</Button> */}
  </ListGroup>
  

</Card>
   
   
   </>
  )
}

export default ContactCard