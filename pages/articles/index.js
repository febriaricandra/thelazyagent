// ./pages/articles/index.js

import fs from "fs";
import glob from "glob-promise";
import matter from "gray-matter";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import SiteLayout from "../../layouts/SiteLayout";

export const getStaticProps = async () => {
  // Find all Markdown files in the /articles directory
  const ARTICLES_DIR = path.join(process.cwd(), "pages/articles");
  const articlesPaths = await glob("**/*.md", { cwd: ARTICLES_DIR });

  console.log({ ARTICLES_DIR, articlesPaths });

  const articles = articlesPaths.map((articlePath) => {
    // get the slug from the markdown file name
    const slug = path.basename(articlePath, path.extname(articlePath));

    // read the markdown files
    const source = fs.readFileSync(
      path.join(process.cwd(), "pages/articles", articlePath),
      "utf8"
    );

    // use gray-matter to parse the article frontmatter section
    const { data } = matter(source);
    const { title, description, cover } = data;

    console.log({ data });

    return {
      title,
      description,
      cover,
      slug,
    };
  });

  return {
    props: {
      articles,
    },
  };
};

const Articles = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Articles</title>
        <meta name="description" content="View all my articles" />
        <link rel="icon" href="/zyro-image.png" />
      </Head>

      <section>
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div class="rounded-lg bg-gray-100 px-4 py-6 md:py-8 lg:py-12">
              <p class="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">
                All
              </p>

              <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Articles
              </h2>

              <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                Here you can find all my articles.
              </p>
            </div>
          </div>
        </div>

        <section class="bg-gray-100">
          <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
            <ol
              class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 sm:grid-cols-2"
              role="list"
            >
              {articles.map((article) => (
              <li key={article.slug} class="lgcol-span-2">
                <Link href={`/articles/${article.slug}`}>
                  <div class="flex items-end justify-center">
                    <div class="flex overflow-hidden">
                      <Image
                        class="object-cover w-full rounded-lg shadow-lg"
                        src={article.cover}
                        alt=""
                      />
                    </div>
                  </div>
                  <h3 class="mt-5 text-lg font-medium leading-6 text-black">
                    {article.title}
                  </h3>
                  <p class="mt-2 text-base text-gray-500 line-clamp-2">
                    {article.description}
                  </p>
                </Link>
              </li>
              ))}
            </ol>
          </div>
        </section>
      </section>
    </>
  );
};

export default Articles;

// define layout for articles page
Articles.getLayout = (page) => {
  return <SiteLayout> {page} </SiteLayout>;
};
