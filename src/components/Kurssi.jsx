import PropTypes from 'prop-types';

const Kurssi = ({ nimi, handleSelectKurssi, index }) => {

    const handleClick = () => {
        handleSelectKurssi(index); // This triggers the function in the App component
      };

    return (
        <>
            <h4 className="sisennys-4rem" onClick={handleClick}>{nimi}</h4>
        </>
        // TODO: if isSelected then display course assignments.
    )

}

Kurssi.propTypes = {
    nimi: PropTypes.string,
    handleSelectKurssi: PropTypes.func,
    index: PropTypes.number
}

export default Kurssi;