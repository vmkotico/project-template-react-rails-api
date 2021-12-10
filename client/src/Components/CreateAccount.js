import React from "react";

function CreateAccount() {
  return (
    <div className="wholeform">
      <form>
        <h3>Register</h3>

        <div className="input">
          <label>First name</label>
          <input type="text" placeholder="First name" />
        </div>

        <div className="input">
          <label>Last name</label>
          <input type="text" placeholder="Last name" />
        </div>

        <div className="input">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="input">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="#">log in?</a>
        </p>
      </form>
    </div>
  );
}

export default CreateAccount;
