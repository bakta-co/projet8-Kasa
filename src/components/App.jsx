import { BrowserRouter } from 'react-router-dom';
import Header from './header';
import Rooter from './router';
import Footer from './footer';

function App() {
      return (
        <BrowserRouter>
        
           <Header />
           <main>
                <Rooter/>
            </main>
            <Footer />
           
        </BrowserRouter> 
    );
  
}

export default App;
