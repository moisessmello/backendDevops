import express from "express";
import contatos from './data/contatos.mjs';
import { uuid } from 'uuidv4';
const app = express();


//middleware
app.use(express.json());

//GET: /
app.get("/", (req, res) => {
    res.send("<h1>Olá mundo!</h1>");
});

app.get('/contatos', (req, res) => {
    res.status(200).json({
        error: false,
        contatos: contatos
    })
})

app.get('/contatos/:id', (req, res) => {
    const id = req.params.id;
    const contatoBuscado = contatos.filter(item => item.id == id);

    if (!contatoBuscado) {
        return res.status(404).json({
            error: true,
            mensagem: "Contato não encontrado!"
        })
    }
    res.status(200).json({
        error: false,
        contato: contatoBuscado
    })
})

app.post('/contatos', (req, res) => {
    const contato = req.body;
    const { nome, genero, telefone, email } = contato;
    if (!contato) {
        return res.status(404).json({
            error: true,
            mensagem: "Você não enviou nenhuma informação para cadastro!"
        })
    }

    if (!nome || !genero || !telefone || !email) {
        return res.status(404).json({
            error: true,
            mensagem: "Entrada inválida!"
        })
    }

    const verificaEmail = contatos.some(item => item.email == contato.email);

    console.log(verificaEmail)
    if (verificaEmail) {
        return res.status(404).json({
            error: true,
            mensagem: "Email já existente!"
        })
    }

    contatos.push({
        id: uuid(),
        nome: contato.nome,
        genero: contato.genero, 
        telefone: contato.telefone, 
        email: contato.email
    })

    res.status(200).json({
        error: false,
        mensagem: "Contato criado com sucesso!",
        contato: {
            id: uuid(),
            nome: contato.nome,
            genero: contato.genero, 
            telefone: contato.telefone, 
            email: contato.email
        }
    })
})

app.put('/contatos/:id', (req, res) => {
    const id = req.params.id;
    const contatoBuscado = contatos.filter(item => item.id == id);
    console.log(contatoBuscado);
});

app.delete('')

app.listen(3000, '127.0.0.1', () => {
    console.log("Servidor 127.0.0.1:3000 iniciado com sucesso!");
})