import './App.css';
import Main from "./Pages/Mainpage/Main";
import About from "./Pages/About/About";
import Link from "./Pages/LinkPage/Link";
import Imformation from "./Pages/Imformation/Imformation";
import Form from "./Pages/Form/Form";
import Resurce from "./Pages/Resurce/Resurce";
import { Route, Routes } from "react-router-dom";
import Error from "./Pages/Error/Error";
import { createContext, useState } from 'react';




function App() {

//   const saeed = createContext(null)



// const [result,setResult] = useState('')






  return (
    <div>
      {/* <saeed.Provider value={{result}}> */}
        
      <Routes>
        <Route path='/' element={<Main />
        } />
                <Route path='*' element={<Error />
        } />

        <Route path='/aboutUs' element={<About />
        } />
        <Route path='/link/:id' element={<Link />
        } />
        <Route path='/link/' element={<Link />
        } />

        <Route path='/Imformation/' element={<Imformation />
        } />

        <Route path='/Form/' element={<Form />
        } />

        <Route path='/Resurce/' element={<Resurce />
        } />
        


      </Routes>

        
        {/* </saeed.Provider> */}

      {/* <h2 className='text-right text-orange-600 text-4xl bg-black font-thin'>salam</h2>
<h5 className='p-10 m-10 w-60 h-60 bg-amber-300 rounded-md shadow-md shadow-slate-600'>khobi</h5>
<div className='bg-zinc-500 w-80 h-60 opacity-5 overflow-hidden flex justify-center items-center'> */}

      {/* <div className='bg-primar'>

</div> */}
      {/* <div className=''>
  
</div> */}
      {/* <div>
  
</div> */}





      {/* </div> */}


    </div>
  );
}

export default App;
