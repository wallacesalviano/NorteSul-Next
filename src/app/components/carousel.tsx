import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import { useState } from 'react';

register();

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export const Carousel = () => {
    const [slidePerView, setSlidePerView] = useState(4)



    const data = [
        { id: 1, image: './assets/imgs/gerentec.png' },
        { id: 2, image: './assets/imgs/jrc.png' },
        { id: 3, image: './assets/imgs/caesb.png' },
        { id: 4, image: './assets/imgs/comgas.png' },
        { id: 5, image: './assets/imgs/nwi.png' },
        { id: 6, image: './assets/imgs/telemont.png' },
        { id: 7, image: './assets/imgs/clicknet.png' },

    ]

    return (
        <div className='bg-white p-3 border rounded-md border-gray-300'>
            <h2 className='text-3xl ml-20 mt-16 font-bold'> Empresas que confiam em nossas soluções</h2>
            <div data-aos="fade-left" className='m-16 flex justify-center items-center text-center'>
                <Swiper
                    slidesPerView={slidePerView}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    navigation
                    className=''
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                className=' ml-20 mb-16 w-4/6 border-2  border-green-400'
                                src={item.image}
                                alt='slider'
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )

}