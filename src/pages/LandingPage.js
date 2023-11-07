import { useRef, useState } from "react";
import "../App.css";
import First from "../docs/first.js";
import { useReactToPrint } from "react-to-print";
import Sec from "../docs/sec";
import Third from "../docs/Third";
import Fourth from "../docs/Fourth";
import Fifth from "../docs/Fifth";

export default function LandingPage() {
  const [medarbejderNavn, setMedarbejderNavn] = useState("");
  const [medarbejderLøn, setMedarbejderLøn] = useState();
  const [closestLeader, setClosestLeader] = useState("Nesrin Gür");
  const [afdeling, setAfdeling] = useState("Service");
  const [closestLeaderNumber, setClosestLeaderNumber] = useState("47 12 50 00");

  const printstuff = useRef();
  const handlePrint = useReactToPrint({
    content: () => printstuff.current,
    documentTitle: "Velkomstbrev",
    onAfterPrint: () => alert("yay"),
  });

  function changeDepartment(e) {
    e.preventDefault();

    if (e.target.value === "1") {
      setClosestLeader("Nesrin Gür");
      setClosestLeaderNumber("47 12 50 00");
      setAfdeling("Service");
    }
    if (e.target.value === "2") {
      setClosestLeader("Dorthe Johnbeck");
      setClosestLeaderNumber("47 12 50 00");
      setAfdeling("Nonfood");
    }
    if (e.target.value === "3") {
      setClosestLeader("Lise Holst");
      setClosestLeaderNumber("47 12 50 00");
      setAfdeling("Frugt og grønt");
    }
    if (e.target.value === "4") {
      setClosestLeader("Mikkel Abild Witt");
      setClosestLeaderNumber("47 12 50 00");
      setAfdeling("Slagter / Deli");
    }
    if (e.target.value === "5") {
      setClosestLeader("Anja Christiansen");
      setClosestLeaderNumber("47 12 50 00");
      setAfdeling("Food");
    }
  }

  return (
    <div className="App">
      <h3>Lidt info om den nye medarbejder</h3>
      <form>
        <div>
          <label>Navn: </label>
          <input
            type="text"
            onBlur={(e) => setMedarbejderNavn(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Lønnummer: </label>
          <input
            type="number"
            onBlur={(e) => setMedarbejderLøn(parseInt(e.target.value))}
            required
          />
        </div>

        <div>
          <label>Afdeling: </label>
          <select onChange={(e) => changeDepartment(e)}>
            <option value="1">Service</option>
            <option value="2">Nonfood</option>
            <option value="3">Frugt & Grønt</option>
            <option value="4">Slagter / deli</option>
            <option value="5">Food</option>
          </select>
        </div>

        <br />
      </form>

      <p>Husk at vælg print ulige sider</p>
      <button onClick={handlePrint}>Print med de valgte info</button>

      <div
        style={{
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
        }}
        ref={printstuff}
      >
        <First
          leader={closestLeader}
          leaderNumber={closestLeaderNumber}
          lønnummer={medarbejderLøn}
          navn={medarbejderNavn}
        />
        <Sec />
        <Third
          navn={medarbejderNavn}
          lønnummer={medarbejderLøn}
          afdeling={afdeling}
        />
        <Fourth />
        <Fifth navn={medarbejderNavn} />
      </div>
    </div>
  );
}
