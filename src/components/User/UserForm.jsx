import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserSingupForm from './UserSingupForm'
import cls from './User.module.css'
import { toggleForm, toggleType } from '../../features/user/userSlice'
import UserLoginForm from './UserLoginForm'

const UserForm = () => {
  const { showForm, formType } = useSelector(({ user }) => user)
  const dispatch = useDispatch()

  const closeForm = () => dispatch(toggleForm(false))

  const toggleCurrentFormType = (type) => {
    dispatch(toggleType(type))
  }

  return (
    showForm ? (
      <>
        <div className={cls.overlay} onClick={closeForm} />
        {formType === 'signup'
          ? <UserSingupForm
            closeForm={closeForm}
            toggleCurrentFormType={toggleCurrentFormType} />
          : <UserLoginForm
            closeForm={closeForm}
            toggleCurrentFormType={toggleCurrentFormType} />
        }
      </>
    ) : (<></>)
  )
}

export default UserForm