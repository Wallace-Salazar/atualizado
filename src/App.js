//Crie um component de class
//Crie um array de objetos no STATE com pelo menos 6 objetos
//Faça um map do seu state e exiba os dados na tela

import "./styles.css";
import React, { Component } from "react";

import ahri from "./img/ahri.jpg";
import akali from "./img/akali.png";
import ekko from "./img/ekko.jpg";
import ezreal from "./img/ezreal.jpg";
import fiddle from "./img/fiddle.jpg";
import gwen from "./img/gwen.jpg";
import janna from "./img/janna.jpg";
import jinx from "./img/jinx.jpg";
import kaisa from "./img/kaisa.jpg";
import lux from "./img/lux.jpg";
import lulu from "./img/lulu.jpg";
import missfortune from "./img/missfortune.jpg";
import morgana from "./img/morgana.jpg";
import neeklo from "./img/neeklo.jpg";
import nilah from "./img/nilah.jpg";
import oriana from "./img/oriana.jpg";
import poppy from "./img/poppy.jpg";
import quinn from "./img/quinn.jpg";
import rakan from "./img/rakan.jpg";
import rell from "./img/rell.jpg";
import senna from "./img/senna.jpg";
import seraphine from "./img/seraphine.jpg";
import sona from "./img/sona.jpg";
import soraka from "./img/soraka.jpg";
import syndra from "./img/syndra.jpg";
import taliyah from "./img/taliyah.jpg";
import xayah from "./img/xayah.jpg";
import zoe from "./img/zoe.jpg";

class App extends Component {
  state = {
    characters: [
      {
        id: 1,
        Name: "Ahri",
        Especialidade: "Encanto",
        Familiar: "Kiko",
        Classificação: "Mago",
        img: ahri
      },
      {
        id: 2,
        Name: "Akali",
        Especialidade: "Armamento",
        Familiar: "Umi",
        Classificação: "Lutador/Mago",
        img: akali
      },
      {
        id: 3,
        Name: "Ekko",
        Especialidade: "Manipulação do Tempo",
        Familiar: "Waku",
        Classificação: "Lutador",
        img: ekko
      },
      {
        id: 4,
        Name: "Ezreal",
        Especialidade: "Magia Arcana",
        Familiar: "Yuuto",
        Classificação: "Atirador",
        img: ezreal
      },
      {
        id: 5,
        Name: "Fiddlesticks",
        Especialidade: "Violencia",
        Familiar: "Geist",
        Classificação: "Lutador",
        img: fiddle
      },
      {
        id: 6,
        Name: "Gwen",
        Especialidade: "Fatiar e Picar",
        Familiar: "Tai",
        Classificação: "Lutador",
        img: gwen
      },
      {
        id: 7,
        Name: "Janna",
        Especialidade: "Magia do Ar",
        Familiar: "Zéfiro",
        Classificação: "Suporte",
        img: janna
      },
      {
        id: 8,
        Name: "Jinx",
        Especialidade: "Armas Pesadas",
        Familiar: "Kuro e Shiro",
        Classificação: "Atirador",
        img: jinx
      },
      {
        id: 9,
        Name: "Kai'sa",
        Especialidade: "Tiro Certeiro e Liderança",
        Familiar: "Em Um",
        Classificação: "Atirador",
        img: kaisa
      },
      {
        id: 10,
        Name: "Lux",
        Especialidade: "Potência da Luz",
        Familiar: "Cajado Radiante",
        Classificação: "Suporte",
        img: lux
      },
      {
        id: 11,
        Name: "Lulu",
        Especialidade: "Feitiçaria Feérica",
        Familiar: "Pix",
        Classificação: "Suporte",
        img: lulu
      },
      {
        id: 12,
        Name: "Miss Fortune",
        Especialidade: "Armas de Fogo",
        Familiar: "Boke e Baki",
        Classificação: "Atirador",
        img: missfortune
      },
      {
        id: 13,
        Name: "Morgana",
        Especialidade: "Rainha das Trevas",
        Familiar: "Rigel",
        Classificação: "Suporte",
        img: morgana
      },
      {
        id: 14,
        Name: "Neeko",
        Especialidade: "Magia de Transformação",
        Familiar: "Towa",
        Classificação: "Suporte",
        img: neeklo
      },
      {
        id: 15,
        Name: "Nilah",
        Especialidade: "Matança de Gigantes",
        Familiar: "Dália",
        Classificação: "Lutador",
        img: nilah
      },
      {
        id: 16,
        Name: "Oriana",
        Especialidade: "Análise de Campo de Batalha",
        Familiar: "Tocker",
        Classificação: "Suporte",
        img: oriana
      },
      {
        id: 17,
        Name: "Poppy",
        Especialidade: "armas Cegas",
        Familiar: "Martelo de Luz",
        Classificação: "Lutador",
        img: poppy
      },
      {
        id: 18,
        Name: "Quiin",
        Especialidade: "Reconhecimento Aéreo",
        Familiar: "Valentia",
        Classificação: "Lutador",
        img: quinn
      },
      {
        id: 19,
        Name: "Rakan",
        Especialidade: "magia do Caos",
        Familiar: "Riku",
        Classificação: "Suporte",
        img: rakan
      },
      {
        id: 20,
        Name: "Rell",
        Especialidade: "Cavalaria Blindada",
        Familiar: "Sébastien",
        Classificação: "Lutador",
        img: rell
      },
      {
        id: 21,
        Name: "Senna",
        Especialidade: "Artilharia",
        Familiar: "Giru",
        Classificação: "suporte",
        img: senna
      },
      {
        id: 22,
        Name: "Seraphine",
        Especialidade: "Psicoacústica",
        Familiar: "Agudos e Graves",
        Classificação: "Suporte",
        img: seraphine
      },
      {
        id: 23,
        Name: "Sona",
        Especialidade: "Ondas de Choque Sônicas",
        Familiar: "Chiizu",
        Classificação: "Suporte",
        img: sona
      },
      {
        id: 24,
        Name: "Soraka",
        Especialidade: "Magia Restauradora",
        Familiar: "Shisa",
        Classificação: "Suporte",
        img: soraka
      },
      {
        id: 25,
        Name: "Syndra",
        Especialidade: "Magia Negra",
        Familiar: "Multi",
        Classificação: "Mago",
        img: syndra
      },
      {
        id: 26,
        Name: "Taliyah",
        Especialidade: "Magia da Terra",
        Familiar: "Aru",
        Classificação: "Mago",
        img: taliyah
      },
      {
        id: 27,
        Name: "Xayah",
        Especialidade: "Magia Estelar",
        Familiar: "Saquê",
        Classificação: "Atirador",
        img: xayah
      },
      {
        id: 28,
        Name: "Zoe",
        Especialidade: "Estrela do Crepúsculo",
        Familiar: "Correu",
        Classificação: "Maga",
        img: zoe
      }
    ]
  };

  render() {
    return (
      <section>
        <h1>Guardiãs Estelares</h1>
        <div>
          {this.state.characters.map((item) => (
            <div className="container">
              <figure className="foto">
                <img src={item.img} alt="Skin" />
              </figure>
              <ul key={item.id} className="info">
                <li>| Nome: {item.Name}. |</li>
                <li>Familiar: {item.Familiar}. |</li>
                <li>Competência: {item.Especialidade}. |</li>
                <li>Classe: {item.Classificação}. |</li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
