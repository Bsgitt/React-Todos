import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";
import StyledForm from "./Element.Form";
function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push("/signin");
      console.log(...emailRef, ...passwordRef);
    } catch {
      setError("Failed to create an account");
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
          <input
            id="password"
            type="password"
            placeholder="password"
            ref={passwordRef}
          />
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            ref={passwordConfirmRef}
          />
          {error && (
            <div className="text-sm text-center text-red-500">{error}</div>
          )}
          <button disabled={loading}>Sign In</button>
          <div className=" w-60 text-center mt-2">
            Already have an acccount ? <Link to="/signin">Log In</Link>
          </div>
        </form>
      </StyledForm>
    </div>
  );
}

export default SignUp;
