import React from 'react'
// import ContactCard from './ContactCard';
import { ListGroup, Card, Button } from 'react-bootstrap';

const ContactList = (props) => {
    const renderList = props.contacts.map((contacts) => {
        return (
            <>
<Card style={{ width: '80rem' }}>
    {/* <img className='image' src = {user} alt = "user" /> */}
  <ListGroup variant="flush">
    <ListGroup.Item>{`Name : ${contacts.name}, Phone : ${contacts.phone}, Type : Personal WhatsApp: Yes`}</ListGroup.Item>
  <Button variant="danger" type="submit" style={{ width: "80px" ,fontSize : "0.6rem" }}>Delete</Button> 
  {/* <Button variant="success" type="submit" style={{ width: "80px" ,fontSize : "0.6rem" }}>Edit</Button> */}
  </ListGroup>
  

</Card>
 
            </>
        )
    })
    return (
        <>
<h4>Contact List</h4>
            <div>{renderList}</div>
       </>
    )
}
export default ContactList