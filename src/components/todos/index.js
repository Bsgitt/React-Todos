import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useHistory } from "react-router-dom";
import TodoList from "./TodoList";

function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useContext(AuthContext);
  const history = useHistory();
  async function handleLogout() {
    console.log("logOut");
    setError("");
    try {
      await logout();
      history.push("/signin");
    } catch (error) {
      setError("Log out failed !");
    }
  }
  useEffect(() => {
    const unmount = true;

    return () => unmount;
  }, []);
  return (
    <>
      <div className="flex justify-end md: flex-col items-end  mr-6 mt-1">
        <div className=" max-w-sm rounded shadow-sm overflow-hidden bg-gray-50 py-1 px-1">
          {currentUser.email}
          <div className="bg-green-500 text-center">
            <button
              onClick={handleLogout}
              className="text-green-300 px-2 py-1  w-1/2 hover:text-green-400  "
            >
              Log out
            </button>
          </div>
        </div>
      </div>
      {error && <div className="text-sm text-center text-red-500">{error}</div>}
      <div className="todo-app">
        <TodoList currentUser={currentUser} />
      </div>
    </>
  );
}
export default Dashboard;
