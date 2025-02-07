'use client'
import NewArrivalCard from "@/utils/NewArrivalCard";
import useIsVisible from "@/hooks/useIsVisible";
import Icons from "@/utils/icons";

const NewArrivalSection = () => {
    const [targetRef, isVisible] = useIsVisible(0.2);

    const newArrivalItems = [
        {
            id: 1,
            title: '[GB] Snake60 R2',
            price: '350.00',
            images: {
                default: '/assetsnewarrival/v0.webp',
                hover: '/assetsnewarrival/v1.webp'
            },
            link: '/'
        },
        {
            id: 2,
            title: '[GB] Keycult No. 1/1800 Darling Edition',
            price: '495.00',
            images: {
                default: '/assetsnewarrival/v3.webp',
                hover: '/assetsnewarrival/v4.webp'
            },
            link: '/'
        },
        {
            id: 3,
            title: 'KBDFans x MM He Gaming Keyboard Kit',
            price: '80.00',
            images: {
                default: '/assetsnewarrival/v5.webp',
                hover: '/assetsnewarrival/v6.webp'
            },
            link: '/'
        },
        {
            id: 4,
            title: '[Pre-order] Command 65',
            price: '99.00',
            images: {
                default: '/assetsnewarrival/v7.webp',
                hover: '/assetsnewarrival/v8.webp'
            },
            link: '/'
        },
        {
            id: 5,
            title: '[Pre-order] GT-80 Case',
            price: '119.00',
            images: {
                default: '/assetsnewarrival/v9.webp',
                hover: '/assetsnewarrival/v10.webp'
            },
            link: '/'
        }
    ];

    return (
        <section className='z-10 relative flex justify-center flex-col items-center mt-16 mx-18'>
            <h2 className='text-[42px]'>New arrival</h2>
            <a className='text-sm underline text-gray-600' href="/">Shop Now</a>
            <button className='cursor-pointer hover:opacity-100 transition duration-200 absolute left-3 rotate-180 top-55 flex justify-center items-center w-[36px] h-[36px] rounded-full opacity-50 bg-white z-50'>
                <Icons.arrowSlider/>
            </button>
            <button className='absolute right-3 cursor-pointer hover:opacity-100 transition duration-200 top-55 flex justify-center items-center w-[36px] h-[36px] rounded-full bg-white opacity-50 z-50'>
                <Icons.arrowSlider/>
            </button>
            <div
                ref={targetRef}
                className="flex items-center justify-evenly w-full gap-4 mt-8 flex-col md:flex-row"
            >
                {newArrivalItems.map(({ id, title, price, images, link }, index) => (
                    <NewArrivalCard
                        key={id}
                        title={title}
                        price={price}
                        img={images}
                        link={link}
                        isVisible={isVisible}
                        delay={index * 150}
                    />
                ))}
            </div>
        </section>
    );
};

export default NewArrivalSection;
