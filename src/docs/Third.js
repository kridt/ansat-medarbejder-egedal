import React from "react";
import "./Third.scss";
import img from "./image3.jpg";

export default function Third({ navn, lønnummer, afdeling }) {
  return (
    <div className="third" style={{ display: "grid" }}>
      <div style={{ gridArea: "1/1/2/2" }}>
        <img src={img} alt="place" />
      </div>
      <div className="info" style={{ gridArea: "1/1/2/2" }}>
        <p>
          <span className="orangeText">Navn: </span>
          {navn}
        </p>
        <p>
          <span className="orangeText">Afdeling: </span>
          {afdeling}
        </p>
        <p>
          <span className="orangeText">Lønnummer/personID: </span>
          {lønnummer}
        </p>
        <br />
        <br />
        <div>
          <ol style={{ fontWeight: "bold" }}>
            <li>
              <p>Oplæringsvagt</p>
              <div style={{ fontWeight: "normal" }}>
                <p>Dato og Klokkeslæt: ___dag den ___/___-____ kl. ___:___ </p>
                <p>Trainer: </p>
              </div>
            </li>
            <br />
            <li>
              <p>Oplæringsvagt</p>
              <div style={{ fontWeight: "normal" }}>
                <p>Dato og Klokkeslæt: ___dag den ___/___-____ kl. ___:___ </p>
                <p>Trainer: </p>
              </div>
            </li>
            <br />
            <li>
              <p>Oplæringsvagt</p>
              <div style={{ fontWeight: "normal" }}>
                <p>Dato og Klokkeslæt: ___dag den ___/___-____ kl. ___:___ </p>
                <p>Trainer: </p>
              </div>
            </li>
          </ol>
        </div>
        <br />
        <br />
        <br />
        <p>
          Din vagtplan er også tilgængelig i appen ”UKGworkforce”, hvor du altid
          kan se din vagtplan 16 uger frem.
        </p>
        <br />
        <br />
        <br />
        <p className="orangeText">Husk</p>
        <p>
          Benyt personaleindgangen og mød til tiden, så alle får en god
          oplevelse.
        </p>
      </div>
    </div>
  );
}
