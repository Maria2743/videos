const miFuncionIIFE = (() => {

    let miFuncionPrivada = (url, idDelElementoHTML) => {

        const iframe = document.getElementsById(idDelElementoHTML);
        iframe.setAttribute('src', url);
    }

    return {
        miFuncionPublica: (url, id) => {
            miFuncionPublica(url, id);
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

