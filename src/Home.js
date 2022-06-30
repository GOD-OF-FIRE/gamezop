import React, { useEffect, useState } from "react";
import "./App.css";
// users Component
const Home = () => {
   // State for Data
  let [data, setData] = useState([]);
  let [block, setBlock] = useState("Block");
  // Function For getting data from API
  let getUsersInfo = () => {
    // Fetching API
    let r = fetch("https://jsonplaceholder.typicode.com/users");
    let s = r.then((resp) => {
      return resp.json();
    });
    s.then(function (info) {
      console.log(info[0]);
      // Setting the data state from API
      setData(info);
    });
  };
  // Using useEffect Hook for calling function first time after rendering 
  useEffect(() => {
    getUsersInfo();
  }, []);

  // Block Functionality
  let blocktoggle = (e) => {
    e.target.innerText = "Blocked";
    e.target.style.backgroundColor = "red";
    e.target.style.color = "white";
  };
  // Unblock After 5 min
  useEffect(() => {
    setInterval(() => {
      setBlock("Block");
      document.getElementById("blockbtn").style.backgroundColor = "white";
      document.getElementById("blockbtn").style.color = "black";
    }, 300000);
  }, [block]);
    // Callback Function of map to Display various data
  function usersData(val, id) {
    return (
      <>
        <div className="wrapper">
          <div className="userBox">
            <input type="checkbox" />
            <p>Name: {val.name}</p>
            <p>User Name: {val.username}</p>
            <p>Email Id: {val.email}</p>
            <p>
              Address: {val.address.suite},{val.address.street},
              {val.address.city}
            </p>
            <p>Contact Number: {val.phone}</p>
            <p>Company: {val.company.name}</p>
            <button id="blockbtn" onClick={blocktoggle}>
              {block}
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <p className="Heading">Users Data</p>
      <div className="users">
       {/* Using Map to Display all data from API */}
        {data.map(usersData)}
      </div>
    </>
  );
};

export default Home;
