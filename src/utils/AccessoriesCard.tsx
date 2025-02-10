import React from "react";

interface AccessoriesCardProps{
    img:string,
    alt:string,
    title:string,
    link:string,
    isVisible:boolean,
    delay:number,
}
const AccessoriesCard: React.FC<AccessoriesCardProps> = ({img,alt,title,link,isVisible,delay}) => {
    return (
        <article
            className={`transition-all duration-700 ease-out cursor-pointer group overflow-hidden relative rounded-xl
                ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-md'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <figure className='transition-transform duration-300  group-hover:scale-105'>
                <img className='object-cover  w-[800px] h-[360px]' src={img} alt={alt}/>
            </figure>
            <div className='border-black rounded-xl bg-[rgba(255,255,255,0.2)] flex justify-center items-center flex-col w-10/12 h-10/12 text-center space-y-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                <h4 className='text-4xl text-white'>{title}</h4>
                <a className='shadow-2xl transition duration-150 ease-in-out hover:scale-110 bg-black text-white text-sm py-3 px-12 rounded-md' href={link}>More</a>
            </div>
        </article>
    )
}
export default AccessoriesCard
