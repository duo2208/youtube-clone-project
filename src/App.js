import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Navbar from './components/Navbar/Navbar';
import Sidebar from "./components/Sidebar/Sidebar";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <QueryClientProvider client={queryClient}>
        <Outlet/>
      </QueryClientProvider>
    </>
  );
}

export default App;
