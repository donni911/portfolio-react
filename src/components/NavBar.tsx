import { HStack, Link } from "@chakra-ui/react"
import ThemeSelector from "./ThemeSelector"

const NavBar = () => {
    return (
        <HStack py={4}>
            <Link fontWeight={"bold"} _hover={{ textDecoration: "none" }} as="a">Home</Link>
            <ThemeSelector />
        </HStack>
    )
}

export default NavBar
