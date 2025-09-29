import { useSelector } from "react-redux"
import { RenderCard } from "../Components/RenderCard";

export const Products = () => {

    const product = useSelector((state) => {
        return state.products
    })

    return (<>
        <div className="flex flex-wrap gap-4 p-3">
            {product.data.length > 0 ? product.data.map((curr) => {

                return <RenderCard key={curr.id} curr={curr} />

            }) : <div>Loading...</div>}
        </div>
    </>)
}