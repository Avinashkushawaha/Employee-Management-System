// import React, { useState } from 'react'
// import { setLocalStorage } from '../../utils/localStorage'

// const Header = (props) => {

//   const logOutUser = () => {
//     localStorage.setItem('loggedInUser', '')
//     props.changeUser('')
//   }

//   return (
//     <div className='flex items-end justify-between'>
//         <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username 👋</span> </h1>
//         <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'> Log Out </button>
//     </div>
//   )
// }

// export default Header



import React, { useState, useEffect } from "react";

const Header = (props) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    setUsername(""); // Clear username in state
    props.changeUser(""); // Update parent state
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">
          {username ? username : "Guest"} 👋
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
