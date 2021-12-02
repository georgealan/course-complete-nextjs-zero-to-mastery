/* eslint-disable react/jsx-no-undef */
import { useRouter } from "next/dist/client/router";
import Link from 'next/link';

const CoffeeStore = () => {
    const router = useRouter();

    return (
        <div>
            Coffee Store Page {router.query.id}
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </div>
    );
};

export default CoffeeStore;