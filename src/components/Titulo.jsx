const Titulo = ({ comision, anioActualProps }) => {
  return (
    <>
      <h2>Titulo generado con props de la comision: {comision}</h2>
      <p>Año actual: {anioActualProps}</p>
    </>
  );
};

export default Titulo;
