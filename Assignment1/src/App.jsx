import './App.css';  
import Card from './Card';  

function App() {
   return (<>     
   <h1 id="Heading">The Gaming Products</h1>     
   <div className='card-Contain'>       
    <Card         
    Title={"Ps 5"}         
    idx={0}>       
    </Card>       
    <Card         
    Title={"Gaming PC"}         
    idx={1}>       
    </Card>       
    <Card         
    Title={"Laptop"}         
    idx={2}>       
    </Card>     
    </div>   
    </>   
    ); 
  }  
  
  export default App; 