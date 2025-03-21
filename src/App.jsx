
import galaxyAi from "./assets/galaxy-ai.jpg";
import imgGalaxyPrincipal from "./assets/galaxy-s25-ultra-features-kv-g.jpg"
import titanioUltrafuerte from "./assets/galaxy-s25-ultra-features-durability-titanium.jpg";
import elVidrioMasResistente from "./assets/galaxy-s25-ultra-features-durability-glass.jpg";

function CardsGreen(props) {
  return (
    <div>
      <img src={props.src}alt="..." srcset="" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}

function Cardsblue(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h4>{props.porcent}</h4>
      <p>{props.description}</p>
    </div>
  )
}


function App() {
  return (
    <>
    <section className="contenedor">
      <header >
        <h1>Galaxy S25 Ultra</h1>
       <img src={galaxyAi} alt="" />
      </header>
      <section className='imag-principal'>
        <img src={imgGalaxyPrincipal}  alt="" srcset="" />
      </section>
     <section className="cardsgreen">
        <CardsGreen src={titanioUltrafuerte} title="Titanio ultrafuerte" description="Apantallado en un resistente marco de titanio, tu Galaxy S25 Ultra siempre permanece protegido." />
       <CardsGreen src={elVidrioMasResistente} title="El vidrio más resistente de los Galaxy" description="Reforzado por nuestro duradero vidrio Corning® Gorilla® Armor 2 listo para proteger tu Galaxy.7" />
      </section>
      <section className="cardsblue">
        <Cardsblue  title="CPU" porcent="37%" description="Procesamiento más raáido" />
        <Cardsblue  title="GPU" porcent="30%" description="Rendimiento gráfico mejorado" />
      </section>
    </section>
    </>
  )
}

export default App
