import Image from 'next/image';
import React from 'react';

import heroImg from '../../../assets/img/Hero img.png';
import { LinkItem } from '@/components/common';



function Features() {

  return (
    <section className="pt-12">
      {/* Section Inner  */}
      <div>
        {/* Section Bg */}
        <div className="container">
          {/* Container */}
            <div className='relative'>
            <div className="flex">
              <div className="w-1/2">
                <div className="2xl:max-w-[460px] mx-auto 2xl:py-[170px] py-[100px]">
                  <span className="font-bold text-fs23 leading-lh30 text-white tracking-wider capitalize mb-2">
                    Chase the new Flavour
                  </span>
                  <svg
                    className="mb-2"
                    width="40"
                    height="10"
                    viewBox="0 0 40 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.5014 9.5C37.0847 9.5 39.9998 7.48129 39.9998 4.99995C39.9998 2.51861 37.0847 0.5 33.5014 0.5C30.112 0.5 27.3219 2.30637 27.0298 4.6018H22.3527V3.6552L-0.000213623 3.6552V6.34446L22.3528 6.34446V5.39798H27.0299C27.3221 7.69352 30.112 9.5 33.5014 9.5ZM21.4896 5.54839L0.863079 5.54839V4.45161H21.4896V5.54839ZM27.866 4.99995C27.866 2.95778 30.3942 1.2964 33.5015 1.2964C36.6088 1.2964 39.137 2.95778 39.137 4.99995C39.137 7.04222 36.6088 8.7037 33.5015 8.7037C30.3942 8.7037 27.866 7.04222 27.866 4.99995Z"
                      fill="#DCCA87"
                    />
                  </svg>

                  <h1 className="font-bold text-fs90 leading-lh117 tracking-wider capitalize text-secondary mb-8">
                    The key to Fine dining
                  </h1>
                  <p className="font-normal text-base leading-lh28 tracking-wider text-silverChalice mb-3.2">
                    Sit tellus lobortis sed senectus vivamus molestie. Condimentum
                    volutpat morbi facilisis quam scelerisque sapien. Et,
                    penatibus aliquam amet tellus{' '}
                  </p>

                  <LinkItem name="Explore Menu" link="/explore-menu" />
                </div>
              </div>
              <div className="w-1/2">
                <div className="relative w-full h-full">
                  <Image
                    src={heroImg}
                    fill={true}
                    alt="Picture of hero image"
                    sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 font-semibold text-base leading-lh28 tracking-wider capitalize text-white mt-6.4" style={{ fontFeatureSettings: "'tnum' on, 'lnum' on"}}>
              <span>01</span>
              <span className="w-1.6 h-px bg-secondary"></span>
              <span>02</span>
              <span>03</span>
              <span>04</span>
            </div>

            <div className="absolute left-0 top-[calc(50%-81px)]">
              <ul className='flex gap-4 font-normal text-1.8 leading-3.2 tracking-wider text-white' style={{
                  textOrientation: 'mixed',
                  writingMode: 'vertical-rl',
                }}>
                <li>#Gericht</li>
                <li>#Bar</li>
              </ul>
            </div>

            <div className="hidden">
              <div className="h-[60px] bg-linear-gradient"></div>
              <span>Scroll</span>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
