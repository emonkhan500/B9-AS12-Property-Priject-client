import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthPorvider";
import useAxiosPublic from "../useAxiosPublic";
import useaxiousSecure from "../useaxiousSecure";
import ShowProperty from "./ShowProperty";

const PropertyBought = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useaxiousSecure();

  const { refetch, data: offeredProperty = [] } = useQuery({
    queryKey: ["offProperty", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/offeredProperties/${user.email}`);
      return res.data;
    },
  });
  console.log(offeredProperty);
  return (
    <div>
      <div className=" text-transparent bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4] bg-clip-text text-center text-3xl font-bold pt-8 pb-8">
        <h1> Your Wished Property</h1>
      </div>
      {offeredProperty && offeredProperty.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5 px-5 mb-10">
          {offeredProperty.map((property) => (
            <ShowProperty
              key={property.id || property._id}
              property={property}
            />
          ))}
        </div>
      ) : (
        <h1 className="text-4xl mt-2  py-3 border-t-2 text-center  text-transparent bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4] bg-clip-text">
          You Haven't Brought A Property
        </h1>
      )}
    </div>
  );
};

export default PropertyBought;
