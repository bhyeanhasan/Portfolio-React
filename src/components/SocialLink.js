import React, {Component} from 'react';
import './sociallinks.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import 'swiper/css';  // Import the Swiper core styles
import 'swiper/css/navigation'; // Optional: Import navigation styles
import 'swiper/css/pagination'; // Optional: Import pagination styles

const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/bhyeanhasan',
        iconClass: 'fa fa-github-square',
        color: '#e45447',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/bhyeanhasan/',
        iconClass: 'fa fa-linkedin-square',
        color: '#e45447',
    },
    {
        name: 'YouTube',
        url: 'https://www.youtube.com/@bhyeanhasan',
        iconClass: 'fa fa-youtube-play',
        color: '#e45447',
    },
    {
        name: 'WhatsApp',
        url: 'https://wa.me/8801920599266',
        iconClass: 'fa fa-whatsapp',
        color: '#e45447',
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/bhyeanhasan/',
        iconClass: 'fa fa-facebook-square',
        color: '#e45447',
    },
    {
        name: 'X',
        url: 'https://twitter.com/bhyeanhasan',
        iconClass: 'fa fa-twitter-square',
        color: '#e45447',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/bhyeanhasan/',
        iconClass: 'fa fa-instagram',
        color: '#e45447',
    },
    {
        name: 'Blog',
        url: 'https://bhyeanhasan.blogspot.com/',
        iconClass: 'fa fa-globe',
        color: '#e45447',
    },
];

class SocialLink extends Component {
    render() {
        return (
            <section className="brands-area mb-5">
                <div className="container mt-5">
                    <div className="brand-wrap">
                        <div className="row align-items-center  ">

                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                spaceBetween={5}
                                slidesPerView={4}
                                scrollbar={{draggable: true}}
                                loop
                                autoplay={{
                                    delay: 1500, // 2.5 seconds between slides
                                    disableOnInteraction: false, // Keep autoplay going even after user interaction
                                }}
                            >
                                {/*<SwiperSlide>Slide 1</SwiperSlide>*/}
                                {/*<SwiperSlide>Slide 2</SwiperSlide>*/}
                                {/*<SwiperSlide>Slide 3</SwiperSlide>*/}
                                {/*<SwiperSlide>Slide 4</SwiperSlide>*/}


                                {socialLinks.map((link, index) => (
                                    <SwiperSlide>
                                        <div key={index} className="col single-brand my-1">
                                            <h4 className="social">
                                                <a
                                                    style={{color: link.color}}
                                                    target="_blank"
                                                    href={link.url}
                                                    rel="noopener noreferrer"
                                                >
                                                    <i className={link.iconClass} aria-hidden="true"></i>
                                                    <br/>
                                                    {link.name}
                                                </a>
                                            </h4>
                                        </div>
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
