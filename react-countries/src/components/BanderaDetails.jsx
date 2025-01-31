import "../style/banderas.css";

const BanderaDetails = ({ banderaDetails }) => {
  const miles = (number) => {

    const prueba = number.toString().split("").reverse();
    const prueba2 = number.toString().split("").reverse();






    (Math.floor(prueba.length / 3) -1)





    if(prueba.length / 3 % 2){

         for (let i = 0; i < (Math.floor(prueba.length / 3) -1); i++) {

      prueba2.splice((((i + 1) * 3)+i),0,".")
    }

    }else {

      for (let i = 0; i < Math.floor(prueba.length / 3); i++) {

        prueba2.splice((((i + 1) * 3)+i),0,".")
      }

    }





    // prueba.length / 3 % 2 ? (Math.floor(prueba.length / 3) -1) : Math.floor(prueba.length / 3)


    // for (let i = 0; i < (Math.floor(prueba.length / 3) -1); i++) {

    //   prueba2.splice((((i + 1) * 3)+i),0,".")
    // }
    console.log("dwe")

    return prueba2.reverse().join('');
  };
  console.log(miles(banderaDetails.population));
  return (
    <>
      <div className="details">
        <h1>Nombre del pais: {banderaDetails.name.common}</h1>
        <img src={banderaDetails.flags.png} alt="" />
        <h2>Continente: {banderaDetails.region}</h2>
        <h2>Pobación: {miles(banderaDetails.population)}</h2>
        <h2>Capital: {banderaDetails.capital[0]}</h2>
      </div>
    </>
  );
};

export default BanderaDetails;
