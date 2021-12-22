function Login() {
  return (
    <div className="auth-container">
      <div className="page-header">
        <h1>Login</h1>
      </div>
      <div className="page-content">
        <form method="POST">
          <fieldset>
            <legend>Login or Register</legend>
            <label>
              <input type="radio" name="loginType" value='login' />
              Login
            </label>
            <br />
            <label>
              <input type="radio" name="loginType" value='register' />
              Register
            </label>
          </fieldset>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input type="text" name='username' id="username" />
            <div className="error"></div>
          </div>

          <button className="btn btn-block" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
