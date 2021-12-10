import React from "react";

function Login() {
  return (
    <form className="wholeform">
      <h3>Log in</h3>

      <div>
        <label>Email</label>
        <br></br>
        <input type="text" />
      </div>

      <div>
        <label>Password</label>
        <br></br>
        <input type="text" />
      </div>

      <div>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="button">
        <button type="submit" className="submit">
          Sign in
        </button>
      </div>
      <div className="button">
        Forgot <a href="#">password?</a>
      </div>
    </form>
  );
}

export default Login;
