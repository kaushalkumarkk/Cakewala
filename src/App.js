import './App.css';
import Navbar from './components/Navbar';
import { createTheme , ThemeProvider} from '@mui/material/styles';
import Section from './components/Section';
import { Container } from '@mui/material';
import CakeSection from './components/CakeSection';


const theme = createTheme({
  palette: {
    primary: {
      main: '#864313',
    },
  },
});

function App() {
  return (
   <ThemeProvider theme={theme}>
    <Navbar></Navbar>
    <Container>
      <Section></Section>
      <CakeSection></CakeSection>
    </Container>
   </ThemeProvider>
   
  );
}

export default App;
