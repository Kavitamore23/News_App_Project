import { useEffect,useState } from 'react';
import News from './News';
import './index.css';
import './App.css';

function App() {

  let [articles, setArticles] =useState([]);
  let [category,setCategory]=useState(["india"]);
  

    useEffect(()=>{

       fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-05-05&apiKey=b4373f9f202747e480f24aa580cbb581`)
       .then((response)=>response.json())//u get initial response which return response.json which extract data
       .then((news)=>{
          console.log(news.articles);//here data should be available
        setArticles(news.articles);
    })

       .catch((err)=>{
          console.log(err)
    })
  },[category])
  return (
    
    <div className="App">

      <header className='header'>
        <h1> EXPLOLER NEWS</h1>

          <input type='text' onChange={(event)=>{
            if(event.target.value!=="")
              {
                setCategory(event.target.value);
              }
            else
            {
              setCategory("India")
            }
             }
          }placeholder='Search News'></input>

      </header>

      <section className='news-articles'>
        {
articles.length!=0?


          articles.map((article)=>{
            return(
              <News article={article}></News>
            )
              
          })
          :
          <h3>No News Found For Search Text</h3>
        }
       
       
       
       
       
       
       

      </section>
     
    </div>
  );
}

export default App;

