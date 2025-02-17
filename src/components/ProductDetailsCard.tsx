'use client';
import React, { useState } from 'react';
import Icons from '../utils/icons';
import { useCarousel } from '../hooks/useCarousel';
import CarouselIndicators from './CarouselIndicators';

const productDetails = {
    name: '[GB] Snake60 R2',
    price: 350.0,
    images: [
        '/productdetail/a1.webp',
        '/productdetail/a2.webp',
        '/productdetail/a3.webp',
        '/productdetail/a4.webp',
        '/productdetail/a5.webp',
        '/productdetail/a6.webp',
        '/productdetail/a7.webp',
        '/productdetail/a8.webp',
        '/productdetail/a9.webp',
        '/productdetail/a10.webp',
    ],
    colors: [
        { id: 'champagne', label: 'Champagne (Sand)' },
        { id: 'sakura', label: 'Sakura (Pink)' },
        { id: 'iron', label: 'Iron (Black)' },
        { id: 'silver', label: 'Silver' },
        { id: 'sage', label: 'Sage (Light Green)' },
        { id: 'dark-green', label: 'Dark Green' },
    ],
    layout: [
        { id: 'wk', label: 'WK' },
        { id: 'wkl', label: 'WKL' },
        { id: 'hhkb', label: 'HHKB' },
    ],
    pcb: [
        { id: 'solderpcb', label: 'Solder PCB' },
        { id: 'hotswappcb', label: 'Hotswap PCB' },
    ],
    accessories: [
        { id: 'hotswap', label: 'Hot-swap PCB', price: 45 },
        { id: 'soldered', label: 'Soldered PCB', price: 40 },
        { id: 'aluminum', label: 'Aluminum Plate', price: 25 },
        { id: 'polycarbonate', label: 'Polycarbonate Plate', price: 25 },
        { id: 'pp', label: 'PP Plate', price: 25 },
        { id: 'fr4', label: 'FR4 Plate', price: 30 },
        { id: 'carbon', label: 'Carbon Fiber Plate', price: 40 },
    ],
    social: [
        { id: 'facebook', link: '/', icon: <Icons.facebookIcon /> },
        { id: 'x', link: '/', icon: <Icons.xIcon /> },
        { id: 'pinterest', link: '/', icon: <Icons.pinterestIcon /> },
    ],
};

const ProductDetailsCard: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState(productDetails.images[0]);
    const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
    const [quantity, setQuantity] = useState<number>(1);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedLayout, setSelectedLayout] = useState<string | null>(null);
    const [selectedPCB, setSelectedPCB] = useState<string | null>(null);

    const { activeCarouselId, setActiveCarouselId, onTouchStart, onTouchMove, onTouchEnd } =
        useCarousel(productDetails.images.length);

    const toggleAccessory = (id: string) => {
        setSelectedAccessories((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
        );
    };

    const calculateTotalPrice = () => {
        const accessoriesPrice = selectedAccessories.reduce((total, id) => {
            const accessory = productDetails.accessories.find((item) => item.id === id);
            return accessory ? total + accessory.price : total;
        }, 0);

        return (productDetails.price + accessoriesPrice) * quantity;
    };

    const handleAddToCart = () => {
        const cartDetails = {
            productName: productDetails.name,
            productPrice: productDetails.price,
            selectedImage,
            quantity,
            selectedColor,
            selectedLayout,
            selectedPCB,
            selectedAccessories: selectedAccessories
                .map((id) => {
                    const accessory = productDetails.accessories.find((item) => item.id === id);
                    return accessory ? { label: accessory.label, price: accessory.price } : null;
                })
                .filter(Boolean),
        };

        console.log(cartDetails);
    };

    return (
        <article className="w-11/12 mt-4 flex justify-center md:flex-nowrap flex-wrap md:gap-14 gap-6 ">
            <div className="md:hidden">
                <div className="overflow-hidden relative">
                    <div
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${activeCarouselId * 100}%)` }}
                    >
                        {productDetails.images.map((img, index) => (
                            <div key={index} className="min-w-full">
                                <img
                                    src={img}
                                    alt={`Product Image ${index + 1}`}
                                    className="w-full h-[350px] object-cover rounded-xl object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <CarouselIndicators
                    itemsLength={productDetails.images.length}
                    activeIndex={activeCarouselId}
                    onSelect={setActiveCarouselId}
                />
            </div>

            <div className="w-1/2">
                <figure className="hidden md:flex justify-center w-[50%] h-[50%] md:w-full mt-10">
                    <img
                        className="cursor-pointer rounded-xl object-cover transition-transform duration-300 md:hover:scale-105"
                        src={selectedImage}
                        alt="Selected product"
                    />
                </figure>
                <ul className="hidden md:flex md:w-full justify-center flex-wrap items-center gap-1 mt-5">
                    {productDetails.images.map((img, index) => (
                        <li key={index}>
                            <figure>
                                <img
                                    className={`cursor-pointer h-[120px] w-[119px] rounded-xl border ${
                                        selectedImage === img
                                            ? 'border-black'
                                            : 'border-transparent'
                                    } transition-all`}
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => setSelectedImage(img)}
                                />
                            </figure>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="md:w-1/2 w-[500px] md:mt-10">
                <h3 className="md:text-left text-center mb-4 text-2xl font-semibold">
                    {productDetails.name}
                </h3>
                <span className="block text-center md:text-left text-4xl font-bold my-4">
                    ${calculateTotalPrice().toFixed(2)}
                </span>{' '}
                <form className="mt-4">
                    <fieldset className="flex md:justify-start justify-center md:mx-0  mx-12 flex-wrap gap-2">
                        <legend className="text-xs md:text-left text-center pb-2 font-medium">
                            Color
                        </legend>
                        {productDetails.colors.map(({ id, label }) => (
                            <label
                                key={id}
                                className={`cursor-pointer flex items-center gap-2 text-xs border py-2 px-4 rounded-md transition ${
                                    selectedColor === id
                                        ? 'bg-black text-white border-black'
                                        : 'border-[#b8b8b8] hover:bg-gray-100'
                                }`}
                            >
                                <input
                                    className="hidden"
                                    type="radio"
                                    name="color"
                                    value={id}
                                    onChange={() => setSelectedColor(id)}
                                />
                                {label}
                            </label>
                        ))}
                    </fieldset>

                    <fieldset className="mx-12 md:mx-0  flex md:justify-start justify-center flex-wrap gap-2 mt-4">
                        <legend className="text-center md:text-left text-xs pb-2 font-medium">
                            Layout
                        </legend>
                        {productDetails.layout.map(({ id, label }) => (
                            <label
                                key={id}
                                className={`cursor-pointer flex items-center gap-2 text-xs border py-2 px-4 rounded-md transition ${
                                    selectedLayout === id
                                        ? 'bg-black text-white border-black'
                                        : 'border-[#b8b8b8] hover:bg-gray-100'
                                }`}
                            >
                                <input
                                    className="hidden"
                                    type="radio"
                                    name="layout"
                                    value={id}
                                    onChange={() => setSelectedLayout(id)}
                                />
                                {label}
                            </label>
                        ))}
                    </fieldset>

                    <fieldset className="mx-12 md:mx-0  flex md:justify-start justify-center flex-wrap gap-2 mt-4">
                        <legend className="text-xs pb-2 text-center md:text-left font-medium">
                            PCB
                        </legend>
                        {productDetails.pcb.map(({ id, label }) => (
                            <label
                                key={id}
                                className={`cursor-pointer flex items-center gap-2 text-xs border py-2 px-4 rounded-md transition ${
                                    selectedPCB === id
                                        ? 'bg-black text-white border-black'
                                        : 'border-[#b8b8b8] hover:bg-gray-100'
                                }`}
                            >
                                <input
                                    className="hidden"
                                    type="radio"
                                    name="pcb"
                                    value={id}
                                    onChange={() => setSelectedPCB(id)}
                                />
                                {label}
                            </label>
                        ))}
                    </fieldset>

                    <fieldset className="mx-12 text-center flex md:flex-nowrap flex-wrap justify-center md:justify-start md:text-left md:mx-0 mt-4">
                        {selectedAccessories.length > 0 && (
                            <div className="my-2 p-3 border rounded-md bg-gray-100">
                                <h4 className="text-sm font-medium">Selected Accessories:</h4>
                                <ul className="list-disc pl-4 text-xs">
                                    {selectedAccessories.map((id) => {
                                        const accessory = productDetails.accessories.find(
                                            (item) => item.id === id,
                                        );
                                        return accessory ? (
                                            <li key={id}>
                                                {accessory.label} (+${accessory.price}.00 USD)
                                            </li>
                                        ) : null;
                                    })}
                                </ul>
                            </div>
                        )}
                        <legend className="text-xs pb-2 font-medium">Additional Accessories</legend>
                        <div className="flex flex-col gap-2">
                            {productDetails.accessories.map(({ id, label, price }) => (
                                <label
                                    key={id}
                                    className="flex items-center gap-2 text-xs py-2 px-4 rounded-md hover:bg-gray-100 transition cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedAccessories.includes(id)}
                                        onChange={() => toggleAccessory(id)}
                                    />
                                    {label} (+${price}.00 USD)
                                </label>
                            ))}
                        </div>
                    </fieldset>
                    <hr className="mt-2 mx-18 md:mx-2 border-dotted" />

                    <fieldset className="mx-12 md:mx-0 mt-4">
                        <legend className="text-xs text-center md:text-left pb-2 font-medium">
                            Quantity
                        </legend>
                        <div className="flex  items-center gap-2">
                            <select
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="md:w-full w-1/2 mx-auto text-xs border border-[#b8b8b8] py-2 px-4 rounded-md"
                            >
                                {[1, 2, 3, 4, 5, 6].map((num) => (
                                    <option key={num} value={num}>
                                        {num}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </fieldset>
                    <div className="flex md:justify-start justify-center">
                        <button
                            type="button"
                            onClick={handleAddToCart}
                            className="mt-2 w-1/2  md:w-full rounded-md text-white text-xs bg-black py-3"
                        >
                            ADD TO CART
                        </button>
                    </div>
                </form>
                <ul className="flex justify-center md:justify-start gap-2 mt-2">
                    {productDetails.social.map(({ id, link, icon }) => {
                        return (
                            <li key={id}>
                                <a href={link}>{icon}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </article>
    );
};

export default ProductDetailsCard;
