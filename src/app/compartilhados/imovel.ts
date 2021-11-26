// criando modelo dos dados

export class Imovel {
    bairro!: string;
    cep!: string;
    cidade!: string;
    fachada!: string;
    location!: Location;
    nome!: string;
    num!: number;
    rua!: string;
    planta!: Planta;
}

export class Location {
    _lat!: number;
    _long!: number;
}

export class Planta {
    dorms!: number;
    metragem!: number;
    preco!: number;
    vagas!: number;
}