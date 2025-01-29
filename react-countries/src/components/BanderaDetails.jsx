import { useQuery } from "@tanstack/react-query";
import getBanderaDetails from "../api/getBanderaDetails";
import { useParams } from "react-router";

const BanderasDetails = () => {
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
      <div className="details">
        <h1>Nombre del pais: {data.name.common}</h1>
        <img src={data.flags.png} alt="" />
        <h2>Continente: {data.region}</h2>
        <h2>Pobación: {data.population}</h2>
        <h2>Capital: {data.capital[0]}</h2>
      </div>
    </>
  );
};

export default BanderasDetails;
