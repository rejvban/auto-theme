import React, { useContext } from "react";
import { GlobalContext } from "../theme/GlobalProvider";

const ThemeButton: React.FC = () => {
  const globCtx = useContext(GlobalContext);

  return (
    <button onClick={globCtx?.changeTheme}>
      Change the team to {globCtx?.dark ? "light" : "dark"}
    </button>
  );
};

export default ThemeButton;
