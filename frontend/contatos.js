import config from "./config.json"

async function getcontatos() {
    

    const response = await fetch(`http://${config.HOST}:${config.PORT}`);
    const contatos = response await response.json();
}