
// components
import Home from "./components/Home";
import DataProvider from "./context/DataProvider";
function App() {
  return (
    // home ko wrap kr dnge dataprovider se to jo bhi values export kiye the
    // (html,css,js) wala wo ab pure is home se jitne bhi related component h sb me use kr skte 
    <DataProvider>
        <Home/>     
    </DataProvider>
    // ab ome children bn gya h to usko forward krna pdega nhi eroor dega ab
    // jis bhi component me usko use krna h usme isko context se wrap krna pdega datprovider me
   );
}

export default App;
