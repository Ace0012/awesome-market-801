
// import "../../App.css"


import React, { useState } from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Flex,
  Button,
  useDisclosure,
  useColorModeValue,
  Menu,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  InputLeftAddon,
  Heading,
  InputRightAddon,
  InputRightElement,
  InputGroup,
  List,
  Text,
  ListItem,
} from '@chakra-ui/react'
import { Box, Container, Image } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronUpIcon } from '@chakra-ui/icons';
// import { Link } from 'react-router-dom';
// import { Box } from '@chakra-ui/react';
// import { Container } from '@chakra-ui/react';

const Navbar = () => {
  
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  




  return (


    <div >
    


      <Box alignItems='center' boxShadow='xl'  pb='3'>
      <Box   bg='white' >
        <Flex mt="2" mb='2' gap='40'ml='100px'>

<Box>
  
<Image mt='2'  h='30px' src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg" alt="" />
</Box>

<Box display='flex'   gap='50' >
<Popover  >

  <PopoverTrigger>
    <Button letterSpacing='2' 
    variant='link'
    // fontWeight='bold'
    fontSize='16px'
    color='black'
    _hover={{color:'#00baab'}} 
    >Features <ChevronDownIcon mt='1'/></Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    
   
    <PopoverBody>
      <Text color='red' fontSize='14px' fontWeight='500' letterSpacing='2'> ❤ Learn how Nifty inspires productivity!</Text>
      <Container display='grid' gridTemplateColumns='repeat(2,1fr)'>

    <List>
<ListItem><Link>Ayush</Link></ListItem>
<ListItem><Link>Ayush</Link></ListItem>
<ListItem><Link>Ayush</Link></ListItem>
<ListItem><Link>Ayush</Link></ListItem>
    </List>
    <List>
<ListItem><Link>Ayush</Link></ListItem>
<ListItem><Link>Ayush</Link></ListItem>
<ListItem><Link>Ayush</Link></ListItem>
<ListItem><Link>Ayush</Link></ListItem>
    </List>

      </Container>
    </PopoverBody>
  </PopoverContent>
</Popover>


<Popover >

  <PopoverTrigger>
    <Button letterSpacing='2'  variant='link'
    color='black'
    _hover={{color:"#00baab"}}
    // fontWeight='bold'
    fontSize='16px'

    >Use Cases  <ChevronDownIcon mt='1' fontWeight='bold' /></Button>
    
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />

    <PopoverBody>
    <Text color='red' fontSize='14px' fontWeight='500' letterSpacing='2'>❤ Nifty is very flexible. Here are a few examples of how you can use it.</Text>
      <Container display='grid' gridTemplateColumns='repeat(2,1fr)'>

    <List>
<ListItem><Link>Ayush</Link></ListItem>
<ListItem><Link>Ayush</Link></ListItem>
<ListItem><Link>Ayush</Link></ListItem>
<ListItem><Link>Ayush</Link></ListItem>
    </List>
    <List>
<ListItem><Link>Ayush</Link></ListItem>
<ListItem><Link>Ayush</Link></ListItem>
<ListItem><Link>Ayush</Link></ListItem>
<ListItem><Link>Ayush</Link></ListItem>
    </List>

      </Container>
    </PopoverBody>
  </PopoverContent>
</Popover>
<Popover>
  <PopoverTrigger>
    <Button letterSpacing='2' 
    variant='link'
    color='black'
    // fontWeight='bold'
    fontSize='16px'
    _hover={{color:"#00baab"}}
    >Resources <ChevronDownIcon mt='1'/></Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
 
    <PopoverBody>
    <Text color='red' fontSize='14px' fontWeight='500' letterSpacing='2'> ❤ Learn how Nifty inspires productivity!</Text>
      <Container display='grid' gridTemplateColumns='repeat(2,1fr)'>

    <List>
<ListItem><Link>Ayush</Link></ListItem>
<ListItem><Link>Ayush</Link></ListItem>
<ListItem><Link>Ayush</Link></ListItem>
<ListItem><Link>Ayush</Link></ListItem>
    </List>
    <List>
<ListItem><Link>Ayush</Link></ListItem>
<ListItem><Link>Ayush</Link></ListItem>
<ListItem><Link>Ayush</Link></ListItem>
<ListItem><Link>Ayush</Link></ListItem>
    </List>

      </Container>
    </PopoverBody>
  </PopoverContent>
</Popover>

<Link  letterSpacing='2' textDecoration='none' _hover={{color:'#00baab'}} mt='2' to='/' fontWeight='bold'> Got Clients?</Link>

<Link  letterSpacing='2' textDecoration='none' _hover={{color:'#00baab'}} mt='2' to='/' fontWeight='bold'>Pricing</Link>
<Link  letterSpacing='2' textDecoration='none' _hover={{color:'black'}} mt='2' to='/' fontWeight='bold' color='#00baab'>Get a Demo</Link>
</Box>

<Flex gap='30px'>
  <Link as={Button} width='7rem' h='35px' fontSize='15px' bg='white' boxShadow='lg' mt='2' _hover={{bg:'white',color:'#00baab'}}>Login</Link>

  {/* const { isOpen, onOpen, onClose } = useDisclosure() */}

    <>
      <Button 
      w='7rem'
      h='35px'
      mt='2'
      bg='white'
      boxShadow='lg'
      _hover={{color:'#00baab'}}

       onClick={onOpen}>Sign Up</Button>

      <Modal isOpen={isOpen} 
      onClose={onClose}
      motionPreset='slideInBottom'
      size='xl'
      >
        <ModalOverlay />
        <ModalContent >
          <ModalHeader justifyContent>
            <Image mb='2rem' ml='13rem' src='https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg'

            h='30px'

            />
          </ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody >
            
            <Heading textAlign='center'>Get Started in less than 1 minute</Heading>
            <InputGroup mt='3rem'>
            <Input mb='5rem' placeholder='name@domain.com' h='50px' outline='black' />
            <InputRightElement children={<Button color='white' _hover={{bg:'#00baab'}} mt='2.5' ml='-90px'  bg='#00baab'>Get Started</Button>}/>

            </InputGroup>

          </ModalBody>



{/* 
          <ModalFooter>
            // <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  


</Flex>



        </Flex>


  
       
    

      </Box>
      </Box>

   

    
  
  


    </div>
  )
}

export default Navbar