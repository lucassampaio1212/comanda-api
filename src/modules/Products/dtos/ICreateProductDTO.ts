interface ICreateProductDTO {
    description: string;
    amount: number;
    situation: string;
    category_id: string;
    id?: string;
}
export default ICreateProductDTO;