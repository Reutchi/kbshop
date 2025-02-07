import Image from 'next/image'
const ProductCard = ({ title, img, alt, link }) => {
    return (
            <article className='relative cursor-pointer flex justify-center items-end  rounded-xl group overflow-hidden'>
                <figure className='transition-transform duration-300  group-hover:scale-105'>
                    <Image
                        width='700'
                        height='0'
                        priority
                        className='h-full md:h-[350px] w-[700px]'
                        alt={alt}
                        src={img}
                    />
                </figure>
                <div className='absolute bottom-8 flex justify-center flex-col'>
                    <h3 className='text-4xl text-white'>{title}</h3>
                    <a href={link} className='text-center text-white underline'>Buy now</a>
                </div>
            </article>
    );
};
export default ProductCard;

