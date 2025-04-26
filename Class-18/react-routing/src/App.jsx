import { useState } from 'react';
import './App.css';
import Cat from './components/Cat';
import Dog from './components/Dog';
import Person from './components/Person';
import { Routes, Route, NavLink } from 'react-router';
import { Fragment } from 'react';


function App() {

    const [page, setPage] = useState('cat');

    return (
        <Fragment>
            <nav>
                <ul>
                    <li><NavLink to="/cat">Cat</NavLink></li>
                    <li><NavLink to="/dog">Dog</NavLink></li>
                    <li><NavLink to="/person">Person</NavLink></li>
                </ul>
            </nav>
            <Routes>
                {/* <h1>CSR: React Routing</h1>
            <button onClick={()=> setPage('cat')}>Cat</button>
            <button onClick={()=> setPage('dog')}>Dog</button>
            <button onClick={() => setPage('person')}>Person</button>
            
            {page ==='cat' && <Cat/>}
            {page ==='dog' && <Dog/>}
            {page ==='person' && <Person/>} */}

                <Route path='/cat' element={<Cat />} />
                <Route path='/dog' element={<Dog />} />
                <Route path='/person' element={<Person />} />
            </Routes>
        </Fragment>
    )
}

export default App
