import React, { useContext } from 'react';
import '../App.css';
import { useFormik, FormikProvider, Field } from 'formik';
import { AppContext } from '../App';

export default function Header() {
  const { app, setApp } = useContext(AppContext);
  const formik = useFormik({
    initialValues: {},
    onSubmit(values) {
      setApp(values);
    },
  });

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
                <h4 className='col'>IP Address</h4>
                <h4 className='col'>Location</h4>
                <h4 className='col'>Time Zone</h4>
                <h4 className='col'>ISP</h4>
              </div>
              <div className='row'>
                <h1 className='col'>{app?.ipData?.id}</h1>
                <h1 className='col'>city, region, postcalCode</h1>
                <h1 className='col'>location</h1>
                <h1 className='col'>isp</h1>
              </div>
            </div>
          </div>
        </div>
      </form>
      <pre>INPUT JSON: {JSON.stringify(formik.values, null, 2)}</pre>
    </FormikProvider>
  );
}
