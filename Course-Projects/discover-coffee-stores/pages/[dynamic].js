import { useRouter } from "next/router"
import Head from 'next/head'

const DynamicPage = () => {
    const router = useRouter();
    const query = router.query.dynamic;

    console.log("query", query);

    return (
        <div>
            <Head>
                <title>{query}</title>
            </Head>
            Hello there is: {query}
        </div>
    );
};

export default DynamicPage;