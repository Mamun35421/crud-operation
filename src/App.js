
import Navbar from './Components/NavBar'
import CodeForInterview from './Components/CodeForInterviex';
import AddUsers from './Components/Addusers';
import Allusers from './Components/AllUsers';
import { BrowserRouter ,Route} from 'react-router-dom';



function App() {
  return (
 
     <BrowserRouter>
     <Navbar />
     <Route exact path="/" componet={CodeForInterview} />
     <Route exact path="/all" componet={AddUsers} />
     <Route exact path="/add" componet={Allusers} />
     
  

     </BrowserRouter>
      
    
  );
}

export default App;
