import { Link, Navigate } from 'react-router-dom';
import errorpic from '/images/error.png'

const Error = () => {
  return (
    <div>
      <div className="py-16 max-w-[1280px] mx-auto">
        <img className='max-w-[1280px] mx-auto' src={errorpic} alt="" />
        <h1 className="text-5xl text-center">Opps!!! Something Wrong</h1>
        <div className="link__404 text-center mt-5">
          <button onClick={() => Navigate(-1)}> </button>
          <Link className="text-blue-600 underline" to={"/"}>
            {" "}
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
