import './App.css';
import React, {useState,useEffect} from 'react' 
import axios from 'axios'
function App() {
  const [news,setNews] = useState([])
  useEffect(() =>{
    axios.get("https://newsapi.org/v2/everything?q=football=us&apiKey=917f3006955c494f9cefdc2bf2fd234b")
  .then((res)=>{
    console.log(res.data.articles);
    setNews(res.data.articles)
  })
  },[])
  return (
    <>
    <div className="container my-5">
      <div className="row text-center">
        {
       news.map((val) => {
        return (
          <div className="col my-3">
          <div className="card" style={{width: "18rem"}}>
    <img src={val.urlToImage} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{val.title}</h5>
      <p className="card-text">{val.description}
</p>
      
    </div>
  </div>
          </div>
        )
       })
      }
      </div>
    </div>
    </>
  )
}

export default App;
