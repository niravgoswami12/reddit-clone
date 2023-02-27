import AuthModal from "@/components/Model/Auth/AuthModal";
import { auth } from "@/firebase/clienApp";
import { Button, Flex } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import AuthButtons from "./AuthButtons";

type Props = {
  user: any;
};

const RightContent = ({ user }: Props) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" alignContent="center">
        {user ? (
          <Button onClick={() => signOut(auth)}> Logout</Button>
        ) : (
          <AuthButtons />
        )}
      </Flex>
    </>
  );
};

export default RightContent;
