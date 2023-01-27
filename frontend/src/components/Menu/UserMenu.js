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
import useItemsContext from "../../hooks/useItemsContext";
import { initialAlertInfoState } from "../../contexts/alertContext";
import { deleteItems } from "../../helpers/api/deleteItems";

const UserMenu = () => {
  const { setIsLoggedIn, setCurrentUser } = useAuthContext();
  const { setAlertInfo } = useAlertContext();
  const { dispatch } = useItemsContext();

  const handleResetList = async () => {
    await deleteItems()
      .then(() => dispatch({ type: "RESET_USER" }))
      .catch((error) => console.log(error));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser({});
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("currId");
    setAlertInfo({
      isAlert: true,
      status: "success",
      text: "Successfully Logged out!",
    });
    setTimeout(() => {
      setAlertInfo(initialAlertInfoState);
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
            <MenuItem onClick={handleResetList}>Reset</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
};

export default UserMenu;
