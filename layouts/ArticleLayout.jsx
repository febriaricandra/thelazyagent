// ./layouts/ArticleLayout.jsx

import Head from "next/head";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";

const ArticleLayout = ({ markdoc, children }) => {
  const { title, description, cover } = markdoc?.frontmatter;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/zyro-image.png" />
      </Head>
      <SiteHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-16">
        <article className="prose prose-lg max-w-none">
          <div className="mt-6 mb-12">
            <Image src={cover} alt="cover" className="w-1/2 mx-auto" />
          </div>
          {children}
        </article>
      </main>

      <footer class="border-t border-gray-200">
        <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
          <div class="flex flex-col items-start justify-between pt-16 pb-6 gap-y-12 lg:flex-row lg:items-center lg:py-16">
            <div>
              <div class="flex items-center text-black">
                <div>
                  <p class="font-semibold leading-6 text-black uppercase">
                    TheLazyAgent
                  </p>
                  <p class="mt-1 text-sm">Unwrapped your mind.</p>
                </div>
              </div>
              <nav class="flex gap-8 mt-11">
                <a
                  class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]"
                  href="https://threads.net/fcguritno"
                >
                  <span class="relative z-10">
                    Threads
                  </span>
                </a>
                <a
                  class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]"
                  href="https://nextjs.org/"
                >
                  <span class="relative z-10">Nextjs</span>
                </a>
                <a
                  class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]"
                  href="https://tailwindcss.com/"
                >
                  <span class="relative z-10">Tailwind</span>
                </a>
                <a
                  class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]"
                  href="https://www.linkedin.com/in/febriari-candra-guritno-3795221bb/"
                >
                  <span class="relative z-10">LinkedIn</span>
                </a>
              </nav>
            </div>
            <div class="relative flex items-center self-stretch p-4 -mx-4 transition-colors group hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
              <div class="relative flex items-center justify-center flex-none w-24 h-24 bg-black rounded-xl">
                <Image
                  src="/zyro-image.png"
                  width={200}
                  height={200}
                  alt="cover"
                />
              </div>
              <div class="ml-8 lg:w-64">
                <p class="text-base font-semibold text-black">
                  <a href="#">
                    <span class="absolute inset-0 sm:rounded-2xl"></span>Stay
                    updated
                  </a>
                </p>
                <p class="mt-1 text-sm text-gray-500 hover:text-blue-600">
                  Follow us for social media for news and updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ArticleLayout;
