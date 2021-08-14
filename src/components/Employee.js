import { EmployeeContext } from "../context/EmployeeContext";
import { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import EditForm from "./EditForm";
import { useEffect } from "react";

const Employee = ({ employee }) => {
  const { deleteEmployee } = useContext(EmployeeContext);

  const handleClick = (e) => {
    e.preventDefault();
    deleteEmployee(e.target.id);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [employee]);

  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <a href="#editEmployeeModal" className="edit" data-toggle="modal">
          <i
            onClick={handleShow}
            className="material-icons"
            data-toggle="tooltip"
            title="Edit"
          >
            &#xE254;
          </i>
        </a>
        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
          <i
            onClick={handleClick}
            className="material-icons"
            data-toggle="tooltip"
            title="Delete"
            id={employee.id}
          >
            &#xE872;
          </i>
        </a>
      </td>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="modal-header">
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Employee
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm employee={employee} />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default Employee;
