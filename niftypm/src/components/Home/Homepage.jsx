import { TriangleDownIcon } from '@chakra-ui/icons';
import { Button, ModalFooter, ModalOverlay, useDisclosure, Text, ModalBody, ModalCloseButton, ModalHeader, ModalContent, Modal, AspectRatio, Image, Icon, Heading, Box, InputGroup, Input, InputRightElement, ButtonSpinner } from '@chakra-ui/react';
// import { IconButton } from "@chakra-ui/core";
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from './../footer/Footer';
         

const Homepage = () => {
    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    
      const OverlayTwo = () => (
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px'
        />
      )
    
      const { isOpen, onOpen, onClose } = useDisclosure();

      const [overlay, setOverlay] = React.useState(<OverlayOne />)
  return (
    <div>
        <Navbar/>
        <Box bgGradient='linear(to-b,#ededed,whiteAlpha.700)'>

        <Image h='300px' w='50em' ml="25%" src='https://niftypm.com/_nuxt/img/large@1x.8a3e5ad.webp'/>
         <Button
         color='#00babb'
         bg='white'
         _hover={{bg:'white'}}
         mt='-15em'
         h='100px'
         w='100px'
         borderRadius='15rem'         
         ml='45%'
         onClick={() => {
           setOverlay(<OverlayTwo />)
           onOpen()
          }}
          >

        <Heading fontSize='70px' textAlign='center' mt='-3' ml='2' >{">"}</Heading>




      </Button>
      <Text textAlign='center' ml='-2em' mt='-4em' mb='4em' fontSize='18px'fontWeight='bold' color='#00babb'>Introducing</Text>

      <Modal isCentered isOpen={isOpen} onClose={onClose} size='xl' w='50%'>
        {overlay}
        <ModalContent>
     
          <ModalBody>
          <AspectRatio>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/5GaV5EZX22o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </AspectRatio>



          </ModalBody>
         
        </ModalContent>
      </Modal>
      <Box  w='51%' m='auto' position='relative' zIndex='2' boxShadow='xl' bgGradient='linear(to-b, white, #ededed)'> 

      <Heading pt='1em' textAlign='center' mt='-1.8em'>
      The ultimate project <br /> management OS
      </Heading>
      <Text pt='1em' textAlign='center' letterSpacing=''>
      Stop switching between Roadmaps, Tasks, Docs, Chats, & other tools.
      <br />
Nifty is one app to unite teams, goals, and actions in one place.
      </Text>
      
     



          </Box>
      <InputGroup w='30%' m='auto' mt='4em' mb='3em'>
     
     <Input placeholder='name@comapany.com' h='50px'/>
     <InputRightElement children={<Button mt='2.5' ml='-6rem' bg='#00babb' color='white' _hover={{bg:'#00babb'}}>Get Started</Button>}/>
      </InputGroup>

      <Button w='30%' ml='34.5em' bg='white' boxShadow={'xl'} fontFamily='sans-serif' fontWeight='light' _hover={{bg:'white'}}><Image w='30px' mr='3' bg='white' src='https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png'/> Sign In With Google</Button>
    
      </Box>

        <Footer/>
    </div>

  )
}

export default Homepage