import React, { useState } from 'react';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    // In a real application, this is where you would make an API call to a backend to create a new user account.
    // For this example, we'll just check if the password and confirmPassword match.

    if (password === confirmPassword) {
      setSignupSuccess(true);
    } else {
      setSignupSuccess(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Sign Up</div>
            <div className="card-body">
              <form onSubmit={handleSignup}>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
              </form>
              {signupSuccess && <div className="alert alert-success mt-2">Sign Up Successful!</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
