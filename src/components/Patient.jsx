function Patient ({ patient, setPatient, deletePatient }) {

    const { id, petname, ownername, email, appointmentdate, symptom } = patient;

    const handleDelete = () => {

        const confirmDelete = confirm('¿Estás seguro de querer eliminar este paciente?');

        if ( confirmDelete ) {
            deletePatient(id);
        }

    };

    return (
        <div className="bg-white mx-5 my-10 drop-shadow-2xl py-10 px-7 rounded-lg">


            <div className="border-2 border-transparent border-b-gray-200 mb-2">

                <p className="font-bold text-gray-400 uppercase">
                    Nombre Mascota:
                        <span className="font-normal normal-case block mt-2 mb-2 text-gray-700"> 
                            { petname } 
                        </span>
                </p>

            </div>

            <div className="border-2 border-transparent border-b-gray-200 mb-2">

                <p className="font-bold mb-3 text-gray-400 uppercase">
                    Propietario:
                        <span className="font-normal normal-case block mt-2 mb-2 text-gray-700"> 
                            { ownername } 
                        </span>
                </p>

            </div>

            <div className="border-2 border-transparent border-b-gray-200 mb-2">

                <p className="font-bold mb-3 text-gray-400 uppercase">
                    Correo electrónico:
                        <span className="font-normal normal-case block mt-2 mb-2 text-gray-700"> 
                            { email } 
                        </span>
                </p>

            </div>

            <div className="border-2 border-transparent border-b-gray-200 mb-2">

                <p className="font-bold mb-3 text-gray-400 uppercase">
                    Fecha cita:
                        <span className="font-normal normal-case block mt-2 mb-2 text-gray-700"> 
                            { appointmentdate } 
                        </span>
                </p>

            </div>

            <div className="mb-2">

                <p className="font-bold mb-3 text-gray-400 uppercase">
                    Síntomas:
                    <span className="font-normal normal-case block mt-2 mb-2 text-gray-700"> 
                        { symptom }  
                    </span>
                </p>

            </div>

            <div className="flex justify-between mt-10">
                <button type="button" 
                        className="border border-red-500 rounded-lg py-2 px-10 text-sm transition-colors uppercase hover:bg-red-500 hover:text-white"
                        onClick={ handleDelete }>
                    Eliminar
                </button>
                <button type="button" 
                        className="bg-indigo-600 text-white rounded-lg py-2 px-10 text-sm transition-colors uppercase hover:bg-indigo-700"
                        onClick={ () => setPatient( patient ) }>
                    Editar
                </button>
            </div>

        
        </div>   
    )

}

export default Patient;