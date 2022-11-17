export class Produto {
  id?: number;
  logo: string;
  nome: string;
  localizacao: string;
  avaliacao: number;
  contato: string;

  constructor(
      logo: string,
      nome: string,
      localizacao: string,
      avaliacao: number,
      contato: string
  ) {
    this.logo = logo;
    this.nome = nome;
    this.localizacao = localizacao;
    this.avaliacao = avaliacao;
    this.contato = contato;
  }


}
