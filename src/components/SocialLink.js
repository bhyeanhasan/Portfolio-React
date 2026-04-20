import React, { Component } from 'react';
import './sociallinks.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';  // Import the Swiper core styles
import 'swiper/css/navigation'; // Optional: Import navigation styles
import 'swiper/css/pagination'; // Optional: Import pagination styles
import socialLinks from '../data/socialLinks';

class SocialLink extends Component {
    render() {
        return (
            <section className="brands-area mb-5">
                <div className="container mt-5">
                    <div className="brand-wrap">
                        <div className="row align-items-center  ">

                            <Swiper
                                className="swiper-container"
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                spaceBetween={15}
                                slidesPerView={4}
                                scrollbar={{ draggable: true }}
                                loop
                                autoplay={{
                                    delay: 1500, // 2.5 seconds between slides
                                    disableOnInteraction: false, // Keep autoplay going even after user interaction
                                }}
                            >
                                {socialLinks.map((link, index) => (
                                    <SwiperSlide key={index}>
                                        <a
                                            className="social-card"
                                            target="_blank"
                                            href={link.url}
                                            rel="noopener noreferrer"
                                            style={{
                                                '--brand-color': link.color,
                                                '--hover-color': `${link.color}66`
                                            }}
                                        >
                                            <i className={link.iconClass} aria-hidden="true"></i>
                                            <h4 className="social-name">{link.name}</h4>
                                        </a>
                                    </SwiperSlide>
                                ))}

                            </Swiper>

                            {/*{socialLinks.map((link, index) => (*/}
                            {/*    <div key={index} className="col single-brand my-1">*/}
                            {/*        <h4 className="social">*/}
                            {/*            <a*/}
                            {/*                style={{color: link.color}}*/}
                            {/*                target="_blank"*/}
                            {/*                href={link.url}*/}
                            {/*                rel="noopener noreferrer"*/}
                            {/*            >*/}
                            {/*                <i className={link.iconClass} aria-hidden="true"></i>*/}
                            {/*                <br/>*/}
                            {/*                {link.name}*/}
                            {/*            </a>*/}
                            {/*        </h4>*/}
                            {/*    </div>*/}
                            {/*))}*/}


                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SocialLink;
