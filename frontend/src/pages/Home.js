import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/user.reducer";
function Home() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>DAta</div>
      <li>Name :{user.name}</li>
      <li>Email : {user.email}</li>
      <button
        onClick={() => {
          dispatch(login({ name: "sdf", email: "sdf" }));
        }}
      >
        check
      </button>
    </div>
  );
}

export default Home;
