import React, { useEffect, useRef, useState } from "react";
import { TiSocialTwitter } from "react-icons/ti";
import   './animationStayle.scss'
import { Link } from "react-router-dom";

const LogoCarousel = () => {
    const logosRef = useRef(null);
    const [animationSpeed, setAnimationSpeed] = useState(20); // Speed in seconds
    const [direction, setDirection] = useState("normal");

    useEffect(() => {
        const ul = logosRef.current;
        if (ul) {
            ul.insertAdjacentHTML("afterend", ul.outerHTML);
            ul.nextSibling.setAttribute("aria-hidden", "true");
        }
    }, []);

    useEffect(() => {
        if (logosRef.current) {
            logosRef.current.style.animationDuration = `${animationSpeed}s`;
            logosRef.current.style.animationDirection = direction;
        }
    }, [animationSpeed, direction]);

    return (
        <main className="relative  flex flex-col justify-center bg-white overflow-hidden font-inter antialiased">
            <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
                <div className="text-center">
                    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                        <ul
                            ref={logosRef}
                            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                            style={{
                                animationDuration: `${animationSpeed}s`,
                                animationDirection: direction,
                            }}
                        >
                            <li>
                                <Link to={'/books'}>
                                    <TiSocialTwitter className="text-violet-600 bg-transparent w-44  h-44" />
                                </Link>
                            </li>
                            <li>
                                <Link to={'/books'}>
                                    <TiSocialTwitter className="text-violet-600 bg-transparent w-44  h-44" />
                                </Link>
                            </li>
                            <li>
                                <Link to={'/books'}>
                                    <TiSocialTwitter className="text-violet-600 bg-transparent w-44  h-44" />
                                </Link>
                            </li>
                            <li>
                                <Link to={'/books'}>
                                    <TiSocialTwitter className="text-violet-600 bg-transparent w-44  h-44" />
                                </Link>
                            </li>
                            <li>
                                <Link to={'/books'}>
                                    <TiSocialTwitter className="text-violet-600 bg-transparent w-44  h-44" />
                                </Link>
                            </li>
                            <li>
                                <Link to={'/books'}>
                                    <TiSocialTwitter className="text-violet-600 bg-transparent w-44  h-44" />
                                </Link>
                            </li>
                            <li>
                                <Link to={'/books'}>
                                    <TiSocialTwitter className="text-violet-600 bg-transparent w-44  h-44" />
                                </Link>
                            </li>
                            <li>
                                <Link to={'/books'}>
                                    <TiSocialTwitter className="text-violet-600 bg-transparent w-44  h-44" />
                                </Link>
                            </li>
                            <li>
                                <Link to={'/books'}>
                                    <TiSocialTwitter className="text-violet-600 bg-transparent w-44  h-44" />
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default LogoCarousel;
