import { authModalState } from "@/atoms/AuthModalAtom";
import { Button } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";

const AuthButtons = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <>
      <Button
        variant="oauth"
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        onClick={() => setAuthModalState({ open: true, view: "login" })}
      >
        Log In
      </Button>
      <Button
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        onClick={() => setAuthModalState({ open: true, view: "signup" })}
      >
        Sign In
      </Button>
    </>
  );
};

export default AuthButtons;
