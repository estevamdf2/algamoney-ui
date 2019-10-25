export class Pessoa{
    codigo: number;
    nome: string
    // endereco = new Endereco();
    ativo: boolean;
}

export class Categoria{
    codigo: number
    nome: string
}

export class Endereco{
    logradouro: string;
    numero: string;
    complemento: String;


}

export class Lancamento{
    codigo: number;
    tipo: string = 'RECEITA';
    descricao: string;
    dataVencimento: Date;
    dataPagamento: Date;
    valor: number;
    observacao: string;
    pessoa = new Pessoa();
    categoria = new Categoria();
}