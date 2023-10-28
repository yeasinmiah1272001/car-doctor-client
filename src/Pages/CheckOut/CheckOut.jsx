import { useContext } from "react";
import Banner from "../Home/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleBook = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const date = e.target.date.value;
    const amount = e.target.amount.value;

    const order = {
      CustomerName: name,
      Email: email,
      img,
      service: title,
      service_id: _id,
      date,
      price: amount,
    };
    console.log(order)

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId > 0) {
          alert("successfully");
        }
      });
  };

  return (
    <div>
      <div>
        <Banner></Banner>
      </div>

      <div className="bg-blue-400 p-24">
        <h2 className="text-3xl font-extrabold text-center">
          Book Services: {title}
        </h2>
        <form onSubmit={handleBook}>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.DisplayName}
                  placeholder="First Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={user?.email}
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="amount"
                  defaultValue={"$" + price}
                  placeholder="Due Amount"
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
    </div>
  );
};

export default CheckOut;
