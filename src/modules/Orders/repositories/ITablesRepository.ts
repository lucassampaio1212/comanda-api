import Tables from "../infra/typeorm/entities/Tables";


export interface ICreateTableDTO {
    number: number;
    available: boolean;
}

export interface ITablesRepository {
    create({number,available}: ICreateTableDTO):Promise<Tables>;
    findByNumber(number:number):Promise<Tables>;
}
