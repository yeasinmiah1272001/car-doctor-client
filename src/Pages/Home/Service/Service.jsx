import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const {_id, title, img, price } = service;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className=" h-40 rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-red-500 font-semibold">Price: {price}</p>
          <div className="card-actions justify-end text-red-500 items-center">
            <FaArrowRight></FaArrowRight>
            <Link to={`/checkout/${_id}`}>
              <button>Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
