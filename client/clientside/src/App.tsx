import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./context/financial-record-context";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <Link to="/">Dashboard</Link>

      <SignedIn>
        <UserButton afterSignOutUrl="/auth" />
      </SignedIn>

      <SignedOut>
        <button
          onClick={() => navigate("/auth")}
          className="bg-blue-600 text-white px-4 py-2 rounded ml-4"
        >
          Sign In / Sign Up
        </button>
      </SignedOut>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <FinancialRecordsProvider>
                <Dashboard />
              </FinancialRecordsProvider>
            }
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
