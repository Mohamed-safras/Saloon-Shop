import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../actions/user.action";

const useLogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LogOut = useCallback(() => {
    dispatch(setCurrentUser(null));

    localStorage.removeItem("user");
    navigate("/");
  }, [navigate, dispatch]);

  return {
    LogOut,
  };
};

export default useLogOut;
