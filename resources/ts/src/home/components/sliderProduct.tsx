import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FcPrevious, FcNext } from 'react-icons/fc';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from '@inertiajs/inertia-react';
import ItemProduk from '@ts/Components/produk/itemProduk';
import { getDataProduks } from '../data/produks-data';
import route from 'ziggy-js';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default function SliderProduct() {
  const [produks, setProduks] = useState<Laravel.Interface.Pagination<App.Models.Produk>>();
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [slidePerView, setSlidePerView] = useState(3);
  useEffect(() => {
    function windowResize() {
      if (window.innerWidth < 420) setSlidePerView(3);
      else if (window.innerWidth < 768) setSlidePerView(4);
      else setSlidePerView(5);
    }
    try {
      getDataProduks()
        .then((resp) => {
          setProduks(resp.data.produks);
        })
        .catch((e) => {
          console.log(e.response.data.message);
        });
    } catch (error) {}
    windowResize();
    window.addEventListener('resize', windowResize);
    return () => {
      window.removeEventListener('resize', windowResize);
    };
  }, []);
  return (
    <div className="card-product">
      <div className="card-product-header my-10">
        <span className=" font-extrabold text-2xl font-sweetly_scentedregular tracking-[0.2em] ">Vincidy New</span>
        <div className="link-all top-4">
          <Link href={route('produk.all')} className="border-b border-primary transition-colors duration-300 text-primary text-opacity-70 font-bold hover:text-opacity-100 hover:border-b-2">
            see all
          </Link>
        </div>
      </div>
      {produks && produks.data.length > 0 ? (
        <SwipperStyled className="relative md:px-[20px]">
          <Swiper
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            slidesPerView={slidePerView}
            spaceBetween={20}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            pagination={{ clickable: true, enabled: false }}
            scrollbar={{ draggable: true, hide: true }}
            loop={true}
          >
            {produks?.data.map((produk) => (
              <SwiperSlide key={produk.id}>
                <ItemProduk produk={produk} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="hidden md:flex md:absolute top-0 -left-3 h-full z-10   items-center">
            <div ref={navigationPrevRef}>
              <div className="rounded-full border p-1 border-primary cursor-pointer swipper-back">
                <AiOutlineLeft className="h-5 w-5  text-primary" />
              </div>
            </div>
          </div>
          <div className="absolute top-0 -right-3 h-full z-10 hidden md:flex items-center ">
            <div ref={navigationNextRef}>
              <div className="rounded-full border p-1 border-primary cursor-pointer swipper-next">
                <AiOutlineRight className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>
        </SwipperStyled>
      ) : (
        <div className="text-center">Empty</div>
      )}
    </div>
  );
}

// the wrapper styled component
const SwipperStyled = styled.div`
  .swiper-scrollbar-horizontal {
    display: none;
  }
`;
