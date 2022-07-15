import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
  Avatar,
  AvatarBadge,
  HamburgerIcon,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const UserMenu = () => {
  const { setIsLoggedIn } = useAuthContext();

  const handleLogout = () => {
    setIsLoggedIn(false);
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
            <MenuItem>Profile</MenuItem>
            {/* temporary */}
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
};

export default UserMenu;
