import { Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const Infographic: React.FC = () => {
  return (
    <article className="py-12 lg:py-16">
      <h1 className="text-xl md:text-3xl border font-bold border-white rounded-md py-4 px-6 w-min mx-auto my-12 mb-24">
        Infographic
      </h1>

      <div className="w-full flex justify-center mb-24">
        <Swiper
          modules={[Scrollbar]}
          spaceBetween={0}
          scrollbar={{ draggable: true }}
          slidesPerView="auto"
        >
          <SwiperSlide className="max-w-sm md:max-w-md">
            <img src="/img/infographic/6e42e83ceee350743aa6a57fa6fdd84d.png" />
          </SwiperSlide>
          <SwiperSlide className="max-w-sm md:max-w-md">
            <img
              src="/img/infographic/d1d03e7526f49b39d2e17dc54200e985.jpg"
              className="h-full"
            />
          </SwiperSlide>
          <SwiperSlide className="max-w-sm md:max-w-md">
            <img src="/img/infographic/Bauhaus.png" />
          </SwiperSlide>
          <SwiperSlide className="max-w-sm md:max-w-md">
            <img
              src="/img/infographic/Graphic for Streamer-01.jpg"
              className="h-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-full flex justify-center mb-24">
        <Swiper
          modules={[Scrollbar]}
          spaceBetween={0}
          scrollbar={{ draggable: true }}
          slidesPerView="auto"
        >
          <SwiperSlide className="max-w-sm md:max-w-md">
            <img
              src="/img/infographic/Illustrator iqbu.png"
              className="h-full"
            />
          </SwiperSlide>
          <SwiperSlide className="max-w-sm md:max-w-md">
            <img src="/img/infographic/Tanggung Jawab Desainer-01.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </article>
  )
}

export default Infographic
