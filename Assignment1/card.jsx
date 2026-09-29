// import Price from "./price";
// import laptop from "./assets/Labtop.png";
// import mobile from "./assets/Smartphone-Mobile-PNG-Image-Background.png";
// import headphone from "./assets/headphones-png-20176.png";
// import fitbit from "./assets/andres-urena-V7UoMNWsYsg-unsplash.jpg";
// import './card.css';
// export default function Card({ title, idx }) {
//     let im = [laptop, mobile, headphone, fitbit];
//     let decp1 = ["laptop is a portable computer that can be used for work, entertainment, and communication.", "mobile is a handheld device that allows you to make calls, send messages, and access the internet.", "headphone is a device that allows you to listen to music or other audio without disturbing others.", "Fitbit is a wearable device that tracks your physical activity, sleep, and heart rate."];
//     let decp2 = ["laptop is a portable computer that can be used for work, entertainment, and communication.", "mobile is a handheld device that allows you to make calls, send messages, and access the internet.", "headphone is a device that allows you to listen to music or other audio without disturbing others.", "Fitbit is a wearable device that tracks your physical activity, sleep, and heart rate. "];
//     let old = [50000, 20000, 3000, 10000];
//     let newp = [40000, 15000, 2000, 8000];
//     return <div className="card">
//         <img src={im[idx]} alt={title} />
//         <h2>{title}</h2>
//         <p>{decp1[idx]}</p>
//         <p>{decp2[idx]}</p>  
//         <Price oldp={old[idx]} newp={newp[idx]} />
//     </div>;
// }
import Price from "./price";
import laptop from "./assets/Labtop.png";
import mobile from "./assets/Smartphone-Mobile-PNG-Image-Background.png";
import headphone from "./assets/headphones-png-20176.png";
import fitbit from "./assets/andres-urena-V7UoMNWsYsg-unsplash.jpg";
import './card.css';
export default function Card({ title, idx }) {
    let im = [laptop, mobile, headphone, fitbit];
    let decp1 = ["laptop is a portable computer that can be used for work, entertainment, and communication.", "mobile is a handheld device that allows you to make calls, send messages, and access the internet.", "headphone is a device that allows you to listen to music or other audio without disturbing others.", "Fitbit is a wearable device that tracks your physical activity, sleep, and heart rate."];
    let decp2 = ["laptop is a portable computer that can be used for work, entertainment, and communication.", "mobile is a handheld device that allows you to make calls, send messages, and access the internet.", "headphone is a device that allows you to listen to music or other audio without disturbing others.", "Fitbit is a wearable device that tracks your physical activity, sleep, and heart rate. "];
    let old = [50000, 20000, 3000, 10000];
    let newp = [40000, 15000, 2000, 8000];
    return <div className="card">
        <img src={im[idx]} alt={title} />
        <h2>{title}</h2>
        <p>{decp1[idx]}</p>
        <p>{decp2[idx]}</p>  
        <Price oldp={old[idx]} newp={newp[idx]} />
    </div>;
}