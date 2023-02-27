import AuthModal from "@/components/Model/Auth/AuthModal";
import { Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";
import MenuWrapper from "./ProfileMenu/MenuWrapper";

type Props = {
  user?: User | null;
};

const RightContent = ({ user }: Props) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" alignContent="center">
        {user ? <Icons /> : <AuthButtons />}
        <MenuWrapper />
      </Flex>
    </>
  );
};

export default RightContent;
