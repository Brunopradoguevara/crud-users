
const UserCard = ({user,deleteUser,setInfoUpdate,setIsOpenForm}) => {
    const handleDelete = ()=>{
        deleteUser('/users',user.id)
    }
    const handleEdit = ()=>{
        setInfoUpdate(user)
        setIsOpenForm('')
    }
  return (
    <article className="userCard">
      <h3 className="userCard__name">{`${user.first_name} ${user.last_name}`}</h3>
      <ul className="userCard__list">
        <li className="userCard__item"><span className="userCard__label">Email: </span><span className="userCard__value">{user.email}</span></li>
        <li className="userCard__item"><span className="userCard__label">Birthday: </span><span className="userCard__value"><i className='bx bx-gift' ></i> {user.birthday}</span></li>
      </ul>
      <div className="userCard__btns_container">
        <button onClick={handleDelete} className="userCard__btn--delete"><i className='bx bx-trash'></i></button>
        <button onClick={handleEdit} className="userCard__btn--update"><i className='bx bx-pencil'></i></button>
      </div>
    </article>
  )
}

export default UserCard