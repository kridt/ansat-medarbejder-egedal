import React from "react";
import img from "./image5.jpg";
import "./Fifth.scss";

export default function Fifth({ navn }) {
  return (
    <div className="fifth" style={{ display: "grid" }}>
      <div style={{ gridArea: "1/1/2/2" }}>
        <img src={img} alt="bg" />
      </div>
      <div style={{ gridArea: "1/1/2/2" }} className="info">
        <h2 className="orangeText">
          Vi har i føtex Albertslund været så heldige at få dit barn med ombord
        </h2>
        <p>
          Vi er utrolig glade for, at {navn} har takket ja til et job hos os -
          og vi glæder os rigtig meget til det fremtidige samarbejde
        </p>
        <br />
        <p>
          Som en del af ansættelsen i Føtex, vil vi naturligvis sikre en god og
          tryg start i jobbet
        </p>
        <br />
        <p className="thick">Det gør vi bl.a ved at:</p>
        <ul>
          <li>
            Sørge for en god oplæring i varehuset via en Trainer, som bliver en
            ”buddy”, man kan gå til ved spørgsmål eller lignende
          </li>
          <li>Informere om fælles strategi i varehuset</li>
          <li>Uddanne vores ansatte i at håndtere konflikter</li>
          <li>
            Sørge for at man får et stort og bredt kendskab til varehusets andre
            ansatte
          </li>
          <li>Den nye medarbejder bliver en del af Føtex's fællesskab</li>
        </ul>
        <p className="thick">I føtex er nogle af vores kerneværdier:</p>
        <ul>
          <li>Sund medarbejdertrivsel</li>
          <li>God kundeservice</li>
          <li>Godt arbejdsmiljø</li>
          <li>Vi løfter i flok</li>
        </ul>
        <p>
          I forbindelse med ansættelsen, har vi også store forventninger til, at
          alle nye medarbejdere engagerer sig i det nye job og gerne vil tilegne
          sig viden i dagligdagen, så vi alle sammen hver dag arbejder på at
          blive endnu bedre.
        </p>
        <br />
        <h2 className="orangeText">Spørgsmål</h2>
        <p>
          Skulle I have nogle spørgsmål, er I meget velkomne til at skrive til
          mig på mail:
          <br />
          <strong>kirstine.andersen@foetex.dk</strong>
        </p>
        <br />
        <p>Med venlig hilsen</p>
        <br />
        <p>Kirstine Andersen</p>
        <p>Service- og personalechef</p>
      </div>
    </div>
  );
}
