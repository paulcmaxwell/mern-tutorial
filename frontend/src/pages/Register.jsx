import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData

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
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section classname="form">
        <form onSubmit={onSubmit}>
            <div className='form-group'>
            <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={onChange}
          />
            </div>
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
            <div className='form-group'>
            <input
            type="password"
            className="form-control"
            id="password2"
            name="name"
            value={password2}
            placeholder="Confirm password"
            onChange={onChange}
          />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-block">Register</button>
            </div>
        </form>
      </section>
    </>
  );
}

export default Register;
