import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SiteLayout from "../../layouts/SiteLayout";

const About = () => {
  return (
    <div>
      <Head>
        <title>TheLazyAgent</title>
        <meta name="description" content="TheLazyAgent" />
        <link rel="icon" href="/zyro-image.png" />
      </Head>

      <section
        aria-labelledby="feature-five"
        id="feature-five"
        class="overflow-y-auto bg-white lg:h-screen"
      >
        <div class="px-8 py-24 mx-auto lg:px-16 max-w-7xl md:px-12 xl:px-36 lg:flex">
          <div class="lg:w-1/2">
            <div class="top-0 pt-8 pb-16 lg:sticky">
              <div>
                <div class="lg:pr-24 md:pr-12">
                  <div>
                    <p class="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                      Febriari Candra Guritno
                    </p>
                    <p class="max-w-xl mt-4 text-lg tracking-tight text-gray-600">
                      As an individual with a disability, specifically diagnosed
                      with Single Sided Deafness (hearing loss in one ear), I
                      have overcome challenges to pursue my passion for computer
                      science. I recently graduated with a Bachelor`s degree in
                      Computer Science, specializing in software engineering.
                    </p>
                  </div>
                  <div class="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                    <a
                      href="https://www.linkedin.com/in/febriari-candra-guritno-3795221bb/"
                      class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                    >
                      Connect LinkedIn
                    </a>
                    <a
                      href="mailto: lasttimelazy@gmail.com"
                      class="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                    >
                      Contact me
                      <span aria-hidden="true"> → </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2">
            <div class="flex-shrink-0">
              <div>
                <ul
                  class="grid grid-cols-1 gap-12 mt-6 list-none lg:mt-0 lg:gap-24"
                  role="list"
                >
                  <li>
                    <div>
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="mt-5 text-lg font-medium leading-6 text-black">
                        Tools for every stack
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Competing in the $5 trillion global ecommerce market
                      requires an international presence that doesnt get lost in
                      translation. Join us as we traverse the globe to explore
                      the many benefits of offering localized, optimized payment
                      experiences that are achievable in minutes, not months.
                    </div>
                  </li>
                  <li>
                    <div>
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="mt-5 text-lg font-medium leading-6 text-black">
                        Prebuilt integrations
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Join Lexingtøn Themes engineers and designers for a
                      technical look at Lexingtøn Themes Apps. Youll hear
                      directly from the makers, get a full developer demo, and
                      leave the session with everything you need to get started.
                    </div>
                  </li>
                  <li>
                    <div>
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="mt-5 text-lg font-medium leading-6 text-black">
                        Tools for every stack
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      To achieve global net zero emissions by 2050, we need not
                      only to reduce emissions but also remove huge amounts of
                      carbon from the atmosphere and oceans. Learn more about
                      Lexingtøn Themes Climates work to build the worlds largest
                      carbon removal coalition and invest in the most promising
                      early-stage solutions.
                    </div>
                  </li>
                  <li>
                    <div>
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="mt-5 text-lg font-medium leading-6 text-black">
                        Tools for every stack
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Banking-as-a-service has made it possible for any company
                      to easily offer financial services tailored to customers
                      specific needs. Hear from a range of businesses on how
                      theyre using BaaS in radically different ways.
                    </div>
                  </li>
                  <li>
                    <div>
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="mt-5 text-lg font-medium leading-6 text-black">
                        Tools for every stack
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Competing in the $5 trillion global ecommerce market
                      requires an international presence that doesnt get lost in
                      translation. Join us as we traverse the globe to explore
                      the many benefits of offering localized, optimized payment
                      experiences that are achievable in minutes, not months.
                    </div>
                  </li>
                  <li>
                    <div>
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="mt-5 text-lg font-medium leading-6 text-black">
                        Prebuilt integrations
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Join Lexingtøn Themes engineers and designers for a
                      technical look at Lexingtøn Themes Apps. Youll hear
                      directly from the makers, get a full developer demo, and
                      leave the session with everything you need to get started.
                    </div>
                  </li>
                  <li>
                    <div>
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="mt-5 text-lg font-medium leading-6 text-black">
                        Tools for every stack
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      To achieve global net zero emissions by 2050, we need not
                      only to reduce emissions but also remove huge amounts of
                      carbon from the atmosphere and oceans. Learn more about
                      Lexingtøn Themes Climates work to build the worlds largest
                      carbon removal coalition and invest in the most promising
                      early-stage solutions.
                    </div>
                  </li>
                  <li>
                    <div>
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="mt-5 text-lg font-medium leading-6 text-black">
                        Tools for every stack
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Banking-as-a-service has made it possible for any company
                      to easily offer financial services tailored to customers
                      specific needs. Hear from a range of businesses on how
                      theyre using BaaS in radically different ways.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

// define layout for about page
About.getLayout = (page) => {
  return <SiteLayout> {page} </SiteLayout>;
};
