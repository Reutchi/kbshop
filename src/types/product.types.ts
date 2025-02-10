
export interface productCardType{
    id:number,
    title:string,
    img:string,
    alt:string,
    link:string,
}

export interface mainCardProduct{
    id:number,
    title:string,
    price:number,
    images: {
        default:string,
        hover:string
    }
    link:string,
    alt:string,
}

export interface accessoriesCardProduct{
    id:number,
    title:string,
    link:string,
    alt:string,
    img:string,
}
