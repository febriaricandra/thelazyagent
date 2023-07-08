// ./pages/index.js

import Head from "next/head";
import styles from "../styles/Home.module.css";
import SiteLayout from "../layouts/SiteLayout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TheLazyAgent</title>
        <meta name="description" content="TheLazyAgent" />
        <link rel="icon" href="/zyro-image.png" />
      </Head>

      <section>
        <div class="items-center px-8 py-12 mx-auto max-w-7xl lg:px-16 md:px-12 lg:py-24">
          <div class="justify-center w-full text-center lg:p-10 max-auto">
            <div class="flex flex-col justify-center w-full mx-auto items-center">
              <Image
                src="/zyro-image.png"
                alt="TheLazyAgent"
                width={200}
                height={200}
                className=""
              />
              <p class="mt-8 text-5xl font-medium tracking-tighter text-black">
                TheLazyAgent
              </p>
              <p class="max-w-xl mx-auto mt-4 text-lg tracking-tight text-gray-600">
                Febriari Candra Guritno`s personal website and blog. I write about tech, programming, and life.🚀
                the content here is still under construction, so please be patient.🙏
              </p>
            </div>
            <div class="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto mt-10 lg:flex-row">
              <Link
                href={"/articles"}
                class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
              >
                Articles
              </Link>
              <a
                href="https://github.com/febriaricandra"
                class="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
              >
                Portofolio
                <span aria-hidden="true"> → </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// define layout for home page
Home.getLayout = (page) => {
  return <SiteLayout> {page} </SiteLayout>;
};
