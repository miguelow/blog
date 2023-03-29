import Link from 'next/link'
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost(){
    return(
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <p><Link href="/">return Home</Link></p>
            <h1>First post</h1>
        </Layout>
    )
}