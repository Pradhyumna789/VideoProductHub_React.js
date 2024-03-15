import React from 'react';
import { HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
  } from '@chakra-ui/react'

const btnProps = {
    button: {
        colorScheme: "purple",
        top: '4',
        left: '4',
        p: '0',
        borderRadius: '100%',
        w: "10",
        h: "10",
    }
};


const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
        <Button onClick={onOpen} {...btnProps.button}>
            <HiMenu size={'15'} />
        </Button>

        <Drawer 
            isOpen = {isOpen}
            placement = 'left'
            onClose = {onClose}
        >
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader m={'auto'} borderBottomWidth={'3.5px'} borderBottomColor={'crimson'}>Menu</DrawerHeader>

            <DrawerBody>
            <VStack marginTop={'8'} align={'flex-start'}>

                <Button variant = 'ghost' colorScheme='purple' onClick={onClose}>
                    <Link to={'./'}>Home</Link>
                </Button>

                <Button variant = 'ghost' colorScheme='purple' onClick={onClose}>
                    <Link to={'./'}>Video</Link>
                </Button>

                <Button variant = 'ghost' colorScheme='purple' onClick={onClose}>
                    <Link to={'./'}>Free Videos</Link>
                </Button>

                <Button variant = 'ghost' colorScheme='purple' onClick={onClose}>
                    <Link to={'./'}>Upload Video</Link>
                </Button>


            </VStack>

            <HStack justifyContent={'space-evenly'} pos={'absolute'} bottom={'85'} w={'full'} right={'0.4'}>

                <Button variant = 'solid' colorScheme='purple' onClick={onClose}>
                    <Link to={'/login'}>Log In</Link>
                </Button>

                <Button variant = 'outline' colorScheme='purpl e'onClick={onClose}>
                    <Link to={'/signup'}>Sign Up</Link>
                </Button>
            </HStack>

            </DrawerBody>

        </DrawerContent>

        </Drawer>

    </>
  );
}

export default Header;
