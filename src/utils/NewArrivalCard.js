
const NewArrivalCard = ({ img, alt, title, price, isVisible, delay }) => {
    return (
        <article
            className={`flex flex-col justify-center items-center rounded-md relative w-full md:w-[250px] transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-md'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="cursor-pointer relative w-full h-[250px]">
                <img
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-300 opacity-100 hover:opacity-0"
                    src={img.hover}
                    alt={alt}
                />
                <img
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-300 opacity-0 hover:opacity-100"
                    src={img.default}
                    alt={alt}
                />
            </div>

            <p className="text-center text-xs pt-2 hover:text-gray-600 transition duration-300 cursor-pointer">{title}</p>
            <span className="pt-1 text-gray-600 hover:text-black transition duration-300 cursor-default">{price}</span>
        </article>
    );
};

export default NewArrivalCard;
