import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
import { supari } from '../assets/supari.tasks';



export const UserContext = createContext()
export const MemberContext = createContext()
export const LoggedInContext = createContext()

export const AuthContext = createContext();


// localStorage.clear()
const Context = (props) => {



  const [users, setUsers] = useState([
    {
      "name": "Harsh Sharma",
      "email": "harshsharma@sheryians.com",
      "password": "harsh",

    },
    {
      "name": "Kashyap Bisen",
      "email": "bisenkashyap@gmail.com",
      "password": "kashyap"
    },
    {
      "name": "Akarsh Vyas",
      "email": "akarshvyas100@gmail.com",
      "password": "akarsh"
    },
    {
      "name": "Sarthak Sharma",
      "email": "ssarthak770@gmail.com",
      "password": "sarthak"
    },
    {
      "name": "Sarthak",
      "email": "s@s.com",
      "password": "ass"
    }, {
      "name": "Patel",
      "email": "p@p.com",
      "password": "ppp"
    }
  ])
  // localStorage.clear()

  localStorage.setItem('userData', JSON.stringify(users));

  const [adminData, setAdminData] = useState([
    {
      "name": "Harsh Sharma",
      "email": "h@h.com",
      "password": "ass"
    }
  ]);

  localStorage.setItem('adminData', JSON.stringify(adminData));



  const [supariData, setsupariData] = useState(supari)
  const [memberData, setMemberData] = useState(users)

  const [activePerson, setActivePerson] = useState(localStorage.getItem('activePerson') || '');

  const loginUser = (email) => {
    localStorage.setItem('activePerson', email);
    setActivePerson(email);
  };

  const logoutUser = () => {
    localStorage.removeItem('activePerson');
    setActivePerson('');
  };

  return (
    <UserContext.Provider value={[supariData, setsupariData]}>
      <MemberContext.Provider value={[users, setUsers]}>
        <AuthContext.Provider value={{ activePerson, loginUser, logoutUser }}>
          {props.children}
        </AuthContext.Provider>
      </MemberContext.Provider>
    </UserContext.Provider>
  )
}

export default Context