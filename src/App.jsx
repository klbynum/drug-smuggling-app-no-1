import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
            <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />

              <Route path="Login" element={<Login />} />
              <Route 
              index 
              element={
              //  <ProtectedRoute>
                  <Login />
              //  </ProtectedRoute>
                } 
                />
              <Route 
                path="CreateReport" 
                element={
                 // <ProtectedRoute>
                    <CreateReport />
                //  </ProtectedRoute>
                } 
              />
              <Route 
                path="Urgent Alerts" 
                element={
                 // <ProtectedRoute>
                    <UrgentAlerts />
                 // </ProtectedRoute>
                } 
              />
              <Route 
                path="Past Reports" 
                element={
                 // <ProtectedRoute>
                    <PastReports />
                 // </ProtectedRoute>
                } 
              />
              <Route 
                path="/past-report/:id" 
                element={
                 // <ProtectedRoute>
                    <PastReport />
                 // </ProtectedRoute>
                } 
              />
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
