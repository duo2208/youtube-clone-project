import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Navbar from './components/Navbar/Navbar';
import Sidebar from "./components/Sidebar/Sidebar";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet/>
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
