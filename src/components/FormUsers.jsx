import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

const FormUsers = ({createUser,infoUpdate,updateUser,setInfoUpdate,formTitle,isOpenForm,setIsOpenForm}) => {
    const {register,handleSubmit, reset} = useForm()
   
    useEffect(()=>{
      reset(infoUpdate)
    },[infoUpdate])

    const submit = (data)=>{
      if(infoUpdate){
        updateUser('/users',infoUpdate.id,data)
        setInfoUpdate()
      }else{
        createUser('/users',data)
      }
      reset({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
      })
      setIsOpenForm('form--close-modal')
    }

    const handleClose = ()=>{
      setIsOpenForm('form--close-modal')
      setInfoUpdate()
      reset({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
      })
    }
  return (
    <div className={`formUser ${isOpenForm}`}>
      <div className="form__container">
        <h2 className="form__title">{formTitle}</h2>
        <button onClick={handleClose} className="form__btn--close"><i class='bx bx-x'></i></button>
        <form onSubmit={handleSubmit(submit)} className="form">
        <div className="form__items">
          <label htmlFor="first_name" className="form__label">First name</label>
          <input {...register('first_name')} type="text" id="first_name" className="form__input" />
        </div>
        <div className="form__items">
          <label htmlFor="last_name" className="form__label">Last name</label>
          <input {...register('last_name')} type="text" id="last_name" className="form__input" />
        </div>
        <div className="form__items">
          <label htmlFor="email" className="form__label">Email</label>
          <input {...register('email')} type="email" id="email" className="form__input"/>
        </div>
        <div className="form__items">
          <label htmlFor="birthday" className="form__label">Birthday</label>
          <input {...register('birthday')} type="date" id="birthday" className="form__input" />
        </div>
        <div className="form__items">
          <label htmlFor="password" className="form__label">Password</label>
          <input {...register('password')} type="password" id="password" className="form__input" />
        </div>
        <div className="form__btn-container">
          <button className="form__btn">{infoUpdate? 'Update':'Create'}</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default FormUsers