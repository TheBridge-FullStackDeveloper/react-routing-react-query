import { useQuery } from "@tanstack/react-query";
import getBanderaDetails from "../api/getBanderaDetails";
import { useParams } from "react-router";
import BanderaDetails from "../components/BanderaDetails";

const RouterBanderaDetails = () => {
  const { name } = useParams();
  const { isLoading, data, error } = useQuery({
    queryKey: ["getBanderaDetails", name],
    queryFn: () => getBanderaDetails(name),
  });

  if (isLoading) {
    return (
      <>
        <h1>Cargando...</h1>
      </>
    );
  }
  if (error) {
    return (
      <>
        <h1>Pais no encontrado</h1>
      </>
    );
  }

  return (
    <>
    <div className="containerBanderaDetails">
         <BanderaDetails key={data.name.common} banderaDetails={data}/>
    </div>
    </>
  );
};

export default RouterBanderaDetails;
