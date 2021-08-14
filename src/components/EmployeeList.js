import Employee from "./Employee";
import { useState, useContext, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import AddForm from "./AddForm";
import { EmployeeContext } from "../context/EmployeeContext";
import { useEffect } from "react";

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [employees]);

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("Component rendered!");
  // }, [employees]);

  // useEffect(() => {
  //   console.log(count);
  // }, [count]);

  /* 
  useEffect component her değiştiğinde render sağlar.

  koşul olarak [<render koşulu>] girilir. Girilen koşulda değişiklik olduğunda use effect çalışır.
  koşul olarak [] boş array verilirse sadece ilk açılışta çalışır. 

  AddForm içinde componentDidMount,componentDidUnmount işlevleri gösterildi.

  */

  // useRef getElementbyıd gibi çalışır.
  // useRef ile istenilen alana ulaşılıp işlem yapılır.
  // Component render ettirmez. Bu avantajı var.
  // const myRef = useRef(null);
  // console.log(myRef);
  // const onButtonClick = () => {
  //   myRef.current.focus();
  // };

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            {/* <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}> Click Me!</button> */}
            <Button
              href="#addEmployeeModal"
              className="btn btn-success text-white"
              data-toggle="modal"
              onClick={handleShow}
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Employee employees={employees}></Employee>
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="modal-header">
          <Modal.Title id="contained-modal-title-vcenter">
            Add Employee
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>

      {/* <input ref={myRef} type="text"></input>
      <button onClick={onButtonClick}>Focus Input</button> */}
    </>
  );
};

export default EmployeeList;
