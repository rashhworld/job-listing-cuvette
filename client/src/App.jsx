import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Homepage from "./pages/Homepage";
import UserLogin from "./pages/user/UserLogin";
import UserRegister from "./pages/user/UserRegister";
import JobCreate from "./pages/job/JobCreate";
import JobDetails from "./pages/job/JobDetails";

function App() {
  return (
    <Router>
      <ToastContainer position="bottom-center" theme="colored" closeButton={false} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="user/signin" element={<UserLogin />} />
        <Route path="user/signup" element={<UserRegister />} />
        <Route path="job/create" element={<JobCreate />} />
        <Route path="job/details" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}

export default App;