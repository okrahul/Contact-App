import React from 'react'
import { Form, Button } from 'react-bootstrap';

class AddContact extends React.Component {
state = {
    name : "",
    phone : "",
    type : ""
}

add = (e) => {
    e.preventDefault();
     if (this.state.name === "" && this.state.phone === "") {
         alert("All the field are mandotory!");
         return
     }
     this.props.addContactHandler(this.state);
     this.setState({ name : "", phone : "", type : "" })

     console.log(this.state)

}

    render() {
        return (
            <>

                <Form onClick={this.add}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>NAME</Form.Label>
                        <Form.Control type="name" placeholder="Enter Name..." 
                        value={this.state.name}
                        onChange = {(e) => this.setState({name: e.target.value}) }
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>PHONE</Form.Label>
                        <Form.Control type="phone" placeholder="Enter Phone No..." 
                         value={this.state.phone}
                         onChange = {(e) => this.setState({phone: e.target.value}) }
                        />
                    </Form.Group>

                    <Form.Select aria-label="Default select example">
                        <option>Type</option>
                        <option 
                         value= {"personal"}
                         onChange = {(e) => this.setState({type: e.target.value}) }
                        >Personal</option>
                        <option 
                         value={"office"}
                         onChange = {(e) => this.setState({type: e.target.value}) }                        
                        >Office</option>
                    </Form.Select>


                    {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="Yes This is my whatsapp number"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                            />

                        </div>
                    ))}


                    <Button variant="primary" type="submit" style={{ marginTop: "12px" }}>
                        Save Contact                    </Button>
                </Form>





            </>
        )
    }

}
export default AddContact;