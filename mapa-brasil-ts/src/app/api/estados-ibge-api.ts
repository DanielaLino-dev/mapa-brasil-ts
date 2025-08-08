// Importa os tipos de requisição e resposta da API do Next.js
import type { NextApiRequest, NextApiResponse } from "next";


//URL da API do IBGE
const baseUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';


export interface IBGECidade { 
  id: number; 
  nome: string
 }

//Interface para tipagem das propriedades passadas para o api
export interface IUfProps {
  uf: string;
}

// Função exportada como handler da API, será executada quando a rota for acessada
export const getCidades = async ({ uf }: IUfProps): Promise<IBGECidade[]> => {
  if (!uf) throw new Error("UF é obrigatória");

  const res = await fetch(`${baseUrl}/${uf}/municipios`, { cache: 'no-cache' });
  if (!res.ok) throw new Error(`IBGE retornou status ${res.status}`);

  const data = await res.json();
  if (!Array.isArray(data)) throw new Error("Resposta inesperada da API");
  return data as IBGECidade[];
};
export const getEstados = async ({ uf }: IUfProps): Promise<[] | void> => {
  const res = await fetch(`${baseUrl}/${uf}/municipios`, { cache: 'no-cache' });
  const data = await res.json();
  return data;
};