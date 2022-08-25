import { Box, Container, Flex, ListItem, Menu } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <Box border='2px solid red'>
            <Flex>
                <Container>
                    <Menu>
                        <ListItem>
                           <Link >AYush Chandra</Link>
                           <Link >AYush Chandra</Link>
                           <Link >AYush Chandra</Link>
                           <Link >AYush Chandra</Link>
                           <Link >AYush Chandra</Link>
                           <Link >AYush Chandra</Link>
                        </ListItem>

                    </Menu>

                </Container>
                
            </Flex>


        </Box>
    </div>
  )
}

export default Footer