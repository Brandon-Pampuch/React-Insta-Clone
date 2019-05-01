import React from 'react'


 const Login =() =>{

    const loginFunc = (event) =>{
        localStorage.setItem(event.target.value) 
    }

    return(
        <form onSubmit={loginFunc}>
            <input type="text">username</input> 
            {/* <input type="text">password</input> */}
            <button>login</button>
        </form>
    )

}

export default Login