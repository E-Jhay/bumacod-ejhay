import React, { useState } from 'react'

const ConditionalRender = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
        {isLoggedIn ? <p>Welcome Back!</p> : <p>Please Log in</p>}
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Logout' : 'Login'}</button>
    </div>
  )
}

export default ConditionalRender