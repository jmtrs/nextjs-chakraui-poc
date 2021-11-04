import Head from 'next/head'
import { Box, chakra, Container } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Query() {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <Head>
        <title>Query | @jmtrs</title>
      </Head>
      <Container maxW="container.xl">
        <Box>
          <chakra.h1 color="gray">{id} page</chakra.h1>
        </Box>
      </Container>
    </>
  )
}
