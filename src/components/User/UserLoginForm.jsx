import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import cls from './User.module.css'
import { loginUser } from '../../features/user/userSlice'


const UserLoginForm = ({ closeForm, toggleCurrentFormType }) => {
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const isEmptyInputs = Object.values(values).some((val) => !val)

    if (isEmptyInputs) return

    dispatch(loginUser(values))
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
            type="password"
            placeholder="Your password"
            name="password"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div
          className={cls.link}
          onClick={() => toggleCurrentFormType("signup")}
        >
          Go to SignUp
        </div>

        <button type="submit" className={cls.submit}>
          Login
        </button>
      </form>
    </div>
  )
}

export default UserLoginForm