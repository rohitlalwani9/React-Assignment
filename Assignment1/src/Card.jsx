import './Card.css'; 
import ps5 from './assets/ps5.jpg';
import gamingpc from './assets/gamingpc.avif';
import laptop from './assets/laptop.jpg';
import xbox from './assets/xbox.png'

function Card({ Title, idx }) {
    let des1 = ["Experience next-gen 4K gaming", "Gaming Pc, high performance", "Laptop for high gaming", "console of microsofe play any where"];     
    let des2 = ["Ultra-fast SSD & DualSense controller", "32GB RAM 2TB SSD i9 ultra", "16GB RAM 1TB SSD 4K screen", "play mincrafte"];  
    let imgarr = [ps5, gamingpc, laptop, xbox];  
    let price = ["54,000", "50,000", "60,000", "40,000"]     
    return (        
    <div className="Card-box"> 
    <h1>{Title}</h1> 
    <img src={imgarr[idx]} alt="" /> 
    <p>{"- " + des1[idx]}</p>          
    <p>{"- " + des2[idx]}</p>             
    <div className="price-box">                 
    <span id="Strick-price">{"₹" + price[idx]}</span>                 
    <span id="price">{"₹" + price[idx]}</span>             
    </div>         
    </div>     
    );
 }  
export default Card; 