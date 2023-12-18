export const Operation = () => {
    return (
        <section id="Operation">
            <div className="flex justify-center items-center p-3 m-20" >
                <div data-aos="fade-right" className="m-16 max-w-3xl">
                    <h2 className="text-3xl font-bold mb-10">A Onde Atuamos?</h2>
                    <p className="text-gray-500 text-lg mb-8"> Nós da norte sul, temos o compromisso de levar nossos serviços a todos os cantos do Brasil.
                        Independentemente de sua localização, estamos comprometidos em oferecer soluções personalizadas de
                        alta qualidade. Com uma equipe experiente e dedicada, garantimos atendimento ágil e eficiente em
                        todo o território nacional. Valorizamos a satisfação do cliente e estamos prontos para ser seu
                        parceiro de confiança, seja você um cliente em uma grande metrópole ou em uma área remota. Entre em
                        contato conosco hoje e descubra como podemos atender às suas necessidades específicas em qualquer
                        lugar do Brasil.</p>
                    <a
                        className="w-[180px] bg-blue-800 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#16A34A] before:to-[#22C55E] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                        href={"https://api.whatsapp.com/send?phone=556137700148"}>
                        Entre em Contado
                    </a>
                </div>
                <img data-aos="fade-down" src={'./assets/imgs/mapa.png'} alt="" />
            </div>
        </section>
    )
}