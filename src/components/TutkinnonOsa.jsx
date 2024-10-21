import PropTypes from 'prop-types';

const TutkinnonOsa = ({ tut_nimi, osp }) => {

    return (
        <article className="ops">
            <h3 className="sisennys-2rem">{tut_nimi} {osp}osp</h3>
        </article>
    )

}

TutkinnonOsa.propTypes = {
    tut_nimi: PropTypes.string,
    osp: PropTypes.string
}


export default TutkinnonOsa;