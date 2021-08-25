import Layout from '../../components/layout'
import { getAllPostIds } from '../../lib/posts'

export default function Post() {
    return <Layout>(something codes)</Layout>
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}