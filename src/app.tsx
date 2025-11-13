import React, { useState } from 'react';
import Landing from "./landing";
import MainPage from "./MainPage";
import Layout from "./layout";

export default function App() {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleEnterClick = () => {
    setShowMainPage(true);
  };

  return (
    <Layout>
      {showMainPage ? (
        <MainPage />
      ) : (
        <Landing onEnterClick={handleEnterClick} />
      )}
    </Layout>
  );
}
