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

const UserMenu = () => {
  const { setIsLoggedIn, setCurrentUser } = useAuthContext();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem("isLoggedIn");
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
              <Link to={`/profile/test`}>Profile</Link>
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
