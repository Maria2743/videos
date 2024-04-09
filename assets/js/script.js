const miFuncionIIFE = (() => {

    let miFuncionPrivada = (url, idDelElementoHTML) => {

        const iframe = document.getElementById(idDelElementoHTML);
        iframe.setAttribute('src', url);
    }

    return {
        miFuncionPublica: (url, id) => {
            miFuncionPrivada(url, id);
        }
    }


})();


class Multimedia {

    constructor(url) {
        this._url = url;
    }

    get url() {
        return this._url;
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video."
    }
}

class Reproductor extends Multimedia {

    constructor(url, id) {

        super(url)
        this._id = id;

    }

    playMultimedia() {
        miFuncionIIFE.miFuncionPublica(this._url, this._id)
    }

    setInicio(tiempo) {
        //Acá va el poliformismo

        this._id.setAttribute('src', `${this._url}&amp;start=${tiempo}`);
    }

}

let musica = new Reproductor('https://www.youtube.com/embed/FpCtg79PR8M?si=OKG4CR7qTwY8Oln7', 'musica')
let peliculas = new Reproductor('https://www.youtube.com/embed/0Nth2F7KCD8?si=g15DYVek3uGDRyfz', 'peliculas')
let series = new Reproductor('https://www.youtube.com/embed/eWKQoIuW7Hk?si=pAGkJKPql61DNdKv', 'series')

musica.playMultimedia();
peliculas.playMultimedia();

//series.setInicio(30);
series.playMultimedia();


