import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    })
    )
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section classname="heading">
        <h1>
          <FaSignInAlt /> Log In
        </h1>
        <p>Log in and start setting goals</p>
      </section>
      <section classname="form">
        <form onSubmit={onSubmit}>
            <div className='form-group'>
            <input
            type="email"
            className="form-control"
            id="email"
            name="name"
            value={email}
            placeholder="Enter your email"
            onChange={onChange}
          />
            </div>
            <div className='form-group'>
            <input
            type="password"
            className="form-control"
            id="password"
            name="name"
            value={password}
            placeholder="Enter your password"
            onChange={onChange}
          />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-block">Log In</button>
            </div>
        </form>
      </section>
    </>
  );
}

export default Login;
