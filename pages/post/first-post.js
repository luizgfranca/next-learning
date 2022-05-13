import Head from "next/head";
import Link from "next/link";
import { Layout } from "../../component/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First post</title>
            </Head>
            
            <h1>This is the first post</h1>
            
        </Layout>
    )
}