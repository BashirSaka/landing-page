import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Notice from "./Components/Notice";
import Features from "./Components/Features";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import Account from "./Components/Account";

function App() {
  const [showAccount, setShowAccount] = useState(false);

  if (showAccount) {
    return <Account onBack={() => setShowAccount(false)} />;
  }

  return (
    <>
      <Navbar onAuthClick={() => setShowAccount(true)} />
      <Notice />
      <Hero />
      <Features />
      <Categories />
      <Footer />
    </>
  );
}

export default App;
