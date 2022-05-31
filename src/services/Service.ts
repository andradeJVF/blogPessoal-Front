import axios from "axios";

export const api = axios.create({
    baseURL: 'https://blogpessoaljvfa.herokuapp.com'
})

export const cadastroUsuario = async (url: any, dados: any, sedDado: any) => {
    const resposta = await api.post(url, dados)
    sedDado(resposta.data)
}

export const login = async (url: any, dados: any, sedDado: any) => {
    const resposta = await api.post(url, dados)
    sedDado(resposta.data.token)
}