import PropTypes from "prop-types";

const Kurssi = ({ nimi, handleSelectKurssi, index, activeIndex }) => {
  const handleClick = () => {
    handleSelectKurssi(index); 
  };

  const kurssiStyle = {
    cursor: "pointer",
    fontWeight: activeIndex === index ? "bold" : "lighter", 
  };

  return (
    <>
      <h4 className="sisennys-4rem" onClick={handleClick} style={kurssiStyle}>
        {nimi}
      </h4>
    </>
  );
};

Kurssi.propTypes = {
  nimi: PropTypes.string,
  handleSelectKurssi: PropTypes.func,
  index: PropTypes.number,
  activeIndex: PropTypes.number,
};

export default Kurssi;
