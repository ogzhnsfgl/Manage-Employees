import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";
import { useContext, useState } from "react";

const EditForm = ({ employee }) => {
  const { updateEmployee } = useContext(EmployeeContext);

  const [updatedEmployee, setupdatedEmployee] = useState({
    id: employee.id,
    name: employee.name,
    email: employee.email,
    address: employee.address,
    phone: employee.phone,
  });

  const { name, email, address, phone } = updatedEmployee;

  const onInputChange = (e) => {
    setupdatedEmployee({ ...updatedEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(e.target.id, updatedEmployee);
  };

  // useEffect(() => {
  //   console.log("Component Mounted!");
  //   return () => {
  //     console.log("Component Unmounted!");
  //   };
  // }, []);

  // useEffect return ComponentDidUnmount işlevi görür.
  //

  return (
    <Form onSubmit={handleSubmit} id={employee.id}>
      <Form.Group className="py-2">
        <Form.Control
          type="text"
          placeholder="Name :"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          required
        ></Form.Control>
      </Form.Group>

      <Form.Group className="py-2">
        <Form.Control
          type="email"
          placeholder="E-mail :"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
          required
        ></Form.Control>
      </Form.Group>

      <Form.Group className="py-2">
        <Form.Control
          placeholder="Adress :"
          as="textarea"
          value={address}
          name="address"
          onChange={(e) => onInputChange(e)}
          rows={3}
        ></Form.Control>
      </Form.Group>

      <Form.Group className="py-2">
        <Form.Control
          type="text"
          placeholder="Phone :"
          value={phone}
          name="phone"
          onChange={(e) => onInputChange(e)}
        ></Form.Control>
      </Form.Group>

      <Button variant="success" type="submit" className="w-100 mt-2">
        Update Employee
      </Button>
    </Form>
  );
};

export default EditForm;
