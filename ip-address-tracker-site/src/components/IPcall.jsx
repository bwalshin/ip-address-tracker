import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import '../App.css';
import { AppContext } from '../App';

export default function IPcall() {
  const { app, setApp } = useContext(AppContext);
  const ipAddress = app?.input || '8.8.8.8';
  console.log('ipAddress', ipAddress);
  const { status, data, error, isFetching } = useQuery(
    [ipAddress],
    () =>
      fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_aJaHvmwrQfEpHVc04N77e2UIbFBNX&ipAddress=${ipAddress}`
      )
        .then((res) => res.json())
        .then((ipData) => setApp((curr) => ({ ...curr, ipData })) || ipData),
    {
      cacheTime: Infinity,
      refecthOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  if (error) {
    return <div className='plate'>Error: {error.message}</div>;
  }

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className='plate'>
      {isFetching && '--'}
      <pre>IPCALL JSON: {JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
