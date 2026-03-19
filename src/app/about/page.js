import React from 'react'
import Image from 'next/image'

const page = () => {

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

  return (
    <main className='relative wholeBg'>
      <section className="header_banner relative">
        <Image src="/aboutHero.png" alt="About us" width={1920} height={1080} className='w-full h-full object-cover' />

        <div className='absolute bottom-0 w-full min-[1400px]:pb-20 min-[992px]:pb-10 pb-6 min-[992px]:px-15 px-10 max-[576px]:px-6'>
          <div className='container max-w-full'>
            <h1 className="text-white min-[1700px]:w-[1300px] min-[1700px]:text-9xl min-[1400px]:text-8xl text-5xl min-[992px]:text-7xl font-['Michroma'] min-[1400px]:leading-[140px] min-[992px]:leading-[85px] leading-[60px] min-[992px]:w-[760px] min-[1400px]:w-[1000px] ">Not Your Typical Agency</h1>

            <div className='flex items-center justify-between min-[1600px]:mt-[60px] min-[992px]:mt-[30px] mt-5 gap-14 max-[992px]:flex-col max-[992px]:items-start max-[992px]:gap-5'>
              <p className="w-full max-w-[1250px] justify-start text-white min-[992px]:font-semibold font-medium leading-5">A modern digital agency built for the next generation of businesses. SKYNETECH blends creative design, advanced development, and strategic thinking to create digital experiences that engage users, strengthen brands, and drive real business growth. We build high-performance websites, applications, and digital products that help startups and businesses launch, scale, and succeed in the digital world.</p>

              <Image src="/startProject.svg" alt="project" width={100} height={100} className='w-auto h-auto cursor-pointer' />
            </div>
          </div>
        </div>
      </section>

      <section className='about_us stat_section mt-0 py-20 relative min-[992px]:px-15 px-10 max-[576px]:px-6'>
        <div className="statistics relative z-2">
          <div className="container max-w-full">
            <div className="grid min-[1250px]:grid-cols-4 min-[600px]:grid-cols-2 gap-6">
              {statistics.map((item, index) => (
                <div className="card px-16 py-6 bg-black/0 rounded-[40px]" style={{
                  boxShadow: '0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45'
                }} key={index}>
                  <div className="text-center">
                    <Image src={item.img} alt={item.title} className="mx-auto" width={60} height={60} />
                    <div className="text-center text-white min-[700px]:text-4xl text-3xl font-normal font-['Michroma'] leading-[48px]">{item.number}</div>
                    <p className="text-center font-light text-white text-base leading-6 mt-1">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="self-stretch justify-start text-white text-lg font-medium leading-7 mt-[25px]">At SKYNETECH, we believe a great digital product is more than just a website it's an experience. Our team blends modern design, powerful development, and smart strategy to build digital solutions that help brands connect with people and grow online. We focus on creating high-performance websites, apps, and digital platforms that are visually strong, technically reliable, and built to scale with your business. As a growing digital startup, we move fast, think creatively, and collaborate closely with our clients to turn ideas into impactful digital experiences.</p>

          </div>

          <div className='relative'>
            <Image src="/aboutMain.png" alt="About us" width={1920} height={1080} className='w-full h-full object-cover' />
            <Image src="/glass_ball.png" alt="About us" width={114} height={114} className='absolute top-[131px] left-[-40px]' />
          </div>
        </div>
      </section>

      <div className="statistics relative z-2 mt-10">
        <div className="container max-w-full">
          <div className="grid grid-cols-1 mt-6">
            <div className="card min-[1200px]:px-15 px-10 max-[576px]:p-6 relative z-2 py-10 bg-black/0 rounded-[40px] max-[1000px]:flex-col flex justify-between min-[1100px]:items-center promotion max-[1100px]:gap-6" style={{
              boxShadow: '0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45'
            }}>
              <div className="">
                <h2 className="text-white text-2xl min-[780px]:text-3xl min-[1200px]:text-4xl font-normal font-['Michroma'] leading-[48px]">Ready to grow your brand digitally?</h2>
                <p className="text-white text-lg leading-7 mt-2">Let's work together to create something impactful.</p>
              </div>

              <button>
                <img src="/getinTouch_2.svg" alt="Get in Touch" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page