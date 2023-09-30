// to fetch context api
import { createContext,useState } from "react";
// createcontext need to be initialised with default value, we can let it undefined too (no value given like in this case)
// usestate is used to store values for html,css and js.
export const DataContext = createContext();
// export kiye h taki iska use kr ske aage import kr k

const DataProvider = ({children}) => {
    // usestate is used to store values of html css and js respectively

    const[html,setHtml] = useState('');
    const[css,setCss] = useState('');
    const[js,setJs] = useState('');

    // we need to return the context
    return(
        // jo bhi context hota h usk upr ek provider attribute milta h
        //  provider attribute jo bhi value store kraye h usko export krta h
        // provider is used to export value using the value attribute . it is exported in form of object

        <DataContext.Provider
        value={{
           html,
           setHtml,
           css,
           setCss,
           js,
           setJs
        }}
        >
        {/* in sbhi values ko export kr rhe h */}

        {children}
        {/* childre yani home ko forward kr rhe h  */}
        </DataContext.Provider>
        
    )
}

export default  DataProvider;