// import { useSelector } from "react-redux"
import { RenderCard } from "../Components/RenderCard";
import { useEffect, useState } from "react";
import { instance } from "../api/axios-config";
import InfiniteScroll from 'react-infinite-scroll-component';


export const Products = () => {

    // const product = useSelector((state) => {
    //     return state.products
    // })

    const [product, setProduct] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    const fetchProduct = async () => {
        try {
            const { data } = await instance.get(`/products?_limit=5&_start=${product.length}`);
            if (data.length == 0) {
                setHasMore(false);
            }
            else {
                setHasMore(true);
                setProduct([...product, ...data]);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    const renderProduct = product.map((curr) => {
        return <RenderCard key={curr.id} curr={curr} />
    })



    return product.length > 0 ? (
        <div className="w-full h-full flex flex-col items-center p-4">
            <h1 className="font-semibold text-4xl mb-7">Products</h1>
            <div className="w-full h-full flex bg-white ">
                <div className="leftFilter w-[28vw] h-screen border-zinc-400  relative">
                    <div className="w-full h-full border-zinc-400">

                    </div>
                </div>
                <div className="rightPart w-[72vw]">
                    <InfiniteScroll
                        dataLength={product.length}
                        next={fetchProduct}
                        hasMore={hasMore}
                        loader={<h1 className="text-black">Loading...</h1>}
                        endMessage={<p className="text-black text-center"> You have seen it all </p>}>
                        <div className="flex flex-wrap gap-3 justify-center p-3">
                            {renderProduct}
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
        </div>) : (<h1>Loading...</h1>)
}