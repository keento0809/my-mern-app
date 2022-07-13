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

const UserMenu = () => {
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
            <MenuItem>Logout</MenuItem>
          </MenuGroup>
          {/* <MenuGroup title="Profile">
            <MenuItem>My Account</MenuItem>
            <MenuItem>Payments </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </MenuGroup> */}
        </MenuList>
      </Menu>
    </>
  );
};

export default UserMenu;
