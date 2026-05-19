import {useState} from 'react'
import Login_form from './component/Login_form';
import Create_Account_form from './component/Create_Account_form';
import Dashboard from "./component/Dashboard";
import Report from './component/Report';


function App() {
 
    const [page, showpage]= useState('Login_form');
    return(
      <div>
        {page !== "Dashboard" && (<div>
      <button onClick={() => showpage ('Login_form')}>Login</button>
      <button onClick={() => showpage('Create_Account_form') }>Create Account</button>
      </div>)}
    

      {page ==="Login_form" && (<Login_form showpage={showpage}/>)}
      {page ==="Create_Account_form" && (<Create_Account_form showpage={showpage}/>)}
      {page === "Dashboard" && (<Dashboard showpage={showpage}/>)}

        </div>
    );



}

export default App;