import React from "react";
function Department(){
    return(
        <div>
            <form>
                <h1>Department Page</h1>
                Department Name:<input type="text" placeholder="Enter Your Names"name="department_name required"/><br></br>
                Department Code:<input type="text" placeholder="Enter Your Department Code"name="department_code required"/><br></br>
                <button type="Submit" >Add Department</button>
            </form>
        </div>
    )
}
export default Department;