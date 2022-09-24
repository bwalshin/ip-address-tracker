import './App.css';
import Header from './components/Header.jsx';
import Map from './components/Map.jsx';
import IPcall from './components/IPcall.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createContext, useState } from 'react';

const queryClient = new QueryClient();
const defaultState = { input: '8.8.8.8' };
export const AppContext = createContext({ app: defaultState });


export default function App() {
  const [app, setApp] = useState(defaultState);

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ app, setApp }}>
        <div>
          <Header />
          <IPcall />
          <Map />
        </div>
      </AppContext.Provider>
    </QueryClientProvider>
  );
}
