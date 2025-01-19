import { Route, Routes } from 'react-router-dom';
import Addemployee from './components/Addemployee';
import Editemployees from './components/EditEmployees';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Employees from './components/Employees';
import UserHome from './components/UserHome';
import UserEmployess from './components/UserEmployess';
import Main from './components/Main';
import Privateroutes from './components/Privateroutes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Privateroutes />}>
          <Route path="/home" element={<Main child={<Home />} />} />
          <Route path="/employees" element={<Main child={<Employees />} />} />
          <Route path="/addemployee" element={<Main child={<Addemployee />} />} />
          <Route path="/edit" element={<Main child={<Editemployees />} />} />
          <Route path="/userhome" element={<Main child={<UserHome />} />} />
          <Route path="/userEmployess" element={<Main child={<UserEmployess />} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
