import React from "react";
import img from "./image4.jpg";
import "./Fourth.scss";

export default function Fourth() {
  return (
    <div className="fourth" style={{ display: "grid" }}>
      <div style={{ gridArea: "1/1/2/2" }}>
        <img src={img} alt="place" />
      </div>
      <div className="info" style={{ gridArea: "1/1/2/2" }}>
        <h2 className="orangeText">Sygdom</h2>
        <p>
          Er du blevet syg, så du ikke kan møde op på arbejde, er det vigtigt,
          at du melder dig syg hurtigst muligt. På den måde har din leder en
          chance for evt. at få en anden til at dække din vagt. Sygemelding skal
          ske <span className="thick">telefonisk til din nærmeste leder.</span>{" "}
          Det er derfor <span className="thick">ikke</span> en accepteret
          sygemelding at skrive en mail/SMS/mitføtex/facebook e.lign. I følge
          din overenskomst skal din sygemelding ske senest 1 time før din vagt
          begynder, men meld gerne ind så snart du ved det - af hensyn til dine
          kolleger.
        </p>
        <h2 className="orangeText">Personalemærker</h2>
        <p>
          Medarbejderen (du) har en betalt vare, som også kan købes i varehuset,
          med ind ved mødetidsstart. Du viser ved ankomst varen til kamera i
          omstillingen, så der ikke opstår tvivl om varens ejermand. Du sætter
          <span className="thick">
            ”personaleejendom”-mærkat på varen straks ved ankomst
          </span>
          i omstilling eller kundeservice. Medarbejderhåndbog (s. 8): ”Det er
          altid dit ansvar, at der ikke kan opstå tvivl om, hvorvidt en vare
          tilhører dig eller varehuset.”
        </p>
        <h2 className="orangeText">Medarbejderkøb</h2>
        <p>
          Når en medarbejder (du) køber varer til forbrug i varehuset, skal der
          et <span className="thick">personalekøbsmærke</span> på. Der skal
          udfyldes et mærkat pr vare. Uanset om varen bruges helt eller delvist.
        </p>
        <h2 className="orangeText">Chip</h2>
        <p>
          Din
          <span className="thick">personlige chip må kun bruges af dig</span>,
          og du skal altid benytte denne, når du møder på arbejde og igen, når
          du har fri. Chippen er mere end din personlige ind- og udgang til
          varehuset. Den bruges også til at kunne registrere medarbejdere i
          varehuset. Det kan fx blive nødvendigt at kende antallet af
          medarbejdere i varehuset, hvis der en dag skulle opstå en evakuering.
          Så derfor - <span className="thick">brug altid</span> din egen
          personlige chip. Går du i ”rød”, når du har fri, skal du altid have en
          chef/leder eller lukkeansvarlig til at kontrollere dine evt. køb,
          kvittering, tasker osv. Når alt betegnes som ok, får du lov at forlade
          varehuset.
        </p>
        <h2>Beklædning</h2>
        <p>Du skal naturligvis altid huske disse ting, når du er på arbejde:</p>
        <ul>
          <li>Pæn, vasket og strøget skjorte.</li>
          <li>Mørke busker</li>
          <li>Navneskilt</li>
          <li>
            Ingen shorts (eneste undtagelse er kvinder, som må bære nederdel,
            der går ned over knæene)
          </li>
        </ul>
      </div>
    </div>
  );
}
