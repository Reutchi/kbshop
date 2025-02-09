'use client'
import AccessoriesCard from "../utils/AccessoriesCard";
import useIsVisible from "../hooks/useIsVisible";

const AccessoriesSection = () => {
    const [targetRef, isVisible] = useIsVisible(0.2);

    const accessoriesCardItems = [
        {id:1,title:'Keycaps',link:'/',alt:'keyboard image',img:'/assetsaccessories/keyboard1.webp'},
        {id:2,title:'Keyboard DIY kit',link:'',alt:'keboard image',img:'/assetsaccessories/keyboard2.webp'},
    ]

    return (
        <section ref={targetRef} className="flex md:flex-row flex-col justify-center mx-6 md:mx-16 mt-24 gap-8">
            {accessoriesCardItems.map(({ id, title, link, alt, img }, i) => (
                <AccessoriesCard
                    key={id}
                    title={title}
                    link={link}
                    alt={alt}
                    img={img}
                    isVisible={isVisible}
                    delay={i * 200}
                />
            ))}
        </section>
    );
};

export default AccessoriesSection;
