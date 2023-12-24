import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Main from './components/Main';
import data from './data.js';

function App() {
  const cards=data.map(item=>{
    return(
      <Card 
        key={item.id}
        item={item}
      
      />
    )
  })

  return (
    <div className="App">
     <Navbar />
     <Main/>
     <section className="cards">
                {cards}
            </section>
            
    </div>
  );
}

export default App;
