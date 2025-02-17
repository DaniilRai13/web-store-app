import React, { useState } from 'react'
import cls from './User.module.css'
import { useDispatch } from 'react-redux'
import { createUser } from '../../features/user/userSlice'

const UserSingupForm = ({ closeForm, toggleCurrentFormType }) => {
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    avatar: ''
  })

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const isEmptyInputs = Object.values(values).some((val) => !val)

    if (isEmptyInputs) return
    dispatch(createUser(values))
    closeForm()
  }

  return (
    <div className={cls.wrapper}>
      <div
        className={cls.close}
        onClick={closeForm}
      >
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>

      <div className={cls.title}>Sign Up</div>

      <form className={cls.form} onSubmit={handleSubmit}>
        <div className={cls.group}>
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div className={cls.group}>
          <input
            type="name"
            placeholder="Your name"
            name="name"
            value={values.name}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div className={cls.group}>
          <input
            type="password"
            placeholder="Your password"
            name="password"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div className={cls.group}>
          <input
            type="avatar"
            placeholder="Your avatar"
            name="avatar"
            value={values.avatar}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div
          className={cls.link}
          onClick={() => toggleCurrentFormType("login")}
        >
          I already have an account
        </div>

        <button type="submit" className={cls.submit}>
          Create an account
        </button>
      </form>
    </div>
  )
}

export default UserSingupForm