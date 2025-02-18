import React from 'react';
import Image from 'next/image';
import { productDescriptionCard } from '../types/product.types';
const DescriptionProduct: React.FC = () => {
    const productsItemDesc: productDescriptionCard[] = [
        {
            id: 1,
            mainImage: '/productimg/1.webp',
            inspiration: {
                title: 'Inspiration',
                description: `Snake celebrates form. Serpentine curves offer a medium to bend around standard comforts of keyboard weight design. Crafted by Discord-forged friends Wangus and Glizzo after chatting over favorite “blackgaze” bands, we hope Snake brings something refreshingly alive to your desk and the space around it. <br/> <br/> Curves, from every angle
Rounding Snake's fierce energy, and inspired by vintage supercar design, edge to edge arrays of compound curves give the keyboard an appealing sculpt. Surgical-grade PVD-finished steel meets a trifecta of enamel infill to deliver a new kind of pop.`,
            },
            video: 'https://www.youtube.com/embed/TeMuEyM4qUk',
            specs: {
                specs: [
                    'Gasket o-ring mount',
                    'WKL/HHKB/WK',
                    '6 degree typing angle,',
                    'Anodized, finely bead blasted aluminum, PVD stainless steel with tri-color enamel infills.',
                    'Weight: around 1.7kg after assembly',
                    '1.6mm FR4 PCB support Via',
                ],
                update: [
                    'GB date : 01/25/2025 - 02/25/2025',
                    'Estimated shipping date: Late Q2 – Early Q3 2025',
                ],
                difference_with_r1: [
                    'the R2 has an improved internal structure, supports more layouts, and is more affordable',
                ],
                include: [
                    'Keyboard case x1',
                    'Alu plate x1',
                    '35a oring x1',
                    '40a oring x1',
                    '45a oring x1',
                    'PCB x1',
                    'Clip in stabilizers x1 set',
                    'Carrying case x1',
                    'PBTfans Untamed base kit x1',
                ],
                firmware: [
                    { title: 'snake_60_via.uf2', link: '/' },
                    { title: 'sanke60_wkl.json', link: '/' },
                ],
            },
            dimension: '/productimg/2.webp',
            layout: '/productimg/3.webp',
            pictures: [
                { id: 1, alt: 'keyboard image', img: '/productimg/4.jpeg' },
                { id: 2, alt: 'keyboard image', img: '/productimg/5.jpeg' },
                { id: 3, alt: 'keyboard image', img: '/productimg/6.jpeg' },
            ],
        },
    ];

    return (
        <section className="bg-black mt-16">
            <article className="mx-auto w-[70%] text-white text-center">
                <figure className="flex justify-center mt-4 ">
                    <Image
                        src={productsItemDesc[0].mainImage}
                        width={800}
                        height={100}
                        className="rounded-xl"
                        alt="keyboard image"
                    />
                </figure>
                <h5 className="text-3xl my-2">{productsItemDesc[0].inspiration.title}</h5>
                <p
                    dangerouslySetInnerHTML={{
                        __html: productsItemDesc[0].inspiration.description,
                    }}
                />
                <iframe
                    className="mx-auto mt-4 w-full md:w-[700px]"
                    src={productsItemDesc[0].video}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className="flex justify-center flex-wrap mt-10">
                    <div className="flex flex-col gap-6 items-start w-82">
                        <ul className="text-left">
                            <li className="font-bold">Specs</li>
                            {productsItemDesc[0].specs.specs.map((i) => (
                                <li className="text-sm ml-2">•{i}</li>
                            ))}
                        </ul>
                        <ul className="text-left">
                            <li className="font-bold">Update</li>
                            {productsItemDesc[0].specs.update.map((i) => (
                                <li className="text-sm ml-2">•{i}</li>
                            ))}
                        </ul>
                        <ul className="text-left">
                            <li className="text-bold">Difference with R1</li>
                            {productsItemDesc[0].specs.difference_with_r1.map((i) => (
                                <li className="text-sm ml-2">•{i}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6 items-start w-82">
                        <ul className="text-left">
                            <li className="text-bold">Include</li>
                            {productsItemDesc[0].specs.include.map((i) => (
                                <li className="text-sm ml-2">•{i}</li>
                            ))}
                        </ul>
                        <ul className="text-left">
                            <li className="text-bold">Include</li>
                            {productsItemDesc[0].specs.firmware.map((i) => (
                                <li className="text-sm ml-2">
                                    <a className="underline" href={i.link}>
                                        {i.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <h6 className="mt-24 text-3xl font-bold">Dimension</h6>
                <figure className="flex justify-center">
                    <Image
                        alt="dimension keyboard information"
                        width={900}
                        height={400}
                        src={productsItemDesc[0].dimension}
                    />
                </figure>
                <h6 className="mt-2 text-3xl font-bold">Layout</h6>
                <figure className="flex justify-center">
                    <Image
                        width={900}
                        height={400}
                        alt="layout image keyboard"
                        src={productsItemDesc[0].layout}
                    />
                </figure>
                <h6 className="mt-2 text-3xl font-bold mt-16">Pictures</h6>
                <ul>
                    <li></li>
                </ul>
                <div className="flex flex-col justify-center items-center gap-6 my-6">
                    {productsItemDesc[0].pictures.map(({ id, alt, img }) => {
                        return (
                            <Image
                                key={id}
                                className="rounded-xl"
                                alt={alt}
                                width={900}
                                height={400}
                                src={img}
                            />
                        );
                    })}
                </div>
            </article>
        </section>
    );
};
export default DescriptionProduct;
