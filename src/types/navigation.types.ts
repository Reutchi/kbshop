export interface NavHeaderItems{
    id:number,
    icon:string,
    alt:string,
    link:string
}

export interface NavItemsCategory{
    id:number,
    title:string,
    link:string,
    active: boolean,
    dropdown?:boolean
}

export interface DropdownContent{
    id:number,
    title:string,
    link:string,
}

export interface FooterLink{
    id: number,
    link: string,
    title: string,
}
