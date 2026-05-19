import React from "react";
function Employee (){
    return(
    <div>
         <form>
                <h1>Employee Page</h1>
                Employeenumber:<input type="number" placeholder="Enter Your number"name="Employeenumber required"/><br/>
                salary_id:<input type="number" placeholder="Enter Your salary_id"name="salary_id required"/><br/>
    Departmentcode:<input type="text" placeholder="Enter YourDepartment"name="Department required"/><br/>
                Firstname:<input type="text" placeholder="Enter yourFirstname"name="Firstname required"/><br/>
                Lastname:<input type="text" placeholder="Enter your Lastname"name=" Lastname required"/><br/>
                  Position:<input type="text" placeholder="Enter your Position"name=" Position required"/><br/>
                    gender:<input type="radio"name="gender" value="male"/>Male
                    <input type="radio"name="gender" value="female"/>Female<br/> 
                      Address:<input type="text" placeholder="Enter your Address"name="Address required"/><br/>
                        Hireddate:<input type="text" placeholder="Enter your Hireddate"name=" Hireddate required"/><br/>
                          Telephone:<input type="text" placeholder="Enter your Telephone"name=" Telephone required"/><br/>

                <button type="Submit" >Employee</button>
            </form>
    </div>
    )
}
export default Employee;