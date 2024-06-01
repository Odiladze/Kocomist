import React from "react";
import Link from "next/link";
import Image from "next/image";

let defaultTransform: number = 0;
let isReversed: boolean = false;
function goNext(): void {
  defaultTransform -= isReversed ? -400 : 400;
  let slider: HTMLElement = document.getElementById("slider")!;
  if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) {
    defaultTransform = 0;
    isReversed = false;
  }
  slider.style.transform = `translateX(${defaultTransform}px)`;
}

function goPrev(): void {
  if (isReversed) {
    defaultTransform = defaultTransform - 3;
    if (defaultTransform <= 350) {
      isReversed = false;
      defaultTransform = 0;
    }
  } else {
    defaultTransform = defaultTransform + 350;
    if (
      Math.abs(defaultTransform) >
      document.getElementById("slider")!.scrollWidth / 1
    ) {
      isReversed = true;
      defaultTransform =
        -1 * (document.getElementById("slider")!.scrollWidth - 800);
    } else if (defaultTransform > 0) {
      defaultTransform = 0;
    }
  }
  document.getElementById(
    "slider"
  )!.style.transform = `translateX(${defaultTransform}px)`;
}

export default function Carouselle() {
  const imageLoader = (url: any) => {
    return url;
  };

  return (
    <div>
      <div className=" flex items-center bg- justify-center w-full h-full py-24 sm:py-8 px-4">
        <div className=" w-full relative flex items-center justify-center">
          <button
            aria-label="slide backward"
            className="absolute z-30 left-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
            id="previous"
            onClick={goPrev}
          >
            <svg
              className="dark:text-white"
              width="24"
              height="48"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L1 7L7 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
            <div
              id="slider"
              className="  h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
            >
              <div className=" flex flex-shrink-0 relative w-full sm:w-auto ">
                {/* from here */}
                <Link
                  href="/product/Raw-Shea-Butter-Hydrate-Repair-Shampoo?lang=geo"
                  passHref
                >
                  <div className=" wrap object-cover overflow-hidden w-[296px] h-[485px] hover:bg-white">
                    <Image
                      loader={() =>
                        imageLoader(
                          "https://i.postimg.cc/d1BtD9JY/raw-shea-shampoo-front.png"
                        )
                      }
                      src="https://im.vsco.co/aws-us-west-2/a332fc/152265923/63daf307c883893b077071a0/vsco_020223.jpg?w=897.01171875&dpr=2"
                      layout="fill"
                      alt="black chair and white table"
                      className="object-cover overflow-hidden w-[296px] h-[485px] hover:bg-white"
                    />
                    <div className=" borderradiuscarousel bg-gray-200 bg-opacity-20 absolute w-full h-full p-6">
                      <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-black dark:text-white">
                        შამპუნი
                      </h2>
                      <div className="flex h-full items-end pb-2">
                        <h3 className="text-xl lg:text-xl font-semibold leading-5 lg:leading-6 text-black dark:text-white">
                          ნედლი შიის კარაქის ჰიდრატი/აღმდგენი შამპუნი
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              {/* to there */}

              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                {/* from here */}
                <Link
                  href="/product/Virgin-Coconut-Oil-Daily-Hydration-Shampoo"
                  passHref
                >
                  <div className="wrap object-cover overflow-hidden w-[296px] h-[485px] hover:bg-white">
                    <Image
                      loader={() =>
                        imageLoader(
                          "https://i.postimg.cc/kGLr5VRC/coconut-shampoo-front-view.png"
                        )
                      }
                      src="https://im.vsco.co/aws-us-west-2/a332fc/152265923/63daf307c883893b077071a0/vsco_020223.jpg?w=897.01171875&dpr=2"
                      layout="fill"
                      alt="black chair and white table"
                      className="object-cover overflow-hidden w-[296px] h-[485px] hover:bg-white"
                    />
                    <div className="borderradiuscarousel bg-gray-200 bg-opacity-20 absolute w-full h-full p-6">
                      <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-black dark:text-white">
                        შამპუნი
                      </h2>
                      <div className="flex h-full items-end pb-2">
                        <h3 className="text-xl lg:text-xl font-semibold leading-5 lg:leading-6 text-black dark:text-white">
                          ქოქოსის ზეთის დღიული ჰიდრატი შამპუნი
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                {/* from here */}
                <Link
                  href="/product/Jamaican-Black-Castor-Oil-Strengthen&Restore-Shampoo"
                  passHref
                >
                  <div className="wrap object-cover overflow-hidden w-[296px] h-[485px] hover:bg-white">
                    <Image
                      loader={() =>
                        imageLoader(
                          "https://i.postimg.cc/SRc0JS6z/Jamaican-black-castor-shamp-front-view.png"
                        )
                      }
                      src="https://im.vsco.co/aws-us-west-2/a332fc/152265923/63daf307c883893b077071a0/vsco_020223.jpg?w=897.01171875&dpr=2"
                      layout="fill"
                      alt="black chair and white table"
                      className="object-cover overflow-hidden w-[296px] h-[485px] hover:bg-white"
                    />
                    <div className="borderradiuscarousel  bg-gray-200 bg-opacity-20 absolute w-full h-full p-6">
                      <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-black dark:text-white">
                        შამპუნი
                      </h2>
                      <div className="flex h-full items-end pb-2">
                        <h3 className="text-xl lg:text-xl font-semibold leading-5 lg:leading-6 text-black dark:text-white">
                          იამაიკური შავი აბუსალათინის ზეთის შამპუნი
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                {/* from here */}
                <Link
                  href="/product/Hydrate-&-Repair-Honey-&-Yogurt-Shampoo"
                  passHref
                >
                  <div className="wrap object-cover overflow-hidden w-[296px] h-[485px] hover:bg-white">
                    <Image
                      loader={() =>
                        imageLoader(
                          "https://i.postimg.cc/fRTFhjrd/honey-hogurt-shampoo-front.png"
                        )
                      }
                      src="https://im.vsco.co/aws-us-west-2/a332fc/152265923/63daf307c883893b077071a0/vsco_020223.jpg?w=897.01171875&dpr=2"
                      layout="fill"
                      alt="black chair and white table"
                      className="object-cover overflow-hidden w-[296px] h-[485px] hover:bg-white"
                    />
                    <div className="borderradiuscarousel  bg-gray-200 bg-opacity-20 absolute w-full h-full p-6">
                      <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-black dark:text-white">
                        შამპუნი
                      </h2>
                      <div className="flex h-full items-end pb-2">
                        <h3 className="text-xl lg:text-xl font-semibold leading-5 lg:leading-6 text-black dark:text-white">
                          თაფლის და იოგურტის ჰიდრატი/აღმდგენი შამპუნი
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                {/* from here */}
                <Link
                  href="/product/Raw-Shea-Butter-Hydrate-Repair-Conditioner"
                  passHref
                >
                  <div className="wrap object-cover overflow-hidden w-[296px] h-[485px] hover:bg-white">
                    <Image
                      loader={() =>
                        imageLoader("https://i.postimg.cc/cCbjpRf1/1.png")
                      }
                      src="https://im.vsco.co/aws-us-west-2/a332fc/152265923/63daf307c883893b077071a0/vsco_020223.jpg?w=897.01171875&dpr=2"
                      layout="fill"
                      alt="black chair and white table"
                      className="object-cover overflow-hidden w-[296px] h-[485px] hover:bg-white"
                    />
                    <div className="borderradiuscarousel  bg-gray-200 bg-opacity-20 absolute w-full h-full p-6">
                      <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-black dark:text-white">
                        ბალზამი
                      </h2>
                      <div className="flex h-full items-end pb-2">
                        <h3 className="text-xl lg:text-xl font-semibold leading-5 lg:leading-6 text-black dark:text-white">
                          ნედლი შიის კარაქის ჰიდრატი/აღმდგენი ბალზამი
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                {/* from here */}
                <Link
                  href="/product/Virgin-Coconut-Oil-Daily-Hydration-Conditioner"
                  passHref
                >
                  <div className="wrap object-cover overflow-hidden w-[296px] h-[485px] hover:bg-white">
                    <Image
                      loader={() =>
                        imageLoader("https://i.postimg.cc/9FxZjx4Y/3.png")
                      }
                      src="https://im.vsco.co/aws-us-west-2/a332fc/152265923/63daf307c883893b077071a0/vsco_020223.jpg?w=897.01171875&dpr=2"
                      layout="fill"
                      alt="black chair and white table"
                      className="object-cover overflow-hidden w-[296px] h-[485px] hover:bg-white"
                    />
                    <div className="borderradiuscarousel  bg-gray-200 bg-opacity-20 absolute w-full h-full p-6">
                      <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-black dark:text-white">
                        ბალზამი
                      </h2>
                      <div className="flex h-full items-end pb-2">
                        <h3 className="text-xl lg:text-xl font-semibold leading-5 lg:leading-6 text-black dark:text-white">
                          ქოქოსის ზეთის დღიული ჰიდრატი ბალზამი
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                {/* from here */}
                <Link
                  href="/product/Jamaican-Black-Castor-Oil-Strengthen&Restore-Conditioner"
                  passHref
                >
                  <div className="wrap object-cover overflow-hidden w-[296px] h-[485px] hover:bg-white">
                    <Image
                      loader={() =>
                        imageLoader("https://i.postimg.cc/t4ZP85Dc/7.png")
                      }
                      src="https://im.vsco.co/aws-us-west-2/a332fc/152265923/63daf307c883893b077071a0/vsco_020223.jpg?w=897.01171875&dpr=2"
                      layout="fill"
                      alt="black chair and white table"
                      className="object-cover overflow-hidden w-[296px] h-[485px] hover:bg-white"
                    />
                    <div className="borderradiuscarousel  bg-gray-200 bg-opacity-20 absolute w-full h-full p-6">
                      <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-black dark:text-white">
                        ბალზამი
                      </h2>
                      <div className="flex h-full items-end pb-2">
                        <h3 className="text-xl lg:text-xl font-semibold leading-5 lg:leading-6 text-black dark:text-white">
                          იამაიკური შავი აბუსალათინის ზეთის ბალზამი
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                {/* from here */}
                <Link
                  href="/product/Hydrate-&-Repair-Honey-&-Yogurt-Conditioner"
                  passHref
                >
                  <div className="wrap object-cover overflow-hidden w-[296px] h-[485px] hover:bg-white">
                    <Image
                      loader={() =>
                        imageLoader("https://i.postimg.cc/02pDHpD9/5.png")
                      }
                      src="https://im.vsco.co/aws-us-west-2/a332fc/152265923/63daf307c883893b077071a0/vsco_020223.jpg?w=897.01171875&dpr=2"
                      layout="fill"
                      alt="black chair and white table"
                      className="object-cover overflow-hidden w-[296px] h-[485px] hover:bg-white"
                    />
                    <div className="borderradiuscarousel bg-gray-200 bg-opacity-20 absolute w-full h-full p-6">
                      <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-black dark:text-white">
                        ბალზამი
                      </h2>
                      <div className="flex h-full items-end pb-2">
                        <h3 className="text-xl lg:text-xl font-semibold leading-5 lg:leading-6 text-black dark:text-white">
                          თაფლის და იოგურტის ჰიდრატი/აღმდგენი ბალზამი
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                {/* from here */}
                <Link href="/product/Turmeric-Powder" passHref>
                  <div className="wrap object-cover overflow-hidden w-[296px] h-[485px] hover:bg-white">
                    <Image
                      loader={() =>
                        imageLoader("https://i.postimg.cc/8cVyDF2y/Koco-Mist-Turmeric-2-fn.png")
                      }
                      src="https://im.vsco.co/aws-us-west-2/a332fc/152265923/63daf307c883893b077071a0/vsco_020223.jpg?w=897.01171875&dpr=2"
                      layout="fill"
                      alt="black chair and white table"
                      className="object-cover overflow-hidden w-[296px] h-[485px] hover:bg-white"
                    />
                    <div className="borderradiuscarousel  bg-gray-200 bg-opacity-20 absolute w-full h-full p-6">
                      <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-black dark:text-white">
                        ფხვნილი
                      </h2>
                      <div className="flex h-full items-end pb-2">
                        <h3 className="text-xl lg:text-xl font-semibold leading-5 lg:leading-6 text-black dark:text-white">
                          კურკუმა
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                {/* from here */}
                <Link href="/product/Detox-Tea" passHref>
                  <div className="wrap object-cover overflow-hidden w-[296px] h-[485px] hover:bg-white">
                    <Image
                      loader={() =>
                        imageLoader("https://i.postimg.cc/PxD6BbRp/Detox-Tea-3-fn.png")
                      }
                      src="https://im.vsco.co/aws-us-west-2/a332fc/152265923/63daf307c883893b077071a0/vsco_020223.jpg?w=897.01171875&dpr=2"
                      layout="fill"
                      alt="black chair and white table"
                      className="object-cover overflow-hidden w-[296px] h-[485px] hover:bg-white"
                    />
                    <div className="borderradiuscarousel  bg-gray-200 bg-opacity-20 absolute w-full h-full p-6">
                      <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-black dark:text-white">
                        ჩაი
                      </h2>
                      <div className="flex h-full items-end pb-2">
                        <h3 className="text-xl lg:text-xl font-semibold leading-5 lg:leading-6 text-black dark:text-white">
                          დეტოქსიკაციის ჩაი
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <button
            aria-label="slide forward"
            className="absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
            id="future"
            onClick={goNext}
          >
            <svg
              className="dark:text-white"
              width="24"
              height="48"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
