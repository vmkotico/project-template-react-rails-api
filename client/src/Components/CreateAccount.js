import React from "react";

function CreateAccount() {
  return (
    <div className="wholeform">
      <form>
        <h3>Register</h3>

        <div>
          <label>First name</label>
          <br></br>
          <input type="text" />
        </div>

        <div>
          <label>Last name</label>
          <br></br>
          <input type="text" />
        </div>

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

        <button type="submit" className="submit">
          Register
        </button>
        <p className="submit">
          Already registered <a href="#">log in?</a>
        </p>
      </form>
    </div>
  );
}

export default CreateAccount;
