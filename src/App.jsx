import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./Layout";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import CreateReport from "./pages/CreateReport/CreateReport.jsx";
import UrgentAlerts from "./pages/UrgentAlerts/UrgentAlerts.jsx";
import PastReports from "./pages/PastReports/PastReports.jsx";
import PastReport from "./pages/PastReports/PastReport.jsx"
import { ReportProvider } from "./pages/UrgentAlerts/ReportContext";
//import { AuthProvider } from "./pages/AuthContext.jsx";
//import ProtectedRoute from "./context/ProtectedRoute.jsx";


export default function App() {
  return (
    //<AuthProvider>
      <ReportProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<Login />} />
            
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/Login" replace />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/CreateReport" element={ <CreateReport /> } />
              <Route path="/Urgent Alerts" element={ <UrgentAlerts /> } />
              <Route path="/Past-Reports" element={ <PastReports /> } />
              <Route path="/past-report/:id" element={ <PastReport /> } />
            </Route>
          </Routes>
          <ToastContainer position="top-right" autoClose={5000} />
        </BrowserRouter>
      </ReportProvider>
    //</AuthProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
