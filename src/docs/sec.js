import React from "react";
import img from "./image2.jpg";
import "./sec.scss";

export default function Sec() {
  return (
    <div className="sec" style={{ display: "grid" }}>
      <div style={{ gridArea: "1/1/2/2" }}>
        <img src={img} alt="bg" />
      </div>
      <div
        style={{
          gridArea: "1/1/2/2",
          margin: "15em 0 0 0",
          paddingLeft: "7em",
          paddingRight: "7em",
        }}
        className="page2"
      >
        <h1 style={{ color: "#d36360", fontSize: "1.5em" }}>
          Pre- og onboarding samt intro til Skills i Mit Føtex
        </h1>
        <p>
          Når man får et nyt arbejde, er der rigtig meget nyt at lære og mange
          nye mennesker, du skal møde. Det vil vi selvfølgelig gerne hjælpe dig
          med. Så vi har i Salling Group gjort det nemt for dig at få viden om
          dit nye arbejde - gennem vores medarbejder-app mitføtex under Skills
        </p>
        <br />
        <p>I Skills bliver du mødt af to kurser</p>
        <p>
          <strong>Preboarding: </strong>
          Her får du viden om Salling Group generelt
        </p>
        <p>
          <strong>Onboarding: </strong>
          Her får du vigtig viden om dit ansættelsesforhold
        </p>
        <br />
        <p>
          Vi forventer, at begge kurser er taget, før du møder op til første
          oplæringsvagt i egen afdeling.
        </p>
        <br />
        <p>
          Når du har taget de to kurser, vil du blive introduceret grundigt til
          din egen afdeling. Her vil du blandt andet lære om kundeservice,
          rutiner og få indblik i sortimentet. Alle disse ting er vigtige for
          os, da det sikrer, at vores kunder har lyst til at handle hos os igen
          og igen.
        </p>
        <br />
        <p>
          Foruden træningen i Skills skal du også igennem følgende træning i
          varehuset:
        </p>
        <p>
          <strong>Første dag på job:</strong> ____dag den ___ kl __:__
        </p>
        <p>
          Du bliver præsenteret for varehuset, vores kundeservice samt
          færdselsregler af en kollega
        </p>
        <p>
          <strong>2½ måneds-samtale:</strong> ____dag den ___ kl __:__
        </p>
        <p>
          Her vil du sammen med din leder evaluere på din første tid i jobbet og
          aftale, hvad der skal ske fremadrettet
        </p>
        <p>
          <strong>Servicemøde</strong> ____dag den ___ kl __:__
        </p>
        <p>
          Varehuschefen fortæller lidt om strategi, forventninger til dig som
          ansat samt kendskab til god og korrekt kundeservice
        </p>
      </div>
    </div>
  );
}
