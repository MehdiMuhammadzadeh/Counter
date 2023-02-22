import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TableButton from "./components/TableButton";
import CounterProvider from "./context/Provider";
import Posts from "./pages/Posts";
import Users from "./pages/Users";

const App = () =>{
  return (
    <BrowserRouter>
     <Header />
    <Routes>
      <Route path="/" element={
        <CounterProvider>
          <TableButton />
        </CounterProvider>
      }/>
      <Route path="/posts" element={<Posts />}/>
      <Route path="/users" element={<Users />}/>
    </Routes>
    </BrowserRouter>
  )
}


export default App;
