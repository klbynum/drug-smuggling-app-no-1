import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import CreateReport from "./pages/CreateReport/CreateReport.jsx";
import UrgentAlerts from "./pages/UrgentAlerts/UrgentAlerts.jsx";
import { ReportProvider } from "./pages/UrgentAlerts/ReportContext";

export default function App() {
  return (
    <ReportProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="Create" element={<CreateReport />} />
            <Route path="Urgent Alerts" element={<UrgentAlerts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ReportProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
