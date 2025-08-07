// Importa os tipos de requisição e resposta da API do Next.js
import type { NextApiRequest, NextApiResponse } from "next";


//URL da API do IBGE
const baseUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

//Interface para tipagem das propriedades passadas para o api
interface ufProps{
  uf:string;
}

// Função exportada como handler da API, será executada quando a rota for acessada
const getCidades = async ({uf}: ufProps): Promise<[]|void> => {

  const res = await fetch(`${baseUrl}/${uf}/municipios`, {cache:'no-cache'})

  if (!uf) {
    // return res.status(400).json({ error: "UF é obrigatória na query." });
  }


  try {
    //Faz a requisição para a API do IBGE usando a URL criada
    const data = await res.json();

    //Retorna os dados com sucesso
    res.statusText
    console.log(res.status, data)
  } catch (error) {
    //Em caso de erro na requisição
    // res.status(500).json({ error: "Erro ao buscar as cidades dessa UF." });
  }
}

