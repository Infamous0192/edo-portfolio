import { Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const Poster: React.FC = () => {
  return (
    <div className="py-12 lg:py-16">
      <h1 className="text-xl md:text-3xl border font-bold border-white rounded-md py-4 px-6 w-min mx-auto my-12 mb-24">
        POSTER/MAGZ
      </h1>

      <div className="w-full flex justify-center mb-24">
        <Swiper
          modules={[Scrollbar]}
          spaceBetween={0}
          scrollbar={{ draggable: true }}
          slidesPerView="auto"
        >
          <SwiperSlide className="max-w-sm md:max-w-md">
            <img src="/img/poster/5c484118ad46b49ebed4d18e1f71caba.jpg" />
          </SwiperSlide>
          <SwiperSlide className="max-w-sm md:max-w-md">
            <img src="/img/poster/225ce86b05a2165ca617a9bf0f411bef.jpg" />
          </SwiperSlide>
          <SwiperSlide className="max-w-sm md:max-w-md">
            <img src="/img/poster/786c2497f8af60d5899a3989c8029835.jpg" />
          </SwiperSlide>
          <SwiperSlide className="max-w-sm md:max-w-md">
            <img src="/img/poster/b1717296e9bf24a334aada81d53da3f6.jpg" />
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
            <img src="/img/poster/139f066971b14da1ec6218948ef250cb.jpg" />
          </SwiperSlide>
          <SwiperSlide className="max-w-sm md:max-w-md">
            <img src="/img/poster/e3ce6dd2dc0cbeb37f4f90f589eefd81.jpg" />
          </SwiperSlide>
          <SwiperSlide className="max-w-sm md:max-w-md">
            <img src="/img/poster/04232f8baa2681af71d08357bbf888e9.jpg" />
          </SwiperSlide>
          <SwiperSlide className="max-w-sm md:max-w-md">
            <img src="/img/poster/adc4517de3195584d43d4abf9fb6deab.jpg" />
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
            <img src="/img/poster/5e74bc665fce28d38a97a11abc5209ca.png" />
          </SwiperSlide>
          <SwiperSlide className="max-w-sm md:max-w-md">
            <img src="/img/poster/1b00ee257ffd731b51958b3ae3c5ba8a.png" />
          </SwiperSlide>
          <SwiperSlide className="max-w-sm md:max-w-md">
            <img src="/img/poster/170bc7e4409302bcba19523110c0542d.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Poster
