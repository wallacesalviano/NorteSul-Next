export const Benefits = () => {
    return (
        <div className="bg-white border rounded-md border-gray-300">
            <div className="p-10 flex justify-center items-center">
                <img className="border-b-3 border-l-4 border-b-4 border-gray-400 border-solid rounded-xl shadow-2xl max-w-lg m-10" data-aos="fade-down" src={'./assets/imgs/fotos do mnd.png'} alt="" />
                <div data-aos="fade-left" className="m-5">
                    <h2 className="font-bold text-4xl mb-5 ">Vantagens do Método não Destrutivo.</h2>
                    <ul className="text-gray-500 text-lg list-disc ml-6">
                        <li className="mb-1">Elimina a necessidade de abertura de valas;</li>
                        <li className="mb-1">Não interfere no ambiente externo do local;</li>
                        <li className="mb-1">Reduz danos ambientais;</li>
                        <li className="mb-1">Reduz custos sociais;</li>
                        <li className="mb-1">É econômico para instalar, reformar e reparar a céu aberto.</li>
                        <li className="mb-1">Preservação do meio ambiente.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}