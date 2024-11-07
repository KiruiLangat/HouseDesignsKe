import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from '../assets/styles/BrowseCarousel.module.css';
import '@fontsource/poppins';

const style = {
  fontFamily: 'Poppins',
};

export default function BrowseCarousel({ sub_category_name }) {
  const [projects, setProjects] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/browse');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [projects]);

  return (
    <>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.autoplay.start();
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.BrowseSwiper}
        style={style}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Link href={`/projects/${sub_category_name}/${project.title}`}>
              <a>
                <Image src={project.image_url} alt={project.title} layout="responsive" width={500} height={300} />
                <div className={styles.carouselOverlay}>
                  <p>{project.title}</p>
                </div>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
