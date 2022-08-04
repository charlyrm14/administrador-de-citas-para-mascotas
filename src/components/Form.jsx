import { useState, useEffect } from "react";
import Alert from "./Alert";

function Form ({ patients, setPatients, patient, setPatient }) {

    const [ petname, setPetName ]                   = useState('');
    const [ ownername, setOwnerName ]               = useState('');
    const [ email, setEmail ]                       = useState('');
    const [ appointmentdate, setAppointmentDate ]   = useState('');
    const [ symptom, setSymptom ]                   = useState('');

    const [ error, setError ]                       = useState( false );


    useEffect ( () => {

        // Object.keys( patient) : Comprueba si un arreglo esta vacío o no 

        if ( Object.keys( patient ).length > 0 ) {

            const { id, petname, ownername, email, appointmentdate, symptom } = patient;

            setPetName( petname );
            setOwnerName( ownername );
            setEmail( email );
            setAppointmentDate( appointmentdate );
            setSymptom( symptom );

        }

    }, [ patient ]); 
    
    /* 
        Este useEffect se ejecutará solo cuando patient haya cambiado, cuando se haya dado 
        click en el boton editar 
    */


    const generateId = () => {
        const random    = Math.random().toString(36).substring(2);
        const date      = Date.now().toString(36);
        return date + random;
    }


    const handleSubmit = ( e ) => {
        e.preventDefault();

        /* Validación de formulario */
        if ( [ petname, ownername, email, appointmentdate, symptom ].includes('') ) {
            setError( true );
            return;
        } 

        setError( false );

        const objPatient = {
            petname,
            ownername, 
            email,
            appointmentdate,
            symptom,
        }

        if ( patient.id ) {
            // Editando registro
            objPatient.id = patient.id;

            const updatedPatients = patients.map( patientState => patientState.id === patient.id 
                                                    ? objPatient 
                                                    : patientState 
            );

            setPatients( updatedPatients );
            setPatient({});


        } else {
            // Creando registro
            objPatient.id = generateId();
            setPatients( [ ...patients, objPatient ] );
        }

        

        setPetName('');
        setOwnerName('');
        setEmail('');
        setAppointmentDate('');
        setSymptom('');

    }

    return ( 
        <div className="md:w-1/2 lg:w-2/5 mx-5">

            <h2 className="font-black text-3xl text-center"> Seguimiento pacientes </h2>

            <p className="text-lg mt-5 text-center mb-10"> 
                Añade tus 
                <span className="text-indigo-600 font-bold"> pacientes </span> 
            </p>

            <form action="#" className="bg-white drop-shadow-2xl rounded-lg py-10 px-7 mb-10" onSubmit={ handleSubmit }>

                { error && 
                            <Alert>  
                                    <p className="text-red-500 text-center text-sm">
                                        Todos los campos son obligatorios
                                    </p>
                            </Alert> 
                }

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="petname"> Mascota </label>
                    <input  type="text"
                            id="petname" 
                            name="petname"
                            placeholder="Nombre de tu mascota"
                            className=" border-2 border-transparent border-b-indigo-400 w-full 
                                        p-2 mt-2 placeholder-gray-400 outline-none caret-indigo-900"
                            value={ petname }
                            onChange={ e => setPetName( e.target.value ) }/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="ownername"> Propietario </label>
                    <input  type="text"
                            id="ownername" 
                            name="ownername"
                            placeholder="Nombre del propietario"
                            className=" border-2 border-transparent border-b-indigo-400 w-full 
                                        p-2 mt-2 placeholder-gray-400 outline-none caret-indigo-900"
                            value={ ownername }
                            onChange={ e => setOwnerName( e.target.value ) }/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email"> Email </label>
                    <input  type="email"
                            id="email" 
                            name="email"
                            placeholder="Correo electrónico"
                            className=" border-2 border-transparent border-b-indigo-400 w-full 
                                        p-2 mt-2 placeholder-gray-400 outline-none caret-indigo-900"
                            value={ email }
                            onChange={ e => setEmail( e.target.value ) }/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="appointmentdate"> Fecha cita </label>
                    <input  type="date"
                            id="appointmentdate" 
                            name="appointmentdate"
                            className=" border-2 border-transparent border-b-indigo-400 w-full 
                                        p-2 mt-2 placeholder-gray-400 outline-none caret-indigo-900"
                            value={ appointmentdate }
                            onChange={ e => setAppointmentDate( e.target.value ) }/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="symptom"> Síntomas </label>
                    <textarea   type="date"
                                id="symptom" 
                                name="symptom"
                                placeholder="Descríbe los síntomas"
                                className=" border-2 border-transparent border-b-indigo-400 w-full 
                                        p-2 mt-2 placeholder-gray-400 outline-none caret-indigo-900"
                                value={ symptom }
                                onChange={ e => setSymptom( e.target.value ) }/>
                </div>

                <button type="submit"
                        className=" bg-indigo-500 w-full p-2 text-white uppercase font-bold rounded-lg 
                                    mt-5 hover:bg-indigo-700 transition-shadow"> 
                            { patient.id ? 'Actualizar Información' : 'Agregar Paciente' } 
                </button>


            </form>

        </div>
     );
}

export default Form;
