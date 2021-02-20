const fetch=require("node-fetch");

const API = (() => {

    const fetchBlobImage = () => {
        const url = "";
        return fetch(url)
            .then((response) => response.blob)
            .then((blob) => processImage(blob));
    }

    const processImage = (blob) => {
        return JSON.stringify(blob);
    }
    module.exports = {
        fetchBlobImage,
        processImage
    }

})();