import { useEffect, useState } from "react";
import Service from "../Service/Service";


const Services = () => {

       const [services, setServices] = useState([]);
       useEffect(() =>{
              fetch('http://localhost:5000/services')
              .then(res => res.json())
              .then(data => setServices(data))
       },[])


       return (
         <div>
           <div className="my-4">
             <h1 className="text-2xl text-red-500 text-center font-bold">
               Service
             </h1>
             <div>
               <h1 className="text-4xl text-red-600 text-center font-bold">
                 Our Service Area
               </h1>
               <p className="text-center my-3">
                 the majority have suffered alteration in some form, by injected
                 humour, or randomised <br /> words which don't look even
                 slightly believable.
               </p>
             </div>
           </div>

           <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2">
             {services.map((service) => (
               <Service key={service._id} service={service}></Service>
             ))}
           </div>
           
         </div>
       );
};

export default Services;