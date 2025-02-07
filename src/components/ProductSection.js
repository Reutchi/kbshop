import ProductCard from "@/utils/ProductCard";
const ProductSection = () => {
    const ProductCardItems = [
        {id:1,title:'[GB] Snake60 R2',img:'/keyboard_image.jpg',alt:'keyboard image Snake60 R2 [GB]',link:'/'},
        {id:2,title:'[Pre-order] GT-80',img:'/black_keyboard.webp',alt:'Black keyboard GT-80 compatible with Wooting80 HE',link:'/'},
        {id:3,title:'Agar',img:'/agar.webp',alt:'Keyboard agar white',link:'/'},
        {id:4,title:'KBDfans x MM Gaming',img:'/multicolor_keyboard.webp',alt:'Multi Color Keyboard KBDfans x MM Gaming',link:'/'},
    ]
    return (
        <section className='mt-10 mx-4 md:mx-16'>
            <div className='grid md:grid-cols-2 gap-4'>
                {ProductCardItems.map(({id,title,img,alt,link}) => (
                    <ProductCard key={id} title={title} img={img} alt={alt} link={link}/>
                ))}
            </div>
        </section>
    )
}
export default ProductSection
