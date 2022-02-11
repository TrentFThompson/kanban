import { useState } from "react";
import {
    Heading,
    Stack,
    Input,
    Button,
    Box,
    Center,
    FormLabel,
    Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/Link";

import buildHandleChange from "../../utils/handleChange";
import { useAuth } from "../../context/auth";

const DEFAULT_CREDENTIALS = {
    email: "",
    password: "",
};

export default function Login() {
    const [credentials, setCredentials] = useState(DEFAULT_CREDENTIALS);
    const handleChange = buildHandleChange(setCredentials);
    const { login } = useAuth();

    async function handleSubmit() {
        await login(credentials);
    }

    return (
        <div>
            <Center transform={"translateY(50%)"}>
                <Box
                    boxShadow="md"
                    p="10"
                    w="container.md"
                    borderRadius="md"
                    m={5}
                >
                    <Stack spacing={5}>
                        <Heading>Login</Heading>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="text"
                            name="email"
                            value={credentials.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            placeholder="Password"
                        />
                        <Button onClick={handleSubmit} colorScheme="cyan">
                            Login
                        </Button>
                        <Center>
                            <Link href="/signup">
                                <ChakraLink>
                                    Don't have an account? Sign up now.
                                </ChakraLink>
                            </Link>
                        </Center>
                    </Stack>
                </Box>
            </Center>
        </div>
    );
}
