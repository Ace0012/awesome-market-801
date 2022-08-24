
// import "../../App.css"


import React from 'react'
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
} from '@chakra-ui/react'
import { Box, Container, Image } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  
  
  const { isOpen, onOpen, onClose ,isClose } = useDisclosure();


  return (


    <div >
    


      <Box border='1px solid red'>
      <Box   bg='white' border='2px solid black'  >
        <Flex>


<Image  h='40px' src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg" alt="" />

<Popover isOpen={isOpen} isClo>
  <PopoverTrigger  >
    <Button
    variant='ghost'
     onMouseEnter={onOpen}
    onMouseLeave={onClose}
    _hover={{ bg: useColorModeValue("white", "gray.700") }}
    
    >Trigger</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader onMouseEnter={onOpen} onMouseLeave={onClose}>Confirmation!</PopoverHeader>
    
    <PopoverBody onMouseEnter={onOpen} onMouseLeave={onClose}>Are you sure you want to have that milkshake?</PopoverBody>
    
  </PopoverContent>
  
</Popover>
<Popover isOpen={isOpen}>
  <PopoverTrigger  >
    <Button
    variant='ghost'
     onMouseEnter={onOpen}
    onMouseLeave={onClose}
    _hover={{ bg: useColorModeValue("white", "gray.700") }}
    
    >Trigger</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader onMouseEnter={onOpen} onMouseLeave={onClose}>Confirmation!</PopoverHeader>
    
    <PopoverBody onMouseEnter={onOpen} onMouseLeave={onClose}>Are you sure you want to have that milkshake?</PopoverBody>
    
  </PopoverContent>
  
</Popover>
        </Flex>


  
       
    

      </Box>
      </Box>

   

    
  
  


    </div>
  )
}

export default Navbar