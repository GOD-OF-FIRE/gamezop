import React, { useEffect, useState } from "react";
// Component Of Top User
const Contact = () => {
  // Getting state data
  let [data, setData] = useState([]);
  let getUsersInfo = () => {
    // Fetching Api 
    let r = fetch("https://jsonplaceholder.typicode.com/users");
    let s = r.then(function (resp) {
      return resp.json();
    });
    s.then(function (info) {
      console.log(info[0]);
      setData(info.slice(0, 4));
    });
  };
    // Using useEffect Hook for calling function first time after rendering 
  useEffect(() => {
    getUsersInfo();
  }, []);
  // Callback Function of map to Display various data
  function usersData(val, id) {
    return (
      <>
        <div className="wrapper">
          <div className="userBox">
            <p>Name: {val.name}</p>
            <p>User Name: {val.username}</p>
            <p>Email Id: {val.email}</p>
            <p>
              Address: {val.address.suite},{val.address.street},
              {val.address.city}
            </p>
            <p>Contact Number: {val.phone}</p>
            <p>Company: {val.company.name}</p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <p className="Heading">Top Users</p>
      <div className="users">
        {/* Using Map to Display all data from API */}
        {data.map(usersData)}
      </div>
    </>
  );
};

export default Contact;
