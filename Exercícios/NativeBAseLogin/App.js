import * as React from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider, Image } from "native-base";

const Example = () => {
  return <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
      <Image size={90} borderRadius={20} marginBottom={5} marginLeft={20} source={require('../NativeBAseLogin/src/imgs/logotipo-do-instagram.png')} />
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input borderColor={"black"}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Senha</FormControl.Label>
            <Input borderColor={"black"} type="password" />
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center backgroundColor={"#DCDCDC"} flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    
    