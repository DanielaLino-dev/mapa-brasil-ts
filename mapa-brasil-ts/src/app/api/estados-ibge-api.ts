// Importa os tipos de requisição e resposta da API do Next.js
import type { NextApiRequest, NextApiResponse } from "next";

// Tipagem da resposta para melhor controle e autocomplete
type ErrorResponse = {
  error: string;
};

// Função exportada como handler da API, será executada quando a rota for acessada
export default async function handler(
  req: NextApiRequest,                
  res: NextApiResponse<any | ErrorResponse> // Pode ser um array de cidades ou um erro
) {
  const uf = req.query.uf as string;

  if (!uf) {
    return res.status(400).json({ error: "UF é obrigatória na query." });
  }

  //URL da API do IBGE
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;

  try {
    //Faz a requisição para a API do IBGE usando a URL criada
    const response = await fetch(url);
    const data = await response.json();

    //Retorna os dados com sucesso
    res.status(200).json(data);
  } catch (error) {
    //Em caso de erro na requisição
    res.status(500).json({ error: "Erro ao buscar as cidades dessa UF." });
  }
}

