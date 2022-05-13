import { Layout, siteTile } from "../component/layout";
import Head from "next/head";
import stylesUtil from "../styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const postsData = getSortedPostsData();
  return {
    props: { postsData }
  }
}

export default function Home({postsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTile}</title>
      </Head>

      <section className={stylesUtil.headingMd}>
        <p>
          My name is Luiz Gustao, i'm a brazilian software engineer. I'm
          fullstack but have a focuns on the backend :)
        </p>

        <Link href={'/post/first-post'}>
          <a className={stylesUtil.colorInherited}>
            See my first post
          </a>
        </Link>

        <p>
          (
            This is a sample website i did to learn the basics of next.js
          )
        </p>
      </section>

      <section className={`${stylesUtil.headingMd} ${stylesUtil.padding1px}`}>
        <h2 className={stylesUtil.headingLg}>Blog</h2>
        <ul className={stylesUtil.list}>
          {
            postsData.map(({id, date, title}) => {
              return (
                <li className={stylesUtil.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
              )
            })
          }
        </ul>
      </section>
    </Layout>
  );
}
