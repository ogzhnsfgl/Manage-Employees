import { EmployeeContext } from "../context/EmployeeContext";
import { useState, useContext } from "react";

const Employee = ({ employees }) => {
  // console.log(employees);
  const { deleteEmployee } = useContext(EmployeeContext);

  // const [deleteEmployeed, setDeletedEmployee] = useState({ id: "" });

  // const { id } = deleteEmployee;

  const handleClick = (e) => {
    e.preventDefault();
    deleteEmployee(e.target.id);
  };

  return (
    <>
      {employees.map((employee) => (
        <tr key={employee.id}>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>{employee.address}</td>
          <td>{employee.phone}</td>
          <td>
            <a href="#editEmployeeModal" className="edit" data-toggle="modal">
              <i className="material-icons" data-toggle="tooltip" title="Edit">
                &#xE254;
              </i>
            </a>
            <a
              href="#deleteEmployeeModal"
              className="delete"
              data-toggle="modal"
            >
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
        </tr>
      ))}
    </>
  );
};

export default Employee;
