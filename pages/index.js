
import {
    Herobanner,
    Footerbanner
} from "../components";


import { client } from "../lib/client"

const Home = ({ products, bannerData }) => {

    return (
        <>
            <Herobanner heroBanner={bannerData.length && bannerData[0]} />

            <div className="products-heading">
                <h2>Best selling products</h2>
                <p>speakers of many variations</p>
            </div>

            <div className="products-container">
                {
                    products?.map(
                        (product) => product.name
                    )
                }
            </div>

            <Footerbanner />
        </>
    )
};


export const getServerSideProps = async () => {
    const query = '*[_type == "production"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
        props: { products, bannerData }
    }
}

export default Home