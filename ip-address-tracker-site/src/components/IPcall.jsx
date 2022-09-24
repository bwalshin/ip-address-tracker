import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import '../App.css';
import { AppContext } from '../App';

export default function IPcall() {
  const { app, setApp } = useContext(AppContext);
  const { status, data, error, isFetching } = useQuery(
    [app.input], () =>
      fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_aJaHvmwrQfEpHVc04N77e2UIbFBNX&ipAddress=${app.input}`
        // "https://geo.ipify.org/api/v2/country,city?apiKey=at_aJaHvmwrQfEpHVc04N77e2UIbFBNX&ipAddress=8.8.8.8"
        // `https://geo.ipify.org/api/v2/country,city?`
      )
        .then((res) => res.json())
        // .then((ipData... line is throwing "undefined" error
        .then((ipData) => setApp((curr) => ({ ...curr, ipData }))),
    {
      cacheTime: Infinity,
      refecthOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  if (error) {
    return <div>Error: {error.message}</div>;
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
