import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import "../Pages/user.css";

//
const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {/* {user.name.first} ({user.gender}) */}
          <table>
            <tr>
              <td>
                <img alt=".." src={user.picture.medium} />
              </td>
              <td>
                {user.name.first} {user.name.last}
              </td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
};

///
const Users = () => {
  const [apidata, setapidata] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getusers();
  }, []);

  const getusers = async () => {
    const response = await fetch(`https://randomuser.me/api/?results=20`);
    const data = await response.json();
    // console.log(data);
    setapidata(data.results);
    console.log(data.results);
    console.log(apidata);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  let filteredUsers;
  if (filter === "all") {
    filteredUsers = apidata;
  } else {
    filteredUsers = apidata.filter((user) => user.gender === filter);
  }

  return (
    <div className="main">
      <NavBar />
      <div className="user-sections">
        <div className="user-section-1">
          <h1>User Details</h1>
          <p>
            When a user signs up for Thrift, they are required to provide basic
            information such as their name, email address, and password. In
            addition, users can provide additional details such as their
            shipping address and payment information to make it easier to
            complete purchases. Once signed in, users can browse products, add
            items to their cart, and checkout using their preferred payment
            method. Overall, Thrift provides a simple and convenient way for
            users to buy and sell products online with ease.
          </p>
          <div>
            <br />
            <div className="radio-buttons">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="all"
                  checked={filter === "all"}
                  onChange={handleFilterChange}
                />
                All
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={filter === "male"}
                  onChange={handleFilterChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={filter === "female"}
                  onChange={handleFilterChange}
                />
                Female
              </label>
            </div>
            {apidata != undefined ? (
              <>
                <div>
                  <br />
                  {/* <h4>Data is here.</h4> */}
                  <table>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Gender</th>
                    </tr>
                  </table>
                  <UserList users={filteredUsers} />
                </div>
              </>
            ) : (
              <span className="loading">Loading...</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
