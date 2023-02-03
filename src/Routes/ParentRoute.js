import '../App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../Components/Home';
import Tables from '../Components/Table'
import ContactUs from '../Components/Contact';
import Error from '../Components/Error';
import Nav from '../Components/Layout';
import { useState } from 'react';
import Datacontext from '../Components/Data context'
import EditPage from '../Components/Edit';
import FormPage from '../Components/Form';

function ParentRoute() {
  const [data, setData] = useState([
    {
      Name: 'John',
      Age: 24,
      Course: 'MERN',
      Batch: 'september',
    },
    {
      Name: 'Ramu',
      Age: 23,
      Course: 'MERN',
      Batch: 'June',
    },
    {
      Name: 'Vidya',
      Age: 22,
      Course: 'MERN',
      Batch: 'August',
    },
    {
        Name: 'Akash',
        Age: 26,
        Course: 'MERN',
        Batch: 'october',
      },
      {
        Name: 'Rahul',
        Age: 24,
        Course: 'MERN',
        Batch: 'june',
      }
        
  ])
  
  return (
    <div id="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>

          <Route path="/Students" element={
            <Datacontext.Provider value={{ entries: data, updateFunction: setData }}>
            <Tables />
          </Datacontext.Provider>
          }></Route>
          <Route path="/EditPage" element={
            <Datacontext.Provider value={{ entries: data, updateFunction: setData }}>
              <EditPage />
            </Datacontext.Provider>
          }></Route>
          <Route path="/FormPage" element={
            <Datacontext.Provider value={{ entries: data, updateFunction: setData }}>
              <FormPage />
            </Datacontext.Provider>
          }></Route>
          
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ParentRoute