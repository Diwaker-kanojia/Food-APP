import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <>
          <h2 className="text-3xl mb-4 text-center  font-semibold">Order Succesful!</h2>
          <p className="">Your order has been Successfully placed</p>
        </>
      )}
    </div>
  );
};

export default Success;
