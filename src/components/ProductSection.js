'use client'
import ProductCard from "@/utils/ProductCard";
import {useState} from "react";
const ProductSection = () => {
    const productCardItems = [
        {id:1,title:'[GB] Snake60 R2',img:'/keyboard_image.jpg',alt:'keyboard image Snake60 R2 [GB]',link:'/'},
        {id:2,title:'[Pre-order] GT-80',img:'/black_keyboard.webp',alt:'Black keyboard GT-80 compatible with Wooting80 HE',link:'/'},
        {id:3,title:'Agar',img:'/agar.webp',alt:'Keyboard agar white',link:'/'},
        {id:4,title:'KBDfans x MM Gaming',img:'/multicolor_keyboard.webp',alt:'Multi Color Keyboard KBDfans x MM Gaming',link:'/'},
    ]
    const [activeCarouselId, setActiveCarouselId] = useState(1)
    const handleCarousel = (id) => setActiveCarouselId(id)

    return (
        <section className='mt-10 mx-4 md:mx-16'>
            <div className='hidden md:grid md:grid-cols-2 gap-4'>
                {productCardItems.map(({id,title,img,alt,link}) => (
                    <ProductCard key={id} title={title} img={img} alt={alt} link={link}/>
                ))}
            </div>
            <div className='md:hidden'>
                <div className='overflow-hidden relative'>
                    <div className='flex transition-transform duration-500' style={{ transform: `translateX(-${activeCarouselId * 100}%)` }}>
                        {productCardItems.map(({ id, title, img, alt, link }) => (
                            <div key={id} className='min-w-full'>
                                <ProductCard title={title} img={img} alt={alt} link={link} />
                            </div>
                        ))}
                    </div>
                </div>
                <ul className='flex justify-center items-start gap-3 mt-2'>
                    {productCardItems.map((_, idx) => (
                        <li
                            key={idx}
                            onClick={(ev) => handleCarousel(idx)}
                            className={`${activeCarouselId === idx ? 'border-2 border-gray-500 w-2.5 h-2.5' : 'bg-gray-400'} cursor-pointer w-2 h-2 rounded-full transition duration-500`}
                        ></li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
export default ProductSection
