import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";
import StyledForm from "./Element.Form";

function ForgetPassword() {
  const emailRef = useRef();
  const { resetPassword } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("check your mail box");
    } catch (error) {
      setError("Failed to reset password");
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
        <form onSubmit={handleSubmit}>
          <input id="email" type="text" placeholder="Email" ref={emailRef} />
          {error && (
            <div className="text-sm text-center text-red-500">{error}</div>
          )} {message && (
            <div className="text-sm text-center text-green-500">{message}</div>
          )}
          <button disabled={loading}>Reset Password</button>
          <div className="w-64 text-center text-gray-400 mt-3">
            <Link to="/signin">Log In</Link>
          </div>
          <div className="w-64 text-center text-gray-400 mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </StyledForm>
    </div>
  );
}

export default ForgetPassword;
