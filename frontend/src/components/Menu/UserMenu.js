import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import useAlertContext from "../../hooks/useAlertContext";
import axios from "axios";
import useItemsContext from "../../hooks/useItemsContext";

const UserMenu = () => {
  const { setIsLoggedIn, setCurrentUser } = useAuthContext();
  const { setLogoutAlert } = useAlertContext();

  const { dispatch } = useItemsContext();

  const handleResetList = () => {
    axios
      .delete("/items")
      .then((res) => {
        console.log(res);
        dispatch({ type: "RESET_USER" });
      })
      .catch((error) => console.log(error));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem("isLoggedIn");
    setLogoutAlert(true);
    setTimeout(() => {
      setLogoutAlert(false);
    }, 2000);
  };

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<AiOutlineUser />}
          variant="none"
          size="md"
        />
        <MenuList>
          <MenuGroup>
            <MenuItem>
              <Link to={`/profile`}>Profile</Link>
            </MenuItem>
            <MenuItem>
              <span onClick={handleResetList}>Reset</span>
            </MenuItem>
            {/* temporary */}
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
};

export default UserMenu;
