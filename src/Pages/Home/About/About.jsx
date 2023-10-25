import person from '../../../assets/images/about_us/person.jpg'
import perts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
       return (
         <div className="hero min-h-screen bg-base-200">
           <div className="hero-content flex-col lg:flex-row ">
             <div className="lg:w-1/2 relative">
               <img src={person} className=" w-3/4 rounded-lg shadow-2xl" />
               <img
                 src={perts}
                 className="w-1/2 rounded-lg shadow-2xl absolute ml-60 border-8 top-1/2"
               />
             </div>
             <div className="lg:w-1/2 my-4">
               <h1 className="text-red-500 text-2xl font-semibold">About us</h1>
               <h1 className="text-5xl font-bold">
                 <span className="text-rose-600"> We are qualified</span> <br />{" "}
                 & of experience <br /> in this field
               </h1>
               <p className="py-4">
                 There are many variations of passages of Lorem Ipsum available,
                 but the majority have suffered alteration in some form, by
                 injected humour, or randomised words which don't look even
                 slightly believable.
               </p>
               <p className="py-3">
                 the majority have suffered alteration in some form, by injected
                 humour, or randomised words which don't look even slightly
                 believable.
               </p>
               <button className="btn btn-primary">Get More Info</button>
             </div>
           </div>
         </div>
       );
};

export default About;