import { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import PatientsList from './components/PatientsList';




export function App () {

  const patientesLS               = JSON.parse( localStorage.getItem('patients') ) ?? [];
  const [ patients, setPatients ] = useState( patientesLS );
  const [ patient, setPatient ]   = useState( {} );


  // Sincroniza el state con lo que haya en patients
  useEffect ( () => {
      localStorage.setItem('patients', JSON.stringify( patients ) );
  }, [ patients ]);

  const deletePatient = ( id ) => {
    const updatedPatients = patients.filter( patient => patient.id !== id) ;
    setPatients(updatedPatients);
  };

  return (
      <div className="container mx-auto mt-20">
        <Header/>
        
        <div className="mt-12 md:flex md:justify-between">

          <Form
            patients={ patients }
            setPatients={ setPatients }
            patient={ patient }
            setPatient={ setPatient }
          />

          <PatientsList
            patients={ patients }
            setPatient={ setPatient }
            deletePatient={ deletePatient }
          />

        </div>

      </div>
  )

}

