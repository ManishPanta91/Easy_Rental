import React from "react";
import { useGetallVechclesQuery } from "../App/posts/easyrentalapi";
import Bike from "../Component/home/Bike";
import Scuter from "../Component/home/Scuter";

const HomePage = () => {
  const { data, isLoading, isError, isFetching } = useGetallVechclesQuery();
  console.log("rentalsapi data", data);

  const bikeData = data?.data?.filter((item) => item.type === "Bike");
  

  console.log("Filtered bike data:", bikeData);

  return (
    <>
      <Bike  bikeData={bikeData} />
      <Scuter />
    </>
  );
};

export default HomePage;
