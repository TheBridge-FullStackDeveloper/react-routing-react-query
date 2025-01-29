import "../style/banderas.css"

const Bandera = ({ Bandera }) => {
  return (
    <>
      <div className="card">
        <h2>{Bandera.name.common}</h2>
        <img src={Bandera.flags.png} alt="" />
      </div>
    </>
  );
};

export default Bandera;
