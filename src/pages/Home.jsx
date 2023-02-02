import imagenTorta from '../assets/torta.png';

const Home = () => {
    return(
      <div className="welcome">
        <h1>Bienvenido a Happy Cake</h1>
        <p>El lugar de los pasteles felices</p>
        <img  className="imagen-torta"src={imagenTorta} alt=""/>       
      </div>
    )
}
export default Home