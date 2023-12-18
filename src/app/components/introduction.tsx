export const Introduction = () => {
    return (
        <section id="Introduction">
            <div className="flex justify-center items-center p-3 m-20" >
                <div data-aos="fade-right" className="m-16 max-w-3xl" >
                    <h3 className="text-green-500 font-bold text-2xl mb-2">Especialistas em</h3>
                    <h2 className="text-3xl font-bold mb-2">Perfuração com o Método não Destrutivo.</h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        O método não destrutivo é utilizado largamente em outros paises e está em grande crescimento no Brasil, o método é eficiente na instalação de dutos PEAD ou aço no sub-solo evitando danos por escavação, sem interferir no tráfego ou no meio ambiente. A instalação dos dutos pode ocorrer sob estruturas de pontes, tubulações, Lages, rodovias, ferrovias, rios, córregos e etc.
                    </p>
                </div>
                <div className="">
                    <img className="max-w-lg border-r-4 border-b-4 border-gray-400 border-solid rounded-xl shadow-2xl" data-aos="fade-down" src={'./assets/imgs/MND.png'} alt="" />
                </div>
            </div>
        </section>
    )
}