import { theme } from "@/chakra/theme";
import Layout from "@/components/Layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

function DebugObserver(): React.Node {
  // const snapshot = useRecoilSnapshot();
  // useEffect(() => {
  //   console.debug("DebugObserver: The following atoms were modified:");
  //   for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
  //     console.debug("DebugObserver: ", node.key, snapshot.getLoadable(node));
  //   }
  // }, [snapshot]);

  return null;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <DebugObserver />
      <ChakraProvider theme={theme} cssVarsRoot="body">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}
