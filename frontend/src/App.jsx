import { Box, useDisclosure } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import { AllRoutes } from './routes/AllRoutes';
import Sidebar from './components/Sidebar';


function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className="App">
      <Navbar onOpen={onOpen}/>
      <Sidebar onClose={onClose} isOpen={isOpen}/>
      <Box mt={"85px"}>
        <AllRoutes/>
      </Box>
    </div>
  );
}

export default App;


