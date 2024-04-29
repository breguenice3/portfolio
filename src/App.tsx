import './App.css';
import Bio from './components/bio/bio';
import Cards from './components/cards/cards';
import Contats from './components/contats/contats';
import Header from './components/header/header';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 2}}>
      <Header />
      <Bio />
      <Cards />
      <Contats />
    </motion.div>
  );
}

export default App;
