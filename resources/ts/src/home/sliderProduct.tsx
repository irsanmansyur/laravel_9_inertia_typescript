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
import { getDataProduks } from './data/produks-data';

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
    getDataProduks().then((resp) => {
      setProduks(resp.data.produks);
    });
    windowResize();
    window.addEventListener('resize', windowResize);
    return () => {
      window.removeEventListener('resize', windowResize);
    };
  }, []);
  return (
    <div className="card-product">
      <div className="card-product-header">
        <span className=" font-bold text-2xl font-sweetly_scentedregular tracking-widest">Somethinc New</span>
        <div className="link-all top-4">
          <Link href="#link" className="border-b hover:border-b-blue-500 transition-colors duration-300">
            see all
          </Link>
        </div>
      </div>
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
            <div className="rounded-full border p-1 border-blue-500 cursor-pointer swipper-back">
              <FcPrevious className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 -right-3 h-full z-10 hidden md:flex items-center ">
          <div ref={navigationNextRef}>
            <div className="rounded-full border p-1 border-blue-500 cursor-pointer swipper-next">
              <FcNext className="h-5 w-5" />
            </div>
          </div>
        </div>
      </SwipperStyled>
    </div>
  );
}

// the wrapper styled component
const SwipperStyled = styled.div`
  .swiper-scrollbar-horizontal {
    display: none;
  }
`;
