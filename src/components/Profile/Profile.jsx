import React, { useEffect, useState } from 'react'
import cls from "./Profile.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../features/user/userSlice'

const Profile = () => {
  const { currentUser } = useSelector(({ user }) => user)
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
    dispatch(updateUser(values))
  }

  useEffect(() => {
    if (!currentUser) return
    setValues(currentUser)
  }, [currentUser])

  return (
    <section className={cls.profile}>
      {!currentUser
        ? (<div>You are dont Login</div>)
        : (<form className={cls.form} onSubmit={handleSubmit}>
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

          <button type="submit" className={cls.submit}>
            Update profile
          </button>
        </form>)
      }
    </section>
  )
}

export default Profile