import React from "react";
import Layout from "../Layout/Layout";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import LoginForm from "../components/form/LoginForm";
import SignupForm from "../components/form/SignupForm";

const Auth = () => {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  return (
    <Layout>
      <Tabs
        isFitted
        variant="enclosed"
        pt={isLargerThan1024 ? 10 : 6}
        maxWidth="382px"
        mx="auto"
      >
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
