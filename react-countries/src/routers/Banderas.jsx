import { useQuery } from "@tanstack/react-query";
import getBanderas from "../api/getBanderas";
import Bandera from "../components/Bandera";
import "../style/banderas.css"
import { Link } from "react-router";

const Banderas = () => {

    const { isLoading, data } = useQuery({
        queryKey: ["getBanderas"],
        queryFn: getBanderas,
      });

      if(isLoading){
        return (<>
        <h1>Cargando...</h1>
        </>)
      }
  return (<>
  <div className="containbanderas">

  {data.map((band)=>{
      return (
        <Link to={band.name.common} key={band.flags.png} >
        <Bandera Bandera={band}/>
        </Link>
      )
    })}
    </div>
  </>);
};
export default Banderas;
