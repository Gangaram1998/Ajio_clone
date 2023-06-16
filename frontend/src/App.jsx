import { Box, useDisclosure } from '@chakra-ui/react';
import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import Searchpage from './components/Searchpage';


function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className="App">
      <Box>
        <AllRoutes/>
      </Box>
    </div>
  );
}

export default App;


