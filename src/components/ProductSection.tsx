'use client'
import ProductCard from "../utils/ProductCard";
import {useState} from "react";
const ProductSection = () => {
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)
    const [activeCarouselId, setActiveCarouselId] = useState(0)

    const productCardItems = [
        {id:1,title:'[GB] Snake60 R2',img:'/keyboard_image.jpg',alt:'keyboard image Snake60 R2 [GB]',link:'/'},
        {id:2,title:'[Pre-order] GT-80',img:'/black_keyboard.webp',alt:'Black keyboard GT-80 compatible with Wooting80 HE',link:'/'},
        {id:3,title:'Agar',img:'/agar.webp',alt:'Keyboard agar white',link:'/'},
        {id:4,title:'KBDfans x MM Gaming',img:'/multicolor_keyboard.webp',alt:'Multi Color Keyboard KBDfans x MM Gaming',link:'/'},
    ]
    const handleCarousel = (id) => setActiveCarouselId(id)

    const minSwipeDistance = 50

    const onTouchStart = (e) => {
        setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        const maxCarouselId = productCardItems.length - 1; // Ultimul index valid
        const firstIdCarousel = 0; // Primul index valid

        if (isLeftSwipe || isRightSwipe) {
            if (isLeftSwipe) {
                // Dacă suntem la ultima imagine, revenim la prima, altfel mergem înainte
                setActiveCarouselId(activeCarouselId === maxCarouselId ? firstIdCarousel : activeCarouselId + 1);
            } else if (isRightSwipe) {
                // Dacă suntem la prima imagine, revenim la ultima, altfel mergem înapoi
                setActiveCarouselId(activeCarouselId === firstIdCarousel ? maxCarouselId : activeCarouselId - 1);
            }
        }
    };



    return (
        <section className='mt-10 mx-4 md:mx-16'>
            <div className='hidden md:grid md:grid-cols-2 gap-4'>
                {productCardItems.map(({id,title,img,alt,link}) => (
                    <ProductCard key={id} title={title} img={img} alt={alt} link={link}/>
                ))}
            </div>
            <div className='md:hidden'>
                <div className='overflow-hidden relative'>
                    <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className='flex transition-transform duration-500' style={{ transform: `translateX(-${activeCarouselId * 100}%)` }}>
                        {productCardItems.map(({ id, title, img, alt, link }) => (
                            <div key={id} className='min-w-full'>
                                <ProductCard title={title} img={img} alt={alt} link={link} />
                            </div>
                        ))}
                    </div>
                </div>
                <ul className='flex justify-center items-start gap-3 mt-4'>
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
