import React from 'react'

const login = () => {
  return (
    <div>
    <form action="">
        <div>
        <label for="username">Username:</label><br/>
        <input type="text" id="username" name="username" required/><br/>
        </div>

        <div>
            <label for="password">Password:</label><br/>
            <input type="password" id="password" name="password" required/><br/>
        </div>

        <div>
            <button type="submit">Login</button>
        </div>
        
        <div>
            <a href="">Forgot Password?</a>
            <a href="">Don't have an account? Register here!</a>
        </div>

    </form>
      
    </div>
  )
}

export default login
