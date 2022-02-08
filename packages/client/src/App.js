import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewHeroForm from './components/NewHeroForm';
import SuperheroesLoad from './components/SuperheroesLoad';
import SuperheroLoad from './components/SuperheroLoad';
import EditHeroImageForm from './components/EditHeroForm/EditHeroImageForm';


function App() {
  //return <NewHeroForm />;
  //return <SuperheroesLoad />;
  return(

      <Router>
        <div>
          <nav>
            <div className='navItem'>
              <Link to="/" className="App-link">Home</Link> 
            </div>
            <div className='navItem'>
              <Link to="/create" className="App-link">Create</Link>
            </div>
            {/* <div className='navItem'>
            <Link to="/edit" className="App-link">Edit</Link>
            </div> */}
          </nav>
          <Routes>
            <Route exact path="/" element={<SuperheroesLoad />}/>
            <Route exact path ="/create" element={<NewHeroForm />}/>
            <Route exact path="/addImage/:id" element={<EditHeroImageForm />}/>
            <Route exact path="/addPowers/:id" element={<h2>Element Not Fount</h2>}/>
            <Route exact path=":id" element={<SuperheroLoad />} />
          </Routes>
        </div>
      </Router>


  );
}

export default App;
