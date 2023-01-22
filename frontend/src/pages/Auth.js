import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import LoginForm from "../components/form/LoginForm";
import SignupForm from "../components/form/SignupForm";

const Auth = () => {
  return (
    <>
      <Tabs isFitted variant="enclosed" pt={28} maxWidth="382px" mx="auto">
        <TabList mb="1em">
          <Tab>Login</Tab>
          <Tab>Signup</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text fontSize="2xl" textAlign="center" pt={4}>
              Login
            </Text>
            <LoginForm />
          </TabPanel>
          <TabPanel>
            <Text fontSize="2xl" textAlign="center" pt={4}>
              Signup
            </Text>
            <SignupForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Auth;
