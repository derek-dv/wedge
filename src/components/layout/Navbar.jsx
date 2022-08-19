import logo from "../../assets/logo.jpg";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AuthContext } from "../../context/authContext";

const Links = [
  { name: "Dashboard", to: "/dashboard" },
  { name: "Images", to: "/image/submit" },
  { name: "Videos", to: "/video/submit" },
];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={children.to}
  >
    {children.name}
  </Link>
);

export default function Simple() {
  const { signUp, toggleSignUp, signedIn } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={14}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image src={logo} />
              {/* <Link as={'ReactRouterLink'} to='/' colorScheme={"blue"} fontSize={"large"} fontWeight={500}>Wedge</Link> */}
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {signedIn
                ? Links.map((link) => <NavLink key={link.to}>{link}</NavLink>)
                : ""}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap="3">
            {signedIn ? (
              <Button
                colorScheme={"blue"}
                size={"lg"}
                onClick={() => toggleSignUp(!signUp)}
              >
                Upload
              </Button>
            ) : signUp ? (
              <Button
                colorScheme={"blue"}
                size={"lg"}
                onClick={() => toggleSignUp(!signUp)}
              >
                Sign in
              </Button>
            ) : (
              <Button
                colorScheme={"blue"}
                size={"lg"}
                onClick={() => toggleSignUp(!signUp)}
              >
                Sign up
              </Button>
            )}
            {signedIn ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>Link 3</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              ""
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}
