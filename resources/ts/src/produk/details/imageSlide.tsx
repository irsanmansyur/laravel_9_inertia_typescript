import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './imageSlide.scss';
import { Avatar } from '@material-tailwind/react';

export default function ImageSlide({ images }: { images: App.Models.ProdukImage[] }) {
  const [activeThumb, setActiveThumb] = useState<any>();
  return (
    <>
      <Swiper loop={true} spaceBetween={10} navigation={true} modules={[Navigation, Thumbs]} grabCursor={true} thumbs={{ swiper: activeThumb }} className="product-images-slider h-[400px]">
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <LazyLoadImage src={image.image_link} alt={image.name} title={image.name} className="slide-image w-full h-[400px]" effect="opacity" placeholderSrc="https://via.placeholder.com/150/0000FF/808080?Text=Digital.com" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper onSwiper={(swiper) => setActiveThumb(swiper)} loop={true} spaceBetween={10} slidesPerView={3} modules={[Navigation, Thumbs]} className="product-images-slider-thumbs mt-1 ">
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="product-images-slider-thumbs-wrapper">
              <Avatar src={image.image_link} alt="avatar" size="xxl" className="rounded" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
