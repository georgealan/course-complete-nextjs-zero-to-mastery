/* eslint-disable react/jsx-no-undef */
import { useRouter } from "next/dist/client/router";
import Link from 'next/link';

import coffeeStoresData from '../../data/coffee-stores.json';

export function getStaticProps(staticProps) {
    const params = staticProps.params;

    return {
        props: {
            coffeeStore: coffeeStoresData.find(coffeeStore => {
                return coffeeStore.id.toString() === params.id;
            }),
        },
    };
}

export function getStaticPaths() {
    return {
        paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
        fallback: true,
    };
}

const CoffeeStore = (props) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            Coffee Store Page {router.query.id}
            <Link href="/">
                <a>Back to home</a>
            </Link>

            <p>{props.coffeeStore.address}</p>
            <p>{props.coffeeStore.name}</p>
        </div>
    );
};

export default CoffeeStore;