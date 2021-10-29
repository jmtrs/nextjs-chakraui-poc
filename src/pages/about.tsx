import Head from 'next/head'
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'

export default function About() {
  return (
    <>
      <Head>
        <title>About | vvvvoid main</title>
      </Head>
      <Container maxW="container.xl">
        <Box marginX={4}>
          <Heading mb={4}>
            Modern online and offline payments for Africa
          </Heading>
          <Text fontSize="xl">
            Paystack helps businesses in Africa get paid by anyone, anywhere in
            the world
          </Text>
          <Button size="lg" colorScheme="green" mt="24px">
            Create a free account
          </Button>
        </Box>
      </Container>
    </>
  )
}
