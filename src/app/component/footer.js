"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {

    const pathname = usePathname();

    return (
        <div className="footer_bg ">
            <footer className='self-stretch min-[992px]:px-15 px-10 relative overflow-hidden footer_section py-10 border-t border-white'>
                <div className='container max-w-full '>
                    <div className='min-[1100px]:p-16 p-12 max-[576px]:p-8 bg-black/0 rounded-[40px] footer_wrapper'>
                        <div className="grid grid-cols-1 min-[1200px]:grid-cols-2 justify-between items-center gap-10"
                        >
                            <div className="">
                                <h6 className="justify-start text-white max-[576px]:text-4xl text-5xl min-[780px]:text-6xl min-[992px]:text-7xl font-normal font-['Michroma'] max-[576px]:leading-[53px]">Stay in the loop</h6>
                                <div className="self-stretch justify-start mt-3 text-white text-lg font-medium font-['Inter'] leading-7">Get insights delivered straight to your inbox</div>
                            </div>
                            <div className="">
                                <div className="flex justify-start min-[1200px]:justify-end items-center gap-2">
                                    <input type="text" className="form-control ps-3 w-88 px-3 py-2 bg-Opacity-Transparent/0 rounded-[56px] outline outline-1 outline-white h-15" name="" id=""
                                        aria-describedby="helpId" placeholder="Your email" />
                                    <button className="main_btn">
                                        <Image src="/getInTouch_btn.svg" alt="Get in touch" width={137} height={62} className="relative w-full" />
                                    </button>
                                </div>
                                <p className='text-white text-start min-[1200px]:text-end mt-3'>We respect your privacy. Unsubscribe anytime.</p>
                            </div>
                        </div>

                       <div className="grid grid-cols-1 min-[1100px]:grid-cols-[2.4fr_0.6fr] justify-between items-end gap-2 mt-3 footer_tabs gap-6 min-[1100px]:gap-0">
                            <div className="">
                                <Image src="/main_logo.svg" alt="Skynetech" width={240} height={80} className="relative" />

                                <ul className="flex-1 flex justify-start flex-wrap gap-y-4 items-center gap-12 m-0 p-0">
                                    <li>
                                        <Link href="/" className={`text-white text-decoration-none ${pathname === "/" ? "active" : ""}`}>
                                            Home
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/portfolio" className={`text-white text-decoration-none ${pathname === "/portfolio" ? "active" : ""}`}>
                                            Portfolio
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/services" className={`text-white text-decoration-none ${pathname === "/services" ? "active" : ""}`}>
                                            Services
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/about" className={`text-white text-decoration-none ${pathname === "" ? "active" : ""}`}>
                                            Get in Touch
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/about" className={`text-white text-decoration-none ${pathname === "/terms" ? "active" : ""}`}>
                                            Terms
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/about" className={`text-white text-decoration-none ${pathname === "/privacy-policy" ? "active" : ""}`}>
                                            Privacy Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <div className="flex min-[1100px]:justify-end justify-center items-center gap-6">
                                    <Link href={''} target="_blank"><FaTwitter fill="#fff" size={24} /></Link>
                                    <Link href={''} target="_blank"><FaFacebook fill="#fff" size={24} /></Link>
                                    <Link href={''} target="_blank"><FaLinkedin fill="#fff" size={24} /></Link>
                                    <Link href={''} target="_blank"><FaInstagram fill="#fff" size={24} /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="copyright_text mt-3">
                            <p className="min-[1100px]:text-end text-center text-white pt-2 mt-3">
                                ©2026 Skynetech. All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer-circle-1"></div>
                <div className="footer-circle-2"></div>
                <div className="footer-circle-3"></div>
            </footer >
        </div>
    )
}

export default Footer