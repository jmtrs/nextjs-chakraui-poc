import Head from 'next/head'
import Link from '@/components/common/Link'
import { Box, chakra, Container } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page | @jmtrs</title>
      </Head>
      <>
        <Container maxW="container.xl">
          <Box marginX={4} mt={1}>
            <Box>
              <chakra.h1 color="gray">Hello World!</chakra.h1>
            </Box>
            <Box>
              <Link href="/about">- about page</Link>
            </Box>
            <Box>
              <Link href="/query?id=222">- query page</Link>
            </Box>
          </Box>
        </Container>
      </>
    </>
  )
}
