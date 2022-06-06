// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <section className="mt-24 mb-24">
        <h1 className="text-white text-sm text-opacity-70 mb-8">HELLO,HELLO</h1>
        <div className="max-w-3xl text-xl md:text-3xl font-bold">
          <p className="leading-relaxed">
            Hi, my name is Muhammad Ridla Setiadi.
          </p>
          <p className="leading-relaxed">
            I'm a Photographer, Videographer and Graphic Designer, with a wide
            experience from college and freelance with a focus on people, event,
            product, nature and lifestyle.
          </p>
        </div>
      </section>

      <section className="mb-24">
        <h1 className="text-white text-sm text-opacity-70 mb-8">
          PROJECT PREVIEW
        </h1>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{delay: 2500}}
        >
          <SwiperSlide>
            <div className="relative w-full h-72 md:h-96 lg:h-[560px] bg-gray-500">
              <img
                className="w-full h-full inset-0 object-cover"
                src="/img/1.jpg"
                alt="thanks"
              />
              <div className="flex justify-center items-center absolute bg-gray-900 bg-opacity-60 w-full h-full inset-0 opacity-0 hover:opacity-100 transition-all delay-100">
                <Link to="/project" className="bg-black hover:bg-[#111] w-min h-min rounded-md px-5 py-2 text-lg">
                  MORE
                </Link>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="relative w-full h-72 md:h-96 lg:h-[560px] bg-gray-500">
              <img
                className="w-full h-full inset-0 object-cover"
                src="/img/2.jpg"
                alt="thanks"
              />
              <div className="flex justify-center items-center absolute bg-gray-900 bg-opacity-60 w-full h-full inset-0 opacity-0 hover:opacity-100 transition-all delay-100">
                <Link to="/project" className="bg-black hover:bg-[#111] w-min h-min rounded-md px-5 py-2 text-lg">
                  MORE
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-72 md:h-96 lg:h-[560px] bg-gray-500">
              <img
                className="w-full h-full inset-0 object-cover"
                src="/img/3.jpg"
                alt="thanks"
              />
              <div className="flex justify-center items-center absolute bg-gray-900 bg-opacity-60 w-full h-full inset-0 opacity-0 hover:opacity-100 transition-all delay-100">
                <Link to="/project" className="bg-black hover:bg-[#111] w-min h-min rounded-md px-5 py-2 text-lg">
                  MORE
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-72 md:h-96 lg:h-[560px] bg-gray-500">
              <img
                className="w-full h-full inset-0 object-cover"
                src="/img/4.png"
                alt="thanks"
              />
              <div className="flex justify-center items-center absolute bg-gray-900 bg-opacity-60 w-full h-full inset-0 opacity-0 hover:opacity-100 transition-all delay-100">
                <Link to="/project" className="bg-black hover:bg-[#111] w-min h-min rounded-md px-5 py-2 text-lg">
                  MORE
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-72 md:h-96 lg:h-[560px] bg-gray-500">
              <img
                className="w-full h-full inset-0 object-cover"
                src="/img/5.jpg"
                alt="thanks"
              />
              <div className="flex justify-center items-center absolute bg-gray-900 bg-opacity-60 w-full h-full inset-0 opacity-0 hover:opacity-100 transition-all delay-100">
                <Link to="/project" className="bg-black hover:bg-[#111] w-min h-min rounded-md px-5 py-2 text-lg">
                  MORE
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-72 md:h-96 lg:h-[560px] bg-gray-500">
              <img
                className="w-full h-full inset-0 object-cover"
                src="/img/6.jpg"
                alt="thanks"
              />
              <div className="flex justify-center items-center absolute bg-gray-900 bg-opacity-60 w-full h-full inset-0 opacity-0 hover:opacity-100 transition-all delay-100">
                <Link to="/project" className="bg-black hover:bg-[#111] w-min h-min rounded-md px-5 py-2 text-lg">
                  MORE
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-72 md:h-96 lg:h-[560px] bg-gray-500">
              <img
                className="w-full h-full inset-0 object-cover"
                src="/img/7.jpg"
                alt="thanks"
              />
              <div className="flex justify-center items-center absolute bg-gray-900 bg-opacity-60 w-full h-full inset-0 opacity-0 hover:opacity-100 transition-all delay-100">
                <Link to="/project" className="bg-black hover:bg-[#111] w-min h-min rounded-md px-5 py-2 text-lg">
                  MORE
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="text-center mb-24">
        <div className="text-[96px] font-bold">“</div>
        <p className="font-bold text-2xl max-w-3xl mx-auto">
          “You can design and create, and build the most wonderful place in the
          world. But it takes people to make the dream a reality.”
        </p>
        <p className="text-3xl mt-24">Walt Disney</p>
      </section>
    </div>
  )
}

export default Home
