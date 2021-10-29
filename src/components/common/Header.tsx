import Link from '@/components/common/Link'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'

export type HeaderProps = {
  height: number
}

export const Header = ({ ...props }: HeaderProps) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Flex
        as="header"
        position="fixed"
        top={0}
        width="full"
        shadow="sm"
        py={4}
        px={8}
        height={props.height}
      >
        <Box>
          <Link href="/">
            <Heading>LOGO</Heading>
          </Link>
        </Box>
        <Spacer />
        <IconButton
          _focus={{ _focus: 'none' }}
          aria-label="dark mode Switch"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
      </Flex>
    </>
  )
}

export default Header
