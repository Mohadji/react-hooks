import React, {useState} from 'react'
import Usertable from './tables/Usertable'
import AddUserForm from './forms/AddUserForm'
import EditFormUser from './forms/EditFormUser'

const App = () => {

  const usersData = [
    {
      id: 1,
      name: 'Nahoum',
      username: 'Sidi Anouare'
    },
    {
      id: 2,
      name: 'Farida',
      username: 'Abdourahamane'
    },
    {
      id: 1,
      name: 'Balkisa',
      username: 'Halifou'
    }
  ]

  const [users, setUsers] = useState(usersData);

  // ajout 
  const addUser = (user) => {
    user.id = users.length + 1 ;
    setUsers([...users, user]);
  }

  // suppression
  const deleteUser = (id) => {
      setUsers(users.filter((user) => user.id !== id))
  }

  // modification 
  const [editing, setEditing] = useState(false);
  const initialFormState = {
    id: null,
    name: '',
    username: ''
  }
  const [currentUser,setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true)

    setCurrentUser({
     id: null,
      name: '',
      username: ''
    })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false)

    setUsers(users.map((user) => {user.id === id ? updateUser : user}))

  }

  return (

    <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
            {
              editing ? (
                <div>
                  <h1>Edit user</h1>
                  <EditFormUser 
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
                  />
                </div>
              ):(
                <div>
                  <h2>Add user</h2>
                  <AddUserForm addUser={addUser} />
                </div>
              )
            }
          </div>
          <div className="flex-large">
            <h2>View users</h2>
            <Usertable 
                users={users} 
                editRow={editRow} 
                deleteUser={deleteUser} 
            />
          </div>
        </div>
      </div>
  )

}

export default App