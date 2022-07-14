import React from "react";
import Layout from "../Layout/Layout";
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
    <Layout>
      <Tabs isFitted variant="enclosed" pt={6}>
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
    </Layout>
  );
};

export default Auth;
