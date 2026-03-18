import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import { AuthProvider } from "./context/AuthenticationContext";
import PurchasePage from "./pages/PurchasePage/PurchasePage";

function App() {
  return(
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>

        <Route path="/purchase" element={<PurchasePage/>}></Route>



        <Route element={<ProtectedRoute></ProtectedRoute>}>
            <Route path="/dashboard" element={<DashboardPage/>}></Route>
        </Route>

      </Routes>
      </AuthProvider>
    </Router>
  )
}


export default App;
