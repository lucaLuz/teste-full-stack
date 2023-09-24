import React, { useEffect, useState } from 'react';
import { buscarCervejas } from './Catalogo.sevice';
import './Catalogo.css';
import { Cerveja } from '../../Interface/ICerveja';
import Navbar from './Navbar/Navbar';
import c1 from '../../img/American Ale.svg';
import c2 from '../../img/Pilsen Lager.svg';
import c3 from '../../img/French Saison.svg';
import c4 from '../../img/Belgian Ardennes.svg';
import c5 from '../../img/Saflager.svg';
import c6 from '../../img/American Ale II.svg';
import c7 from '../../img/German Wheat.svg';
import c8 from '../../img/Bavarian Wheat.svg';
import up from '../../img/up.svg';
import { Banner } from './Banner/Banner';
import pesquisaimg from '../../img/pesquisa.svg';
import Footer from './Footer/Footer';

const Catalogo = () => {

    const [cervejasExibidas, setCervejasExibidas] = useState<Cerveja[]>([]);
    const [pesquisa, setPesquisa] = useState('');
    const [pagina, setPagina] = useState(1);


    const imagensDeLevedura: { [key: string]: string } = {
        "Wyeast 1056 - American Ale™": c1,
        "Wyeast 2007 - Pilsen Lager™": c2,
        "Wyeast 3711 - French Saison™": c3,
        "Wyeast 3522 - Belgian Ardennes™": c4,
        "Saflager S189": c5,
        "Wyeast 1272 - American Ale II™": c6,
        "Wyeast 3333 - German Wheat™": c7,
        "Wyeast 3638 - Bavarian Wheat™": c8
    };


    useEffect(() => {
        const fetch = async () => {
            const cervejas = await buscarCervejas(pagina, pesquisa);
            setCervejasExibidas(cervejas);
        };

        fetch();
    }, [pagina, pesquisa]);


    return (
        <>
            <Navbar />
            <Banner />
                <div className='pesquisa'>
                    <input type="text" value={pesquisa} onChange={e => setPesquisa(e.target.value)} placeholder="Pesquisar cervejas..." />
                    <img src={pesquisaimg} alt="" />
                </div>
            <div className="catalogo">
                <button className='topo-btn' onClick={() => window.scrollTo(0, 0)}> <img src={up} alt="" /> </button>
                <div className='cerveja-container'>
                    {cervejasExibidas.map(cerveja => (
                        <div key={cerveja.id} className='cerveja-item'>
                            <div className='retangulo'>
                                <img src={cerveja.image_url} alt={cerveja.name} className="imagem-cerveja" />
                                <div className="conteudo-cerveja">
                                    <h2 className="nome-cerveja">{cerveja.name}</h2>
                                    <p className='teor-alcolico'>ABV:{cerveja.abv}</p>
                                </div>
                                <img className='tipo-cerveja' src={imagensDeLevedura[cerveja.ingredients.yeast]} alt={cerveja.ingredients.yeast} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className='paginacao'>
                <button onClick={() => setPagina(pagina - 1)} disabled={pagina === 1}>Anterior</button>
                <button onClick={() => setPagina(pagina + 1)}>Próximo</button>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Catalogo;
