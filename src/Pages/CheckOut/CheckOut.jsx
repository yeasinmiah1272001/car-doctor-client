import React from 'react';

const CheckOut = () => {
       return (
         <div className="bg-blue-400 p-24">
           <h2 className="text-3xl font-extrabold">Add a Coffee</h2>
           <form>
             {/* form name and quantity row */}
             <div className="md:flex mb-8">
               <div className="form-control md:w-1/2">
                 <label className="label">
                   <span className="label-text">First Name</span>
                 </label>
                 <label className="input-group">
                   <input
                     type="text"
                     name="name"
                     placeholder="First Name"
                     className="input input-bordered w-full"
                   />
                 </label>
               </div>
               <div className="form-control md:w-1/2 ml-4">
                 <label className="label">
                   <span className="label-text">Last Name</span>
                 </label>
                 <label className="input-group">
                   <input
                     type="text"
                     name="last name"
                     placeholder="Last Name"
                     className="input input-bordered w-full"
                   />
                 </label>
               </div>
             </div>
             {/* form supplier row */}
             <div className="md:flex mb-8">
               <div className="form-control md:w-1/2">
                 <label className="label">
                   <span className="label-text">Your Phone</span>
                 </label>
                 <label className="input-group">
                   <input
                     type="text"
                     name="supplier"
                     placeholder="Your Phone"
                     className="input input-bordered w-full"
                   />
                 </label>
               </div>
               <div className="form-control md:w-1/2 ml-4">
                 <label className="label">
                   <span className="label-text">Email</span>
                 </label>
                 <label className="input-group">
                   <input
                     type="text"
                     name="email"
                     placeholder="Your Email"
                     className="input input-bordered w-full"
                   />
                 </label>
               </div>
             </div>

             <input
               type="submit"
               value="Order Confirm"
               className="btn btn-block bg-red-500"
             />
           </form>
         </div>
       );
};

export default CheckOut;