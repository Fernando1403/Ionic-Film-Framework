/* eslint-disable eol-last */
export interface IAtores{
  nome: string;
  nascimento: string;
  idade: string;
  LocalDeNascimento: string;
  foto: string;
  genero: string[];
  pagina?: string; //** a ? indica que o campo nao é obrigatorio*/
  favorito: boolean;
}
