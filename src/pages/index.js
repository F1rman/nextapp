import Image from "next/image";
import localFont from "next/font/local";
import { placeholderService } from "@/services/placeholderService";
import Header from "./components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function getServerSideProps() {
  const data = await placeholderService.getAll();
  return {
    props: { data },
  };
}




export default function Home({ data }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] dark:bg-gray-900 dark:text-white`}
    >
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        {data.map((post) => (
          <div key={post.id} className="flex flex-col gap-4">
            <h2 className="text-2xl font-[family-name:var(--font-geist-mono)]">
              {post.title}
            </h2>
            <p>{post.body}</p>
            <a href={`/page/${post.id}`} className="text-blue-500 dark:text-blue-300"> Read more</a>
          </div>
        ))}
      </main>
    </div>
  );
}
