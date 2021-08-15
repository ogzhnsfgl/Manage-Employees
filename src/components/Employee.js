import { EmployeeContext } from "../context/EmployeeContext";
import { useState, useContext } from "react";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "./EditForm";
import { useEffect } from "react";

const Employee = ({ employee }) => {
  const { dispatch } = useContext(EmployeeContext);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "remove_employee", id: e.target.id });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

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
        <OverlayTrigger
          key={`${employee.id}R`}
          placement="left"
          overlay={<Tooltip id={`tooltip-left`}>Edit</Tooltip>}
        >
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
        </OverlayTrigger>

        <OverlayTrigger
          key={`${employee.id}L`}
          placement="right"
          overlay={<Tooltip id={`tooltip-right`}>Delete</Tooltip>}
        >
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
        </OverlayTrigger>
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
