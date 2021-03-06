import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Heading, Text, Link as ChakraLink } from "@chakra-ui/layout";
import Link from "next/link";

import MotionBox from "components/motion/Box";

const Page404 = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        width={["100%", "70%", "60%", "60%"]}
        margin="0 auto"
      >
        <Image
          src="/404 Error-pana.svg"
          alt="Error 404 not found Illustration"
        />
      </MotionBox>
      <Text textAlign="center" fontSize="xs">
        <ChakraLink href="https://stories.freepik.com/web" isExternal>
         
        </ChakraLink>
      </Text>

      <Box marginY={4}>
        <Heading textAlign="center">Sayfa bulunamadı.</Heading>

        <Box textAlign="center" marginTop={4}>
          <Link href="/" passHref>
            <Button
              backgroundColor={colorMode === "light" ? "gray.300" : "teal.500"}
            >
              Ana Sayfaya Dön
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Page404;
