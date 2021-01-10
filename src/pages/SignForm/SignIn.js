import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";
import StyledForm from "./Element.Form";

function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleLogin(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signIn(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch (error) {
      setError("Failed to Login");
    }
    setLoading(false);
  }
  useEffect(() => {
    const unmount = true;

    return () => unmount;
  }, []);
  return (
    <div>
      <StyledForm>
        <form onSubmit={handleLogin}>
          <input id="email" type="text" placeholder="Email" ref={emailRef} />
          <input
            id="passsword"
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
          {error && (
            <div className="text-sm text-center text-red-500">{error}</div>
          )}
          <button disabled={loading}>Sign In</button>
          <div className="w-64 text-center text-gray-400 mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <div className="w-64 text-center text-gray-400 mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </StyledForm>
    </div>
  );
}

export default SignIn;
