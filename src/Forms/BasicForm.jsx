import React, { useState } from 'react'


 const BasicForm = () => {
  const [email,setEmail] =   useState("");
  const [password,setPassword] =   useState("");

  const[allEntry, setAllEntry] = useState([])

 const submitForm = (e) => {
     e.preventDefault();

    {/* Form Validation */}

     if(email && password) {
        
     const newEntry = { id: new Date().getTime().toString(), email: email, password : password};

     setAllEntry([...allEntry,newEntry])

    {/* ---- Data Fields will get empty after submission------ */}
     setEmail("")
     setPassword("")

     } else{
         alert("Please Fill The Data.")
     }

 }
    return(
        <>
    <form action = " " onSubmit={submitForm}>

        <div>
            <label htmlFor="email"> Email </label>
            <input type="text" name="email" id="email" autoComplete="off" value={email} 
             onChange={(e)=>{ setEmail(e.target.value )}}

            />
        </div>

        <div>
            <label htmlFor="Password"> Password </label>
            <input type="password" name="Password" id="Password" autoComplete="off" value={password}
            onChange={(e)=>{setPassword( e.target.value) }}
            />
        </div>

        <button type="submit">LOG-IN</button>

    </form>
        <div>
            {
                allEntry.map( (curElem)=>{
                    return(
                        <div className="showDataStyle" key={curElem.id}>
                            <p>{curElem.email}</p>
                            <p>{curElem.password}</p>

                         </div>   
                    )
                } )
            }
        </div>

       </>
    )}
    


export default BasicForm;