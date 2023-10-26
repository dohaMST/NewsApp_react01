import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { apiContext } from "./context/apiContext";


function App() {
  let [val, setVal] = useState([])
  useEffect(()=>{
    const fetchApi = async()=>{
      let res = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=901931c02f114298a69772ee86019f6c")
      let result = await res.json()
      console.log(result.articles)
      setVal(result.articles)
    }
    fetchApi()
    return ()=>fetchApi()
  },[])
  // console.log("val",val)
  return (
    <div className="App">
      <apiContext.Provider value={val}>
        <Home/>
      </apiContext.Provider>
    </div>
  );
}

export default App;
