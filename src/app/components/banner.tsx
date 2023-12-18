import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Link from 'next/link';


export const Banner = () => {
    return (
        <section id='#Banner'>
            <div className="flex justify-center items-center p-3 gap-20 bg-gradient-to-r from-gray-200 to-white">
                <div data-aos="fade-down" className="max-w-2xl">
                    <h3 className="text-green-500 font-bold text-xl">BEM-VINDO(A) A Norte Sul Engenharia</h3>
                    <h1 className="font-bold text-4xl">Soluções com precisão e sob medida para o seu serviço.</h1>
                    <p className="mb-8 text-gray-500">É a solução que proporciona uma conexão voltada exclusivamente para sua
                        empresa. Com alta velocidade</p>
                    <button className="w-[220px] bg-blue-800 h-[50px] my-2 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#16A34A] before:to-[#22C55E] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                        <Link
                            href="#Introduction">
                            Conheça um pouco mais
                        </Link>
                    </button>
                </div>

                <div className="flex max-w-sm p-5">
                    <img data-aos="fade-left" src={"./assets/imgs/engenheira.webp"} alt="" />
                </div>
            </div >
        </section>
    )
}