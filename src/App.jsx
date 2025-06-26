import {BrowserRouter, Routes, Route, Navigate} from "react-router";
import Login from "./pages/Login.jsx";
import Layout from "./components/Layout.jsx";
import Dashboard from "src/pages/Dashboard.jsx";
import Reports from "src/pages/Reports.jsx";
import Trainings from "src/pages/Trainings.jsx";
import Faqs from "src/pages/Faqs.jsx";
import Settings from "src/pages/Settings.jsx";

function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Layout /> }>
                <Route index element={<Dashboard />} />
                <Route path="reports" element={<Reports />} />
                <Route path="trainings" element={<Trainings />} />
                <Route path="faq" element={<Faqs />} />
                <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="/campaigns/new" element={<div>New campaign</div>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
