import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, InputGroup, Row, Button } from 'react-bootstrap';
import { useState } from 'react';

function Order() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    mobile: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    a_state: '',
    pin: '',
    menu: '',
    order: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const submitButton = (e) => {
    e.preventDefault();
    console.log(form);
    resetButton()
  }

  const resetButton = () => {
    setForm({
      first_name: '',
      last_name: '',
      mobile: '',
      email: '',
      address1: '',
      address2: '',
      city: '',
      a_state: '',
      pin: '',
      menu: '',
      order: ''
    });
  }

  return (
	  <>
	  <br /><br />
	  <h1>Place Order</h1>
	  <br /><br />
	  <form className="container mt-3 mb-3">
    <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="name" name="first_name" value={form.first_name} onChange={handleChange} className="form-control" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="name" name="last_name" value={form.last_name} onChange={handleChange} className="form-control" />
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group controlId="formBasicMobile" className="col col-sm-6">
            <Form.Label>Mobile Number</Form.Label>
            <InputGroup>
                <InputGroup.Text id="basic-addon1">+7</InputGroup.Text>
                <Form.Control aria-label="Mobile Number" type="mobile" aria-describedby="basic-addon1" className="form-control" name="mobile" value={form.mobile} onChange={handleChange} />
            </InputGroup>
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Email</Form.Label>
            <InputGroup>
                <Form.Control aria-label="Recipient's username" aria-describedby="basic-addon2" type="email" name="email" value={form.email} onChange={handleChange} />
                <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
            </InputGroup>
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group className=" col col-sm-6" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control className="form-control" type="text" name="address1" value={form.address1} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="col col-sm-6" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control className="form-control" name="address2" value={form.address2} onChange={handleChange} type="text" />
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group controlId="formGridCity" className="col col-sm-4">
            <Form.Label>City</Form.Label>
            <Form.Control className="form-control" type="text" name="city" value={form.city} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formGridpin" className="col col-sm-4">
            <Form.Label>Pin Code</Form.Label>
            <Form.Control className="form-control" type="pin" name="pin" value={form.pin} onChange={handleChange} />
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
            <Form.Label>Menu</Form.Label>
            <Form.Select defaultValue="Choose..." className="form-control" name="menu" value={form.menu} onChange={handleChange}>
                <option value="Choose...">Choose...</option>
                <option value="Veg Biryani">ScienceBox</option>
                <option value="BBQ Chicken Wings">Promo Lesson</option>
                <option value="Rasmalai">Teacher Training</option>
            </Form.Select>
        </Form.Group>
        <Form.Group controlId="formGridlabel" className="col col-sm-6">
            <Form.Label>Order Details</Form.Label>
            <Form.Control as="textarea" rows="{3}" className="form-control" name="order" value={form.order} onChange={handleChange} />
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
            <button type="submit" onClick={submitButton} className="me-4 btn btn-success btn-lg btn-block">Submit</button>
            <button type="reset" onClick={resetButton} className="me-4 btn btn-danger btn-lg btn-block">Cancel</button>
        </Form.Group>
    </Row>
</form>
</>
  );
}

export default Order;
