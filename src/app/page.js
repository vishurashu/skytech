"use client";

import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {

  const [active, setActive] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [canLoadSpline, setCanLoadSpline] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 992);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    // Defer heavy Spline loading to improve PageSpeed score
    const timer = setTimeout(() => {
      setCanLoadSpline(true);
    }, 2000);

    return () => {
      window.removeEventListener("resize", checkScreen);
      clearTimeout(timer);
    };
  }, []);


  const about = [
    {
      img: '/Quality_img.svg',
      title: 'Quality-Driven Work',
      content: 'Even as a startup, we believe quality should never be compromised. Every project we deliver is designed with attention to detail and performance in mind.'
    },
    {
      img: '/digital_img.svg',
      title: 'Smart Digital Strategy',
      content: "We don't just design   we plan. Every project starts with understanding the brand, the audience, and the long-term vision."
    },
    {
      img: '/fast_img.svg',
      title: 'Fast & Focused Execution',
      content: 'Startups move fast, and so do we. Our agile workflow helps us deliver modern digital solutions quickly and efficiently.'
    },
  ]

  const statistics = [
    {
      img: '/project_stat.png',
      number: '25+',
      title: 'Projects Completed'
    },
    {
      img: '/clients_stat.png',
      number: '15+',
      title: 'Happy Clients'
    },
    {
      img: '/creators_stat.png',
      number: '5+',
      title: 'Digital Creators'
    },
    {
      img: '/innovation_stat.png',
      number: '100%',
      title: 'Passion for Innovation'
    },
  ]

  const services = [
    {
      heading: 'Brand Strategy & Identity',
      content: 'We help businesses define their brand identity through strategy, logo design, visual systems, and brand guidelines that create a strong and consistent presence.',
      path: '',
      img: '/strategy_img.svg'
    },
    {
      heading: 'Web & App Design',
      content: 'We design modern, user-focused digital experiences that balance aesthetics with usability to create engaging and intuitive interfaces.',
      path: '',
      img: '/design_img.svg'
    },
    {
      heading: 'Development & Digital Platforms',
      content: 'We build fast, scalable, and secure websites and applications using modern technologies to support business growth.',
      path: '',
      img: '/development_img.svg'
    },
    {
      heading: 'Creative Media & Digital Marketing',
      content: 'We build fast, scalable, and secure websites and applications using modern technologies to support business growth.',
      path: '',
      img: '/media_img.svg'
    },
  ]

  const companies = [
    { img: '/company_1.svg' },
    { img: '/company_2.svg' },
    { img: '/company_3.svg' },
    { img: '/company_4.svg' },
    { img: '/company_5.svg' },
    /*  { img: '/company_6.svg' }, */
    { img: '/company_7.svg' },
    { img: '/company_8.svg' },
    { img: '/company_9.svg' },
  ]

  const projects = [
    {
      title: "Meridian",
      description:
        "An AI-powered analytics platform designed to help brands understand how AI is influencing their digital presence.",
      services: ["Branding", "Web Design", "Web Development", "Strategy", "UI"],
      location: "US",
      images: [
        "/project_1.png",
        "/project_2.png",
      ],
    },
    {
      title: "Heimdall Power",
      description:
        "A modern digital platform created to present Heimdall Power’s technology.",
      services: [
        "3D Animation",
        "Graphic Design",
        "UI/UX Design",
        "Web Development",
        "Motion",
      ],
      location: "US",
      images: [
        "/heimdall-1.png",
        "/heimdall-2.png",
      ],
    },
    {
      title: "Cula",
      description:
        "A futuristic digital experience designed to explore carbon management solutions through immersive visuals, interactive dashboards, and modern product storytelling.",
      services: ["Branding", "Web Design", "Web Development", "Strategy", "UI"],
      location: "US",
      images: [
        "/cula-1.webm",
        "/cula-2.png",
      ],
    },
    {
      title: "Arqitel",
      description:
        "A visually driven website experience that showcases architectural innovation through immersive layouts, interactive elements, and modern web technology.",
      services: [
        "3D Animation",
        "Graphic Design",
        "UI/UX Design",
        "Web Development",
        "Motion",
      ],
      location: "US",
      images: [
        "/arqitel-1.webm",
        "/arqitel-2.png",
      ],
    },
  ];

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

  const trackRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;

    let position = 0;
    const speed = 0.9;
    let animationId;
    let trackWidth = trackRef.current.scrollWidth / 2;

    const updateWidth = () => {
      if (trackRef.current) {
        trackWidth = trackRef.current.scrollWidth / 2;
      }
    };
    window.addEventListener("resize", updateWidth);

    const animate = () => {
      if (!trackRef.current) return;
      position -= speed;
      if (Math.abs(position) >= trackWidth) {
        position = 0;
      }
      trackRef.current.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", updateWidth);
    };
  }, []);



  return (
    <main className="relative">
      <section className="header_banner relative max-[768px]:mt-[100px]" style={{ minHeight: '100vh' }}>
        {canLoadSpline && (
          <>
            <Script
              type="module"
              src="https://unpkg.com/@splinetool/viewer@1.12.69/build/spline-viewer.js"
              strategy="lazyOnload"
            />
            <spline-viewer
              url="https://prod.spline.design/6PPzV2EcRbTTLY32/scene.splinecode"
            ></spline-viewer>
          </>
        )}


        <div className="spline_overlay max-[768px]:hidden"></div>
        <div className="spline_overlay2"></div>
      </section>

      {/* <div></div> */}

      <section className="homeBg pt-20 max-[768px]:pt-0">
        <section className="about_us pb-20 relative min-[992px]:px-[87px] px-10 max-[576px]:px-6">
          <div className="container relative max-w-full">
            <div className="p-4 bg-black/0 rounded-[40px] inline-flex justify-center items-center gap-2.5"
              style={{
                boxShadow: '0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45'
              }}>
              <div className=" text-white font-bold font-['Inter'] leading-5">Discover our Story</div>
            </div>

            <div className=" text-white mt-4 max-[576px]:mt-1 text-4xl min-[780px]:text-6xl min-[1200px]:text-7xl font-normal font-['Michroma'] leading-[88px]">About Us</div>
            <p className="text-white mt-7 max-[576px]:mt-2 text-lg">SKYNETECH is a growing digital agency built for the new generation of brands. We combine creativity, technology, and strategy to design digital experiences that help businesses launch, scale, and stand out. As a startup team, we move fast, adapt quickly, and focus on building smart solutions that create real impact. From websites and applications to branding and digital content, our goal is simple   help businesses grow in the digital world.</p>

            <div className="grid min-[1300px]:grid-cols-[2.2fr_0.8fr] min-[1100px]:grid-cols-[1.8fr_1.2fr] gap-4 mt-10 z-1 relative">
              <div>
                <img src="/about_us.png" alt="About us" loading="lazy" />
              </div>
              <div className="grid grid-rows-3 max-[1100px]:gap-y-5">
                {about.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-2">
                      <img src={item.img} alt="" loading="lazy" />
                      <div className=" text-white text-xl font-bold leading-6">{item.title}</div>
                    </div>
                    <p className=" text-white mt-2 text-base font-light leading-6">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-circle-1 blur-circle" ></div>
            <div className="about-circle-2 blur-circle" ></div>
          </div>

          <div className="statistics relative z-2 mt-10">
            <div className="container max-w-full">
              <div className="grid min-[1250px]:grid-cols-4 min-[600px]:grid-cols-2 gap-6">
                {statistics.map((item, index) => (
                  <div className="card px-16 py-6 bg-black/0 rounded-[40px]" key={index}>
                    <div className="text-center">
                      <Image src={item.img} alt={item.title} className="mx-auto w-[60px] h-[60px]" width={60} height={60} />
                      <div className="text-center text-white min-[700px]:text-4xl text-3xl font-normal font-['Michroma'] leading-[48px] mt-3">{item.number}</div>
                      <p className="text-center font-light text-white text-base leading-6 mt-1">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 mt-6">
                <div className="card min-[1200px]:px-15 px-10 max-[576px]:p-6 relative z-2 py-10 bg-black/0 rounded-[40px] max-[1000px]:flex-col flex justify-between min-[1100px]:items-center promotion max-[1100px]:gap-6">
                  <div className="">
                    <h2 className="text-white text-2xl min-[780px]:text-3xl min-[1200px]:text-4xl font-normal font-['Michroma'] leading-[48px]">Ready to grow your brand digitally?</h2>
                    <p className="text-white text-lg leading-7 mt-2">Let's work together to create something impactful.</p>
                  </div>

                  <Link href={'/contact'}>
                    <img src="/getinTouch_2.svg" alt="Get in Touch" loading="lazy" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="about-circle-3 blur-circle"></div>
          <div className="about-circle-4 blur-circle z-1"></div>
        </section>

        <section className="services relative min-[992px]:px-[87px] px-10 max-[576px]:px-6">
          <div className="container relative z-1 max-w-full">
            <h2 className="text-white text-3xl min-[780px]:text-4xl min-[1200px]:text-6xl font-normal leading-[45px] min-[780px]:leading-[55px] min-[1200px]:leading-[76px]">We don't just build digital products, we create experiences that help brands grow.</h2>

            <p className=" text-white text-lg font-medium font-['Inter'] leading-7 mt-7 mb-16">At SKYNETECH, we combine design, technology, and strategy to help startups and businesses launch powerful digital experiences.</p>

            <div className="grid grid-cols-1 max-[1100px]:grid-cols-2 max-[768px]:grid-cols-1 gap-6">
              {services.map((item, index) => (
                <div key={index} className="card p-2.5 bg-black/0 rounded-[53px] max-[576px]:rounded-[24px] relative services_card">
                  <div className="grid min-[1100px]:grid-cols-[1.0fr_1.2fr_0.8fr] grid-cols-1 max-[1100px]:pb-5 pt-2 items-start min-[1280px]:items-center max-[1400px]:items-center min-[1400px]:items-start">
                    <div className="hidden justify-center max-[1100px]:flex ">
                      <img src={item.img} className="max-[768px]:w-full max-[768px]:px-1" alt={item.heading} loading="lazy" />
                    </div>

                    <div className="flex items-start min-[1600px]:mt-12 max-[1600px]:mt-8 ps-5 max-[1400px]:mt-1 max-[1100px]:mt-4">
                      <h3 className="text-white font-normal text-3xl min-[1280px]:text-4xl min-[1580px]:text-5xl font-['Michroma'] leading-[44px] min-[1280px]:leading-[58px] min-[1580px]:leading-[68px]">
                        {item.heading}<br />
                      </h3>
                    </div>

                    <div className="flex items-start justify-start max-[1100px]:mt-6 max-[1600px]:mt-8 min-[1600px]:mt-12 flex-col px-6">
                      <p className="self-stretch text-white text-lg font-medium leading-7">
                        {item.content}
                      </p>

                      <div className="mt-9 max-[1100px]:mt-6">
                        <Link href={item.path}>
                          <img src="/learn_more.svg" alt="Learn more" loading="lazy" />
                        </Link>
                      </div>
                    </div>

                    <div className="flex justify-end max-[1100px]:hidden">
                      <img src={item.img} className="" alt={item.heading} loading="lazy" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="services-circle-1 blur-circle"></div>
          <div className="services-circle-2 blur-circle"></div>
          <div className="services-circle-3 blur-circle"></div>
          <div className="services-circle-4 blur-circle"></div>
        </section>

        <section className="partners mt-20 min-[992px]:px-[87px] px-10 max-[576px]:px-6">
          <div className="container max-w-full">
            <div className="mt-16 relative">
              <div className="overflow-hidden w-full">
                <div
                  ref={trackRef}
                  className="flex items-center min-[1300px]:gap-15 gap-10 w-max"
                >
                  {[...companies, ...companies].map((item, index) => (
                    <div key={index} className="relative flex-shrink-0">
                      <Image src={item.img} alt="company logo" width={110} height={60} />
                      <div className="overlay"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="fade-left"></div>
              <div className="fade-right"></div>
            </div>
          </div>
        </section>

        <section className="projects relative py-20 z-2">
          <div className="min-[992px]:px-[87px] px-10 max-[576px]:px-6">
            <div className="container relative max-w-full pb-16 overflow-hidden" style={{
              background: 'background: linear-gradient(182deg, #01010100 0%, #01010169 100%)', backdropFilter: 'blur(15px)'
            }}>
              <div className="grid grid-cols-1 mt-6">
                <div className="flex justify-between items-start gap-y-5 min-[1000px]:items-end min-[1000px]:flex-row flex-col">
                  <div className="">
                    <h2 className="text-white max-[576px]:text-4xl min-[780px]:text-4xl min-[1200px]:text-6xl font-normal font-['Michroma'] max-[576px]:leading-[53px] leading-[88px]">Recent Digital Creations</h2>
                    <p className="text-white text-lg leading-7 mt-8">Innovative platforms, brand experiences, and digital products designed to help modern businesses grow.</p>
                  </div>

                  <Link href={'/portfolio'}>
                    <img src="/viewAll.svg" alt="Get in Touch" loading="lazy" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            {projects.map((project, index) => (
              <div
                key={index}
                onMouseEnter={() => {
                  if (!isDesktop) return;
                  setActive(index);
                }}
                onMouseLeave={() => isDesktop && setActive(null)}
                className={`border-t overflow-hidden border-b min-[1400px]:px-[87px] px-14 max-[768px]:px-8 relative py-10 min-[1200px]:py-16 transition-all duration-500 ${active === index ? "border-red-500" : "border-gray-500"}`}>
                <div className="container max-w-full">
                  <div className="grid relative z-1 min-[1400px]:grid-cols-[1.2fr_1.2fr_0.6fr] min-[1000px]:grid-cols-[0.9fr_1.5fr_0.6fr] grid-cols-1">

                    <h5 className="text-white text-3xl min-[780px]:text-4xl min-[1200px]:text-6xl font-normal font-['Michroma'] leading-[56px] min-[1200px]:leading-[76px]">
                      {project.title}
                    </h5>

                    <p className="w-[450px] hidden min-[1000px]:block text-white text-lg font-medium leading-7">
                      {project.description}
                    </p>

                    <ul className="text-white projects_type mt-5 min-[1000px]:mt-0">
                      {project.services.map((service, i) => (
                        <li key={i}>{service}</li>
                      ))}
                      <li className="mt-7">{project.location}</li>
                    </ul>

                  </div>

                  <div
                    className={`projects_image relative flex flex-col max-[992px]:flex-col-reverse transition-all duration-500 ease-in-out ${isDesktop
                      ? active === index
                        ? "max-h-[900px] opacity-100 mt-6"
                        : "max-h-0 opacity-0"
                      : "max-h-[900px] opacity-100 mt-6"
                      }`}
                  >
                    <div className="max-[992px]:mt-3 relative z-2">
                      <Link href={"/detail"}>
                        <div className=" min-[992px]:p-5 p-4 bg-black/0 rounded-[31px] inline-flex justify-center items-center gap-2.5 w-auto"
                          style={{
                            boxShadow: '0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45'
                          }}>
                          <div className="flex items-center gap-2 text-white text-base font-bold leading-5" >
                            Learn more <FaArrowRightLong />
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="grid grid-cols-[2.0fr_1.0fr] max-[768px]:grid-cols-1 projects_showcase gap-6 mt-3 projects_img relative z-2">
                      {project.images.map((img, i) => {
                        const isVideo = img.endsWith(".webm") || img.endsWith(".mp4");

                        return (
                          <div
                            key={i}
                            className={`relative h-fit p-2 
          ${i === 1 ? "max-[768px]:hidden" : ""}
          min-[1400px]:rounded-[40px] 
          min-[1200px]:rounded-[34px] 
          min-[992px]:rounded-[30px] 
          max-[992px]:rounded-[28px]`}
                            style={{
                              boxShadow:
                                "0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45",
                            }}
                          >
                            {isVideo ? (
                              <video
                                src={img}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover rounded-4xl"
                              />
                            ) : (
                              <Image
                                src={img}
                                alt=""
                                fill
                                className="object-cover rounded-lg h-full"
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="inner-projects-circle-1 blur-circle"></div>
                    <div className="inner-projects-circle-2 blur-circle"></div>
                    <div className="inner-projects-circle-3 blur-circle max-[992px]:hidden"></div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </section>

        <section className="clients_feedback relative pb-15 min-[1400px]:px-[87px] px-14 max-[768px]:px-8">
          <div className="container max-w-full z-1 relative">
            <div className="p-4 bg-black/0 rounded-[40px] inline-flex justify-center items-center gap-2.5" style={{
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
                    <img src={item.img} width={65} height={65} alt={item.name} loading="lazy" />

                    <div>
                      <h6 className="text-white text-lg font-medium">{item.name}</h6>
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
        </section>
      </section>
    </main>
  );
}