import { useActionData, json, redirect } from 'remix'
import { db } from '~/utils/db.server'

function badRequest(data) {
  return json(data, { status: 400 })
}

export const action = async ({ req }) => {
  const form = await req.formData()
  const loginType = form.get('loginType')
  const username = form.get('username')
  const password = form.get('password')

  const fields = { loginType, username, password }

  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password)
  }

  if (Object.values(fieldErrors).some(Boolean)) {
    console.log(fieldErrors);
    return badRequest({ fieldErrors, fields })
  }

}

function Login() {
  const actionData = useActionData()

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
              <input type="radio" name="loginType" value='login' defaultChecked={!actionData?.fields?.loginType || actionData?.fields?.loginType === 'login'
              }
              />{' '}
              Login
            </label>
            <label>
              <input type="radio" name="loginType" value='register' />
              Register
            </label>
          </fieldset>

          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input type="text" name='username' id="username" defaultValue={actionData?.fields?.username} />
            <div className="error">
              {actionData?.fieldErrors?.username && actionData?.fieldErrors?.username}
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id="password" defaultValue={actionData?.fields?.password} />
            <div className="error">
              {actionData?.fieldErrors?.password && actionData?.fieldErrors?.password}
            </div>
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
