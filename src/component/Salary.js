import React from "react";
function Salary (){
    return(
    <div>
         <form>
                <h1>Salary Page</h1>
                Salary_id:<input type="text" placeholder="Enter Your Names"name="Salary_id required"/><br></br>
                Gloss-salary:<input type="text" placeholder="Enter Your Gloss_salary"name="department_code required"/><br></br>
    
    
                Totaldeduction:<input type="text" placeholder="Enter YourTotaldeduction"name="Totaldeduction required"/><br></br>
                Netsalary:<input type="text" placeholder="Enter yourNetsalary"name="Netsalary required"/><br></br>
                monthy:<input type="text" placeholder="Enter yourmonthy"name="monthy required"/><br></br>
                <button type="Submit" >Calculate Salary</button>
            </form>
    </div>
    )
}
export default Salary;