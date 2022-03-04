import { Button, FormControl, FormLabel, Input, Stack, useColorModeValue, useToast } from '@chakra-ui/react'
import * as React from 'react'
import validator from 'validator'
export const SubscribeForm = () => {
    const [value, setValue] = React.useState("")
    const toast = useToast()
    const chambangsat = () => {
    const validation = validator.isEmail(value)
    console.log(validation)
    if (validation === false) {
        toast({
            title: "Invalid email address",
            status: "error",
            isClosable: true,
          })   
    } else {
        chambabi()
    }
    }  
    function chambabi() {
        window.location.href = "https://youtu.be/dQw4w9WgXcQ"
    }
return(
    <Stack
    as="form"
    spacing="8"
    onSubmit={(e) => {
      e.preventDefault() // manage form submission
    }}
  >
    <FormControl id="email">
      <FormLabel srOnly>Enter your email</FormLabel>
      <Input
      value={value}
        type="text"
        placeholder="Enter your fucking email"
        size="lg"
        onChange={(e) => {setValue(e.target.value)}}
        fontSize="md"
        focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
      />
    </FormControl>
    <Button
      type="submit"
      fontWeight="bold"
      textTransform="uppercase"
      fontSize="md"
      colorScheme="blue"
      size="lg"
      onClick={chambangsat}
    >
      Claim my offer
    </Button>
  </Stack>
)
}