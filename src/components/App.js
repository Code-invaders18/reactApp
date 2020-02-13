import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
function App() {
  function GetPage() {
    const route = window.location.pathname;
    if (route === "/About") return <AboutPage />;
    if (route === "/Courses") return <CoursesPage />;
    return <HomePage />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {GetPage()}
    </div>
  );
}
export default App;
