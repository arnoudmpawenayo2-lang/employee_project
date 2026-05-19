import { useState } from "react";
import Employee from "./Employee";
import Department from "./Department";
import Report from "./Report";
import Salary from "./Salary";
import Home from "./Home";

function Dashboard({showpage}){
    const [page, setpage]=useState("Home");
    return(
        <div>

            <button onClick={()=>setpage('Home')}>Home</button>
              <button onClick={()=>setpage('Employee')}>Employee</button>
                <button onClick={()=>setpage('Department')}>Department</button>
                  <button onClick={()=>setpage('Report')}>Report</button>
                    <button onClick={()=>setpage('Salary')}>Salary</button>
                    <button onClick={()=>showpage('Login_form')}>Logout</button>

                    {page=== "Home" && (<Home/>)}
                    {page === "Department" && (<Department/>)}
                    { page ==="Report" && (<Report/>)}
                    { page ==="Salary" && (<Salary/>)}
                    { page ==="Employee" && (<Employee/>)}
        </div>
    )
}
export default Dashboard;