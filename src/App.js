import { Routes, Route } from "react-router-dom";

// Common components
import Footer from "./components/common/Footer";
import Nav from "./components/common/Nav";

// Home components
import CustomersSay from "./components/CustomersSay";
import Faq from "./components/Faq";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import TrustedPartners from "./components/TrustedPartners";
import Unique from "./components/Unique";

// Signup pages
import LandBoard from "./components/signup/LandBoard";
import Personal from "./components/signup/Personal";
import Address from "./components/signup/Address";
import IdentityType from "./components/signup/IdentityType";
import IdentityProof from "./components/signup/IdentityProof";
import Verification from "./components/signup/Verification";
import Confirmation from "./components/signup/Confirmation";

function Home() {
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <Unique />
        <CustomersSay />
        <Faq />
        <TrustedPartners />
        <GetStarted />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Signup */}
      <Route path="/signup" element={<LandBoard />} />

      {/* Personal Information */}
      <Route path="/personal" element={<Personal />} />

      {/* Address */}
      <Route path="/address" element={<Address />} />
      <Route path="/proof-of-identity" element={<IdentityType />} />
      <Route
        path="/identity-proof"
        element={<IdentityProof />}
      />
      <Route
        path="/verification"
        element={<Verification />}
      />
        <Route
    path="/confirmation"
    element={<Confirmation />}
  />
      {/* Fallback */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;