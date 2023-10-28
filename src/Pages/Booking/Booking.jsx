import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingRow from '../BookingRow/BookingRow';
import axios from 'axios';

const Booking = () => {
        const [booking, setBooking] = useState([]);

       const {user} = useContext(AuthContext)
       const url = `http://localhost:5000/booking?email=${user?.email}`;
      
       useEffect(() =>{
            //  if(user?.email){
            //    fetch(`http://localhost:5000/booking?email=${user?.email}`)
            //      .then((res) => res.json())
            //      .then((data) => setBooking(data));
            //  }
            axios.get(url, {withCredentials:true})
            .then(res => setBooking(res.data))


       },[url])

         const handleDelete = (id) => {
           const proceed = confirm("Are You sure you want to delete");
           if (proceed) {
             fetch(`http://localhost:5000/booking/${id}`, {
               method: "DELETE",
             })
               .then((res) => res.json())
               .then((data) => {
                 console.log(data);
                 if (data.deletedCount > 0) {
                   alert("deleted successful");
                   const remaining = booking.filter(
                     (booking) => booking._id !== id
                   );
                   setBooking(remaining);
                 }
               });
           }
         };



       return (
         <div>
           <h1>Booking:{booking.length}</h1>
           <div className="overflow-x-auto">
             <table className="table">
               {/* head */}
               <thead>
                 <tr>
                   <th>
                     <label>
                       <input type="checkbox" className="checkbox" />
                     </label>
                   </th>
                   <th>Name</th>
                   <th>Job</th>
                   <th>Favorite Color</th>
                   <th></th>
                 </tr>
               </thead>
               <tbody></tbody>
             </table>
           </div>
           <div className="gap-10">
             {booking.map((booking) => (
               <BookingRow
                 key={booking._id}
                 booking={booking}
                 handleDelete={handleDelete}
               ></BookingRow>
             ))}
           </div>
         </div>
       );
};

export default Booking;