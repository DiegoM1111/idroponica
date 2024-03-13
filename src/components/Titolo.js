import '../assets/titolo.css';
import '../App.css';
import imgIdroponica from '../assets/idroponica.jpg'

function Titolo() {
    return (
        <div id="titolo">
            <h1>Idroponica</h1>
            
            <div className='container'>
                <div id="imgIdroponica">
                    <img id="img" src={imgIdroponica} alt="idroponica"/>
                </div>
                <a href="https://it.wikipedia.org/wiki/Idroponica"> Pagina Wikipedia sull'idroponica</a>
            </div>
        </div>
    );
}
    
export default Titolo;