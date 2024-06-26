import FirstPage from "./Components/Page_One/first_page";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SecondPage from "./Components/Page_Two/second_Page";

const App=()=>{
  return(
    <BrowserRouter>
    <FirstPage />
    <Routes>
      <Route path="/next-song" element={<SecondPage />} />
      <Route path="/previous-song" element={<FirstPage />}/>
    </Routes>
    </BrowserRouter>
  )
};

export default App; 