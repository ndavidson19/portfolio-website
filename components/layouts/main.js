import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
const Main = ({ children, router}) => {
    return(
        <Box as="main" pt={8}>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title> Nicholas Davidson - Homepage </title>
            </Head>
            
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )

}

export default Main