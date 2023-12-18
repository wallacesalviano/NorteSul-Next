import Link from "next/link"
import React from 'react'


export const Header = () => {
    return (
        <nav className="flex items-center justify-between bg-gradient-to-r from-gray-200 to-white p-4 border-b-2">
            <Link href='/'>
                <img className="w-40 h-30 ml-20" src={'./assets/imgs/norte-sul-telecom.png'} />
            </Link>

            <ul className="list-none p-3 flex justify-center items-center cursor-pointer gap-5 mr-20">
                <li>
                    <Link
                        href='/'
                        className="mr-4 text-gray-500 hover:text-green-400 font-bold">
                        Contato
                    </Link>
                </li>

                <li>
                    <Link href='/about' className="mr-4 text-gray-500 hover:text-green-400 font-bold">
                        Sobre
                    </Link>

                </li>
                <li className="mr-4 text-gray-500 hover:text-green-400 font-bold ">
                    <Link href='./#Introduction'>
                        Serviços
                    </Link>

                </li>
                <a
                    href={"https://api.whatsapp.com/send?phone=556137700148"}
                    className="w-[120px] bg-blue-800 h-[50px] my-2 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#16A34A] before:to-[#22C55E] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                    Contrate
                </a>

            </ul>
        </nav>
    );
}   