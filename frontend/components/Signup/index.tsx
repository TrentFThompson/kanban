import { useState } from "react";
import {
    Box,
    Center,
    FormLabel,
    Heading,
    Input,
    Stack,
    Link as ChakraLink,
    Button,
    Text,
} from "@chakra-ui/react";
import Link from "next/link";

import UserAPI from "../../api/user";
import buildHandleChange from "../../utils/handleChange";

const INITIAL_SIGNUP = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
};

export default function Signup() {
    const [signup, setSignup] = useState(INITIAL_SIGNUP);
    const [accountCreated, setAccountCreated] = useState(false);
    const handleChange = buildHandleChange(setSignup);

    async function handleSubmit() {
        await UserAPI.add(signup);
        setAccountCreated(true);
    }

    return (
        <div>
            <Center mt={"100px"}>
                <Box
                    boxShadow="md"
                    p="10"
                    w="container.md"
                    borderRadius="md"
                    m={5}
                >
                    {!accountCreated && (
                        <Stack spacing={5}>
                            <Heading>Sign Up</Heading>
                            <FormLabel>Name</FormLabel>
                            <Input
                                type="text"
                                name="name"
                                value={signup.name}
                                onChange={handleChange}
                                placeholder="Name"
                            />
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="text"
                                name="email"
                                value={signup.email}
                                onChange={handleChange}
                                placeholder="Email"
                            />
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                name="password"
                                value={signup.password}
                                onChange={handleChange}
                                placeholder="Password"
                            />
                            <FormLabel>Confirm Password</FormLabel>
                            <Input
                                type="password"
                                name="password_confirmation"
                                value={signup.password_confirmation}
                                onChange={handleChange}
                                placeholder="Password"
                            />
                            <Button onClick={handleSubmit} colorScheme="cyan">
                                Create Account
                            </Button>
                            <Center>
                                <Link href="/login">
                                    <ChakraLink>
                                        Already have an account? Click here to
                                        log in.
                                    </ChakraLink>
                                </Link>
                            </Center>
                        </Stack>
                    )}
                    {accountCreated && (
                        <Stack spacing={5}>
                            <Heading>Success</Heading>
                            <Text>
                                Your account has been created. Click the button
                                below to log in.
                            </Text>
                            <Link href="/login">
                                <Button colorScheme="cyan">To Login</Button>
                            </Link>
                        </Stack>
                    )}
                </Box>
            </Center>
        </div>
    );
}
