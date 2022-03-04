import {
    Box,
    Link,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { SubscribeForm } from './SubscribeForm'
  
  export const App = (props) => (
    <Box height="100vh">
      <Modal
        isOpen={props.open}
        onClose={() => void 0}
        size="2xl" // `trapFocus` and `blockScrollOnMount` are only switched off so that the preview works properly.
        blockScrollOnMount={false}
        trapFocus={false}
      >
        <ModalOverlay />
        <ModalContent borderRadius="2xl" mx="4">
          <ModalBody>
            <Stack
              maxW="xs"
              mx="auto"
              py={{
                base: '12',
                md: '16',
              }}
              spacing={{
                base: '6',
                md: '10',
              }}
            >
            
              <Stack spacing="3" textAlign="center">
                <Text fontSize="3xl" fontWeight="bold">Enter Your Email To Claim Bonus Gift</Text>
                
              </Stack>
              <SubscribeForm />
              <Link
                fontSize="sm"
                onClick={chambabi}
                textAlign="center"
                color={useColorModeValue('gray.600', 'gray.400')}
                textDecoration="underline"
              >
                No, I don’t want bonus
              </Link>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
  function chambabi() {
    window.location.href = "https://youtu.be/dQw4w9WgXcQ"
}