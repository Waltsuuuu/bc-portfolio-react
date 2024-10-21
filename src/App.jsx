import { useState } from "react";
import Header from "./components/Header";
import TutkinnonOsa from "./components/TutkinnonOsa";
import Kurssi from "./components/Kurssi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'



function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSelectKurssi = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <Header />
      <article className="ops">
        <TutkinnonOsa tut_nimi="Ohjelmointi" osp="45" />

        <Kurssi
          nimi="HTML ja CSS"
          handleSelectKurssi={handleSelectKurssi}
          index={0}
          activeIndex={activeIndex}
        />
        {activeIndex === 0 && (
          <ul>
            <li>
              <a
                href="/Html-Css-Assignments/01-harjoitus/index.html"
                target="_blank"
              >
                01-harjoitus
              </a>
            </li>
            <li>
              <a
                href="/Html-Css-Assignments/02-fontti-muotoilut/index.html"
                target="_blank"
              >
                02-fontti-muotoilut
              </a>
            </li>
            <li>
              <a
                href="/Html-Css-Assignments/03-kolme-laatikkoa/index.html"
                target="_blank"
              >
                {" "}
                03-kolme-laatikkoa
              </a>
            </li>
            <li>
              <a
                href="/Html-Css-Assignments/04-semanttiset-tagit-flexboxilla/index.html"
                target="_blank"
              >
                {" "}
                04-Semanttiset-tagit(flexbox)
              </a>
            </li>
            <li>
              <a
                href="/Html-Css-Assignments/04-semanttiset-tagit-floatilla/index.html"
                target="_blank"
              >
                {" "}
                04-Semanttiset-tagit(float)
              </a>
            </li>
            <li>
              <a
                href="/Html-Css-Assignments/05-vihje-laatikosta/index.html"
                target="_blank"
              >
                {" "}
                05-Vihje-laatikosta
              </a>
            </li>
            <li>
              <a
                href="/Html-Css-Assignments/06-media-query/index.html"
                target="_blank"
              >
                06-Media-query
              </a>
            </li>
            <li>
              <a
                href="/Html-Css-Assignments/07-flexbox-harjoitus-mobile-first/index.html"
                target="_blank"
              >
                {" "}
                07-flexbox-harjoitus(mobile-first)
              </a>
            </li>
            <li>
              <a
                href="/Html-Css-Assignments/08-citrus-cafe/index.html"
                target="_blank"
              >
                {" "}
                08-Citrus-cafe
              </a>
            </li>
            <li>
              <a
                href="/Html-Css-Assignments/09-luovaakelluttamista-gridill-/index.html"
                target="_blank"
              >
                {" "}
                09-Luovaa-kelluttamista(gridillä)
              </a>
            </li>
            <li>
              <a
                href="/Html-Css-Assignments/09-luovaa-kelluttamista/index.html"
                target="_blank"
              >
                {" "}
                09-Luovaa-kelluttamista(flex)
              </a>
            </li>
            <li>
              <a
                href="/Html-Css-Assignments/10-kuvaestitys-gridill-/index.html"
                target="_blank"
              >
                {" "}
                10-Kuvaesitys-gridillä
              </a>
            </li>
            <li>
              <a
                href="/Html-Css-Assignments/10-kuvaesitys-soveltaminen/index.html"
                target="_blank"
              >
                {" "}
                10-Kuvaesitys-gridillä(soveltaminen)
              </a>
            </li>
            <li>
              <a
                href="/Html-Css-Assignments/11-responsiivinen-kuva-albumi-css/index.html"
                target="_blank"
              >
                {" "}
                11-Responsiivinen-kuva-albumi-CSS-säänöin
              </a>
            </li>
            <li>
              <a
                href="/Html-Css-Assignments/12-pretzel-responsive-site/index.html"
                target="_blank"
              >
                {" "}
                12-Pretzel-responsive-site
              </a>
            </li>
            <li>
              <a
                href="/Html-Css-Assignments/13-onepage-portfolio/index.html"
                target="_blank"
              >
                {" "}
                13-One-page-site
              </a>
            </li>
          </ul>
        )}

        <Kurssi
          nimi="Javascript-ohjelmointi"
          handleSelectKurssi={handleSelectKurssi}
          index={1}
          activeIndex={activeIndex}
        />
        {activeIndex === 1 && (
          <ul>
            <li>
              <a
                href="https://github.com/Waltsuuuu/JS-perusteet"
                target="_blank"
              >
                Javascript-Perusteet GitHub Repository
              </a>
            </li>
            <li>
              <a href="/PancakeTilaus2/index.html" target="_blank">
                Pancake Order Form
              </a>
            </li>
          </ul>
        )}

        <Kurssi
          nimi="PHP-Ohjelmoinnin perusteet"
          handleSelectKurssi={handleSelectKurssi}
          index={2}
          activeIndex={activeIndex}
        />
        {activeIndex === 2 && (
          <ul>
            <li>Kurssi ei ole alkanut.</li>
          </ul>
        )}

        <Kurssi
          nimi="Versionhallinta ja Git"
          handleSelectKurssi={handleSelectKurssi}
          index={3}
          activeIndex={activeIndex}
        />
        {activeIndex === 3 && (
          <ul>
            <li>Kurssi ei ole alkanut.</li>
          </ul>
        )}

        <Kurssi
          nimi="Ohjelmointi Projekti 1"
          handleSelectKurssi={handleSelectKurssi}
          index={4}
          activeIndex={activeIndex}
        />
        {activeIndex === 4 && (
          <ul>
            <li>Kurssi ei ole alkanut.</li>
          </ul>
        )}

        <TutkinnonOsa tut_nimi="Ohjelmistokehittäjänä toimiminen" osp="45" />

        <Kurssi
          nimi="UI/UX Design"
          activeIndex={activeIndex}
          handleSelectKurssi={handleSelectKurssi}
          index={5}
        />
        {activeIndex === 5 && (
          <ul>
            <li>Give me things!</li>
          </ul>
        )}

        <Kurssi
          nimi="SQL ja tietorakenteet"
          activeIndex={activeIndex}
          handleSelectKurssi={handleSelectKurssi}
          index={6}
        />
        {activeIndex === 6 && (
          <ul>
            <li>Give me things!</li>
          </ul>
        )}

        <Kurssi
          nimi="Wordpress-perusteet"
          activeIndex={activeIndex}
          handleSelectKurssi={handleSelectKurssi}
          index={7}
        />
        {activeIndex === 7 && (
          <ul>
            <li>Give me things!</li>
          </ul>
        )}

        <Kurssi
          nimi="Wordpress-jatko"
          activeIndex={activeIndex}
          handleSelectKurssi={handleSelectKurssi}
          index={8}
        />
        {activeIndex === 8 && (
          <ul>
            <li>Kurssi ei ole alkanut.</li>
          </ul>
        )}

        <Kurssi
          nimi="Yksikkötestaus ja CI/CD"
          activeIndex={activeIndex}
          handleSelectKurssi={handleSelectKurssi}
          index={9}
        />
        {activeIndex === 9 && (
          <ul>
            <li>Kurssi ei ole alkanut.</li>
          </ul>
        )}

        <Kurssi
          nimi="Ohjelmointiprojekti 2"
          activeIndex={activeIndex}
          handleSelectKurssi={handleSelectKurssi}
          index={10}
        />
        {activeIndex === 10 && (
          <ul>
            <li>Kurssi ei ole alkanut.</li>
          </ul>
        )}

        <TutkinnonOsa
          tut_nimi="Ohjelmistontoteuttaminen ohjelmistokirjastolla"
          osp="30"
        />

        <Kurssi
          nimi="React-perusteet"
          activeIndex={activeIndex}
          handleSelectKurssi={handleSelectKurssi}
          index={11}
        />
        {activeIndex === 11 && (
          <>
          <h3 className="sisennys-4rem react-tehtava-header">01-Oppimistehtävät</h3>
            <ul>
              <li>
                <a href="https://waltsuuuu.github.io/01-part1/" target="_blank">
                  01-part1
                </a>
              </li>
              <li>
                <a href="https://waltsuuuu.github.io/02-part2/" target="_blank">
                  02-part1
                </a>
              </li>
              <li>
                <a href="https://waltsuuuu.github.io/03-part3/" target="_blank">
                  03-part1
                </a>
              </li>
              <li>
                <a href="https://waltsuuuu.github.io/04-part4/" target="_blank">
                  04-part1
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Waltsuuuu/05-part5/tree/main"
                  target="_blank"
                >
                  01-part2
                </a>
              </li>
            </ul>
            <h3 className="sisennys-4rem react-tehtava-header">
              02-Soveltavat tehtävät
            </h3>
            <ul>
              <li>
                <a
                  href="https://waltsuuuu.github.io/Kurssitiedot/"
                  target="_blank"
                >
                  01-kurssitiedot
                </a>
              </li>
              <li>
                <a href="https://waltsuuuu.github.io/unicafe/" target="_blank">
                  02-unicafe
                </a>
              </li>
              <li>
                <a
                  href="https://waltsuuuu.github.io/anekdootit/"
                  target="_blank"
                >
                  03-anekdootit
                </a>
              </li>
              <li>
                <a
                  href="https://waltsuuuu.github.io/kurssitiedot_part2/"
                  target="_blank"
                >
                  04-kurssitiedot-part2
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Waltsuuuu/puhelinluoettelo"
                  target="_blank"
                >
                  05-puhelinluettelo
                </a>{" "}
                (
                <a href="React-Assignment-Screenshots/phonebook_state1.png" target="_blank">
                  {" "}
                  State 1
                </a>{" "}
                -
                <a href="React-Assignment-Screenshots/phonebook_state2.png" target="_blank">
                  {" "}
                  State 2
                </a>{" "}
                -
                <a href="React-Assignment-Screenshots/phonebook_state3.png" target="_blank">
                  {" "}
                  State 3
                </a>{" "}
                )
              </li>
              <li>
                <a
                  href="https://github.com/Waltsuuuu/country_data/tree/main"
                  target="_blank"
                >
                  06-maiden-tiedot
                </a>{" "}
                (
                <a href="React-Assignment-Screenshots/country-data_state1.png" target="_blank">
                  {" "}
                  State 1
                </a>{" "}
                -
                <a href="React-Assignment-Screenshots/country-data_state2.png" target="_blank">
                  {" "}
                  State 2
                </a>{" "}
                -
                <a href="React-Assignment-Screenshots/country-data_state3.png" target="_blank">
                  {" "}
                  State 3
                </a>{" "}
                )
              </li>
            </ul>
          </>
        )}

        <Kurssi
          nimi="React-jatko"
          activeIndex={activeIndex}
          handleSelectKurssi={handleSelectKurssi}
          index={12}
        />
        {activeIndex === 12 && (
          <ul>
            <li>Kurssi ei ole alkanut.</li>
          </ul>
        )}
      </article>

      <footer>
        <p className="footer-p">
          Waltteri Heino - <a href="https://github.com/Waltsuuuu" target="_blank">GitHub <FontAwesomeIcon icon={faGithub} /></a>
        </p>{" "}
      </footer>
    </>
  );
}

export default App;
