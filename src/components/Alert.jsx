function Alert ( { children }) {
    
    return(
        <div className="border border-red-500 mb-4 p-2 rounded-lg">
             { children }
        </div>
    );
}

export default Alert;