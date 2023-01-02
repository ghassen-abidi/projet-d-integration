import { Profiler, useState } from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Home from "./routes/Home";
import Dashbored from "./routes/Dashbored";
import { useUsersgetMyData } from "./api/users";
import { Protected } from "./components/Protected";

function App() {
  const { isLoading, data } = useUsersgetMyData();

  if (isLoading) return <h1>Loading</h1>;

  console.log({
    data,
  });

  return (
    <div className="App">
      <Router>
        <Navbar
          links={[
            { label: "Home", link: "world" },
            {
              label: "event",
              link: "event",
              links: [
                { label: "old events", link: "world" },
                { label: "current events", link: "world" },
              ],
            },
          ]}
        />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Protected role="admin">
            <Route path="/Dashbored" element={<Dashbored />} />
          </Protected>
          <Protected>
            <Route path="/event/old" />
          </Protected>
          <Route path="/event/current" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
