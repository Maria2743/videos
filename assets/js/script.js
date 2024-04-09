const miFuncion = (() => {
    console.log("hace algo")
})();


const reproductor = (() => {
    // Función privada para mostrar el video en el documento HTML
    const mostrarVideo = (url, id) => {
        const iframe = document.getElementById(id);
        iframe.setAttribute('src', url);
    };
    // Función pública que realiza el llamado a la función privada para insertar los elementos
    const playMultimedia = (url, id) => {
        mostrarVideo(url, id);
    };
    // Retornar la función pública
    return {
        playMultimedia
    };
})();

