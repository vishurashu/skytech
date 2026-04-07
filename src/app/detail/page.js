"use client";

import React from 'react'
import Image from 'next/image'
import { useEffect, useRef } from "react";
import Link from 'next/link';

const page = () => {

    const feedback = [
        {
            review: 'Working with SKYNETECH completely transformed our online presence. Their team delivered a modern website and a strong brand identity that truly represents our business.',
            img: '/client-1.png',
            name: 'Amit Sharma',
            profession: 'Startup Founder'
        },
        {
            review: 'The SKYNETECH team understands design and technology extremely well. They built our platform with great performance and a clean user experience.',
            img: '/client-2.png',
            name: 'Sarah Johnson',
            profession: 'Product Manager'
        },
        {
            review: 'From branding to development, the process was smooth and professional. SKYNETECH helped us launch a digital product that our users love.',
            img: '/client-3.png',
            name: 'Daniel Carter',
            profession: 'Business Owner'
        },
        {
            review: 'Their creativity and technical expertise helped elevate our brand. The final result exceeded our expectations.',
            img: '/client-4.png',
            name: 'Priya Mehta',
            profession: 'Marketing Director'
        },
    ]

    const services = [
        {
            service: ["Branding", "Web Design", "Development", "Strategy"],
        }
    ]

    const companies = [
        { img: '/mockup_1.png' },
        { img: '/mockup_2.png' },
        { img: '/mockup_3.png' },
        { img: '/mockup_4.png' },
        { img: '/mockup_5.png' },
        { img: '/mockup_6.png' },
    ]

    const trackRef = useRef(null);

    useEffect(() => {
        let position = 0;
        const speed = 0.9;

        const animate = () => {
            position -= speed;
            if (Math.abs(position) >= trackRef.current.scrollWidth / 2) {
                position = 0;
            }
            trackRef.current.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, []);

    return (
        <main className='relative wholeBg'>
            <section className="header_banner relative">
                <Image src="/portfolioDetails.png" alt="About us" width={1920} height={950} className='w-full h-full object-cover max-[1500px]:h-[750px] max-[768px]:h-[850px] max-[420px]:h-[930px]' />

                <div className='absolute bottom-0 w-full min-[1400px]:pb-20 min-[992px]:pb-14 pb-8 min-[992px]:px-[87px] px-10 max-[576px]:px-6'>
                    <div className='container max-w-full'>
                        <div className="text-white min-[1850px]:text-[120px] min-[1600px]:text-[102px] min-[1400px]:text-[85px] text-5xl min-[1030px]:text-[65px] max-[385px]:text-[40px] font-['Michroma'] min-[1700px]:leading-[140px] min-[1400px]:leading-[85px] min-[992px]:leading-[85px] leading-[60px] min-[992px]:pb-[66px] pb-10" style={{ borderBottom: '1px solid #DEE0E2' }}>Meridian</div>

                        <div className='flex items-center relative z-1 justify-between min-[1600px]:mt-[81px] min-[992px]:mt-[60px] mt-10 gap-14 max-[992px]:flex-col max-[992px]:items-start max-[992px]:gap-5'>

                            <div className='grid min-[1400px]:grid-cols-[0.8fr_0.6fr_1.6fr] min-[992px]:grid-cols-[0.8fr_2.2fr] grid-cols-1'>
                                <div>
                                    <div className="opacity-60 mb-4 flex items-center gap-4 justify-start text-white text-xs font-bold uppercase leading-4 tracking-tight">
                                        <div className='w-1.5 h-1.5 bg-white rounded-4xl'></div>
                                        services &nbsp; &nbsp; /</div>
                                    <ul className="text-white projects_type mt-5 min-[1000px]:mt-0">
                                        {services[0].service.map((s, i) => (
                                            <li className='mb-2' key={i}>{s}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className='max-[1400px]:hidden'>
                                    <div className="opacity-60 mb-4 flex items-center gap-4 justify-start text-white text-xs font-bold uppercase leading-4 tracking-tight">
                                        <div className='w-1.5 h-1.5 bg-white rounded-4xl'></div>
                                        location &nbsp; &nbsp; /</div>
                                    <p className='text-white text-base font-medium'>US</p>
                                </div>

                                <p className="w-full justify-start text-white font-medium leading-7 max-[992px]:mt-5">
                                    The first Visibility Engine that gets your brand ranked #1 by AI. In a nutshell, Meridian helps brands see what AI is saying about them, uncover opportunities to improve, and take action before anyone else. We worked with Meridian to build their brand from the ground up starting with strategy, shaping their identity, and designing and developing their website in Webflow.We began by understanding the business and audience, finding the emotional connection between the two, and defining what makes Meridian stand apart as the category leader in AI search visibility. From there, we built a clear positioning, a visual identity, and a brand that feels bold, credible, orward-thinking.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='app_screenshot relative pt-0 pb-6 bg-[#311300]'>
                <div className='bg-[#F75D00] py-[106px] overflow-hidden w-full'>
                    <div ref={trackRef}
                        className="flex items-center min-[1300px]:gap-15 gap-10 w-max">
                        {[...companies, ...companies].map((item, index) => (
                            <div key={index} className="relative flex-shrink-0">
                                <Image src={item.img} alt="mockup" width={260} height={520} />
                                <div className="overlay"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='container max-w-full z-1 relative pt-[106px] px-5'>
                    <Image src="/website_1.png" alt="mockup" width={1024} height={1200} className='mx-auto' />
                </div>
            </section>

            <section className="clients_feedback relative pt-[107px] pb-15 min-[992px]:px-[87px] px-10 max-[576px]:px-6">
                <div className="container max-w-full z-1 relative">

                    <div className='card rounded-[53px] p-[34px] mb-[107px] max-[768px]:mb-[50px] max-[576px]:p-6' style={{
                        boxShadow: '0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45'
                    }}>
                        <div className='flex items-center justify-between mb-12 '>
                            <div className="opacity-60 flex items-center gap-4 justify-start text-white text-xs font-bold uppercase leading-4 tracking-tight">
                                <div className='w-1.5 h-1.5 bg-white rounded-4xl'></div>
                                Outcome
                            </div>
                            <p>/</p>
                            <div>
                                <Link href={'/'} aria-label="Live website" className='flex items-center gap-10'>Live Website
                                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.6001 5.59961L11.6001 0.599609M16.6001 5.59961L11.6001 10.5996M16.6001 5.59961H0.600098" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </Link>
                            </div>
                        </div>

                        <div className="justify-center min-[1250px]:w-[1160px] text-white text-2xl min-[992px]:text-3xl min-[1200px]:text-4xl font-normal font-['Michroma'] min-[1400px]:pb-[106px] pb-15 leading-[48px] max-[576px]:leading-[35px] max-[576px]:text-lg">Staged for the stratosphere the new Meridian website & brand went viral on launch, resulting in massive demand for trial requests of the platform. Our design & development was robust and intentionally scalable, blending a unique identity with a back end to support the ambitious plans for expansion.
                        </div>

                        <div className='grid max-[700px]:grid-cols-[0.8fr_1.2fr_1.0fr] pt-3 min-[700px]:grid-cols-[0.8fr_0.6fr_1.6fr] mt-[10px]'  style={{ borderTop: '1px solid #42474C' }}>
                            <p className='text-white text-base font-medium'>CSSDA</p>

                            <p className='text-white text-base font-medium'>Site of the Day</p>

                            <p className='text-white text-base font-medium text-end'>2025</p>
                        </div>
                    </div>

                    <div className="p-4 bg-black/0 rounded-[40px] inline-flex mt-20 justify-center items-center gap-2.5" style={{
                        boxShadow: '0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45'
                    }}>
                        <div className="justify-start text-white font-bold font-['Inter'] leading-5">Client Feedback</div>
                    </div>

                    <div className="mt-4 text-white max-[576px]:text-4xl text-5xl min-[969px]:text-6xl min-[1125px]:text-7xl font-normal font-['Michroma'] min-[1200px]:leading-[88px] leading-[68px] max-[576px]:leading-[53px]">What Our Clients Say</div>
                    <p className="text-white mt-7 text-lg max-[576px]:text-[16px]">Real feedback from businesses and startups that have partnered with SKYNETECH to build modern digital experiences and powerful online platforms.</p>

                    <div className="grid grid-cols-1 min-[576px]:grid-cols-2 min-[1400px]:grid-cols-4 mt-16 gap-6">
                        {feedback.map((item, index) => (
                            <div className="p-7 rounded-[20px] feedback_class  flex flex-col justify-between" key={index}>
                                <p className="text-white text-sm sm:text-base md:text-lg lg:text-lg font-medium">
                                    "{item.review}"
                                </p>

                                <div className="mt-7 flex items-center gap-3">
                                    <img src={item.img} width={65} height={65} alt={item.name} />

                                    <div>
                                        <div className="text-white text-lg font-medium">{item.name}</div>
                                        <div className="justify-center text-gray-500 text-[12px] mt-2 font-medium leading-3">{item.profession}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="feedback-bg absolute w-full h-[300px] top-0 left-0 -z-1"></div>
                <div className="feedback-circle-1 blur-circle max-[768px]:hidden"></div>
                <div className="feedback-circle-2 blur-circle max-[1400px]:hidden"></div>
                <div className="feedback-circle-3 blur-circle"></div>
                <div className="feedback-circle-4 blur-circle"></div>
                <div className="feedback-circle-5 blur-circle"></div>
                <div className="feedback-circle-6 blur-circle"></div>
            </section>
        </main>
    )
}

export default page