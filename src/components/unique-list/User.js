
import React from 'react' 
import { v4 as uuidv4 } from 'uuid';

const users = [
    {
        id: uuidv4(),
        fullName: "Masirul islam",
        age: "23 years old" ,
        tels: [
            {
                home: "07868",
                office: "76476476",
            }
        ],
    },
    {
        id: uuidv4(),
        fullName: "Babul islam",
        age: "24 years old" ,
        tels: [
            {
                home: "44356",
                office: "34355",
            }
        ],
    },
    {
        id: uuidv4(),
        fullName: "Akbar islam",
        age: "26 years old" ,
        tels: [
            {
                home: "596758976",
                office: "6567666",
            }
        ],
    },
];


 const User = () => { 
  return (
    <div>
      <h1>Nested Lists of users </h1>
      <div><br></br></div>
      {
        users.map((user)=> {
            const {fullName,age,id} = user;
            return <article  key={id}>
                <h3>{fullName}</h3>
                <p>{age}</p>
                {
                    user.tels.map((tel) => {
                        const {home,office,id} = tel
                        return <div key={id}>
                            <h5>{home}</h5>
                            <h5>{office} </h5>
                            <div><br></br></div>
                        </div>
    
                    })
                }
            </article>
        }
)
      }
    </div>
  )
}

export default User;
