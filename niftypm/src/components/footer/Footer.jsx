import { Box, Flex,  Link, List, ListItem,  Text} from '@chakra-ui/react'
import React from 'react'
import './footer.module.css'

const Footer = () => {
  return (
    
        <Box pt='12' pb='12' w='99%' ml='2.5%' boxShadow='xl' bg='#f6f7fb'>
      <Flex justifyContent='space-around'>
    <>
        <List>
            <Text fontSize='xs'color='#00baab' mb='15' >PRODUCT</Text>


        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Discussions</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Milestones</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Tasks</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Docs & Files</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Time Tracking</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Reporting</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Project Home</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Project Portfolios</Link></ListItem>

        </List>
    </>
    <>
        <List >
<Text fontSize='xs'color='#00baab' mb='15'>RESOURCES</Text>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Blog</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold '  ><Link _hover={{color:'#00baab'}}  > Change Log</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Integrations</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Apps</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Pricing</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  > Affilates</Link></ListItem>
</List>
    </>
    <>
        <List>
<Text fontSize='xs'color='#00baab' mb='15'>TRUST</Text>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Help Center</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold '  ><Link _hover={{color:'#00baab'}}  >Privacy</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Terms of Use</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Security</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Status</Link></ListItem>

        </List>
    </>
    <>
        <List>
<Text fontSize='xs'color='#00baab' mb='15'>MADE FOR</Text>

        <ListItem mb='5' fontWeight='semibold '  ><Link _hover={{color:'#00baab'}}  >Agile Devlopement</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Client Management</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Digital Agencies</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Legal Case Management</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Marketing Teams</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Product Teams</Link></ListItem>
        </List>
    </>
    <>
        <List>
<Text fontSize='xs'color='#00baab' mb='15' >COMPARISON</Text>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Airtable Alternative</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold '  ><Link _hover={{color:'#00baab'}} >Asana Alternative</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Basecamp Alternative</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Clarizen Alternative</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >ClickUp Alternative</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Confluence Alternative</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Flow Alternative</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Hive Alternative</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >JIRA Alternative</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Monday.com Alternative</Link></ListItem>
        </List>
    </>
    <>
        <List>
<Text fontSize='xs'color='#00baab' mb='15' >BLOG</Text>

        <ListItem mb='5' fontWeight='semibold '  ><Link _hover={{color:'#00baab'}} >Why project management is broken (& how to fix it!)
</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Why Remote Collaboration is more than just Communication</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Staying on top of your workloads with time tracking</Link></ListItem>
        <ListItem mb='5' fontWeight='semibold'  ><Link _hover={{color:'#00baab'}}  >Best Legal Case Management Software for Law Firms</Link></ListItem>
     
        </List>
    </>
      </Flex>

        </Box>
    
  )
}

export default Footer