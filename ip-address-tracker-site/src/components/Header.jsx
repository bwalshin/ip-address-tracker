import React, { useContext } from 'react';
import { useFormik, FormikProvider, Field } from 'formik';
import { useQuery } from '@tanstack/react-query';

import '../App.css';
import { AppContext } from '../App';

export default function Header() {
  const { app, setApp } = useContext(AppContext);
  const formik = useFormik({
    initialValues: {},
    onSubmit(values) {
      setApp(values);
    },
  });

  const { data } = useQuery(
    ['states'],
    () =>
      fetch(
        'https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json'
      )
        .then((res) => res.json())
        .then((states) =>
          Object.keys(states).reduce(
            (sts, key) => ({ ...sts, [states[key]]: key }),
            {}
          )
        ),
    {
      cacheTime: Infinity,
      refecthOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  if (!data) return null;

  console.log(data);

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className='headerBackground'>
        <div className='headerContent'>
          <h2> IP Address Tracker </h2>
          <div className='input-group'>
            <Field
              name='input'
              placeholder='Search for any IP address or domain'
              className='input'
            />
            <button className='btn' type='submit'>
              Button
            </button>
          </div>
          <div className='plate'>
            <div className='container'>
              <div className='row'>
                <div className='col '>
                  <h4>IP Address</h4>
                  <h1>{app?.ipData?.ip}</h1>
                </div>
                <div className='col'>
                  <h4>Location</h4>
                  <h1>
                    {app?.ipData?.location?.city}, 
                    {data[app?.ipData?.location?.region] || app?.ipData?.location?.region}
                    <br />
                    {app?.ipData?.location?.postalCode}
                  </h1>
                </div>
                <div className='col'>
                  <h4>Time Zone</h4>
                  <h1>UTC {app?.ipData?.location?.timezone}</h1>
                </div>
                <div className='col'>
                  <h4>ISP</h4>
                  <h1>{app?.ipData?.isp}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <pre>INPUT JSON: {JSON.stringify(formik.values, null, 2)}</pre>
    </FormikProvider>
  );
}
