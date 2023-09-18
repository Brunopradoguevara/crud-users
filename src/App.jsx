
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

function App() {
  const [infoUpdate, setInfoUpdate] = useState()
  const baseUrl = 'https://users-crud.academlo.tech'
  const [users,getUsers,createUser,deleteUser,updateUser] = useFetch(baseUrl)
  const [isOpenForm, setIsOpenForm] = useState('form--close-modal')

  useEffect(()=>{
    getUsers('/users')
  },[])
  console.log(users)
  const handleOpen = ()=>{
    setIsOpenForm('')
  }
  return (
    <div className='container'>
      <header className='header'>
        <h1 className='title'>Users</h1>  
        <div>
          <button onClick={handleOpen} className="btn--create_user"><i class='bx bx-plus'></i> Create new user</button>
        </div>
      </header>
      <FormUsers
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
        isOpenForm={isOpenForm}
        setIsOpenForm={setIsOpenForm}
        formTitle={infoUpdate? 'Update user':'New user'}
      />
      <div className='userCard__container'>
        {
          users?.map(user=>(
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              setIsOpenForm={setIsOpenForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
