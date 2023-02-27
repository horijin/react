
import './loginpage.css';

export default function LoginPage(){

    return(
        <>
        <div className="container login rounded-3 pt-5 mt-5">

        <from >
            <div className="d-flex justify-content-center mb-5 fs-3">
                <p>Sign in</p>
            </div>
            <div className="mb-3 ">
            <label for="employee_id" class="form-label">User ID</label>
           <input type="text" class="form-control" id="employee_id" aria-describedby="User ID"/>
           </div>
           <div className="mb-5">
            <label for="employee_name" class="form-label">User Name</label>
           <input type="text" class="form-control" id="employee_name" aria-describedby="Employee Name"/>
           </div>
           <div className="d-flex justify-content-center">
           <button type="button" class="btn btn-primary btn-lg ">Sign in</button>
           </div>
      
         </from>
        </div>
       
        
        </>
    );
}