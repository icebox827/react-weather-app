import { ChakraProvider } from '@chakra-ui/react';
import '../style/App.css';
import '../Api'
import './Header'
import Header from './Header';
import SearchArea from './SearchArea';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <SearchArea />
    </ChakraProvider>
  );
}

export default App;
