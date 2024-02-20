import React, { createContext, useEffect } from 'react'
import axios from 'axios';


export const UserContext = createContext()

// const obj = {
//   user: "Sarthak",
//   age: 10,
//   style: "good"
// }
// const data = [
//   { "id": "0", "priority": "high", "Topic": "Level 1 Content", "Description": "Content prepare karo or recording karo or apni gaand marao jaao.. aajate pata nahi kaha kaha se", "date": "3 Feb 2024", "deadline": "6 Feb 2024", "new": true, "Accepted": false, "Completed": false, "Failed": false },
//   { "id": "1", "priority": "low", "Topic": "Level 2 Content", "Description": "Content prepare karo or recording karo or apni gaand marao jaao.. aajate pata nahi kaha kaha se", "date": "3 Feb 2024", "deadline": "6 Feb 2024", "new": false, "Accepted": false, "Completed": true, "Failed": false },
//   { "id": "2", "priority": "low", "Topic": "Level 3 Content", "Description": "Content prepare karo or recording karo or apni gaand marao jaao.. aajate pata nahi kaha kaha se", "date": "3 Feb 2024", "deadline": "6 Feb 2024", "new": false, "Accepted": true, "Completed": false, "Failed": false },
//   { "id": "3", "priority": "mid", "Topic": "Level 4 Content", "Description": "Content prepare karo or recording karo or apni gaand marao jaao.. aajate pata nahi kaha kaha se", "date": "3 Feb 2024", "deadline": "6 Feb 2024", "new": false, "Accepted": false, "Completed": false, "Failed": true },
//   { "id": "4", "priority": "high", "Topic": "Level 5 Content", "Description": "Content prepare karo or recording karo or apni gaand marao jaao.. aajate pata nahi kaha kaha se", "date": "3 Feb 2024", "deadline": "6 Feb 2024", "new": true, "Accepted": false, "Completed": true, "Failed": false },
//   { "id": "5", "priority": "low", "Topic": "Level 6 Content", "Description": "Content prepare karo or recording karo or apni gaand marao jaao.. aajate pata nahi kaha kaha se", "date": "3 Feb 2024", "deadline": "6 Feb 2024", "new": true, "Accepted": false, "Completed": true, "Failed": false },
//   { "id": "6", "priority": "mid", "Topic": "Level 7 Content", "Description": "Content prepare karo or recording karo or apni gaand marao jaao.. aajate pata nahi kaha kaha se", "date": "3 Feb 2024", "deadline": "6 Feb 2024", "new": true, "Accepted": false, "Completed": false, "Failed": true },
//   { "id": "7", "priority": "high", "Topic": "Level 8 Content", "Description": "Content prepare karo or recording karo or apni gaand marao jaao.. aajate pata nahi kaha kaha se", "date": "3 Feb 2024", "deadline": "6 Feb 2024", "new": true, "Accepted": false, "Completed": false, "Failed": false }

// ]





const Context = (props) => {

  return (
    <UserContext.Provider>
      
      {props.children}
    </UserContext.Provider>
  )
}

export default Context