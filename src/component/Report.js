import React from "react";

function Report() {
  // Example data (later uzashyiramo data iva muri backend cyangwa state)
  const employees = [
    {
      empNumber: 1,
      firstName: "John",
      lastName: "Doe",
      department: "IT",
      position: "Developer",
      salary: 500000,
      deduction: 50000,
      netSalary: 450000,
      month: "May"
    },
    {
      empNumber: 2,
      firstName: "Jane",
      lastName: "Smith",
      department: "HR",
      position: "Manager",
      salary: 600000,
      deduction: 60000,
      netSalary: 540000,
      month: "May"
    }
  ];

  return (
    <div>
      <h1>Employee Salary Report</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Names</th>
            <th>Department</th>
            <th>Position</th>
            <th>Gross Salary</th>
            <th>Deduction</th>
            <th>Net Salary</th>
            <th>Month</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.empNumber}</td>
              <td>{emp.firstName} {emp.lastName}</td>
              <td>{emp.department}</td>
              <td>{emp.position}</td>
              <td>{emp.salary}</td>
              <td>{emp.deduction}</td>
              <td>{emp.netSalary}</td>
              <td>{emp.month}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Report;