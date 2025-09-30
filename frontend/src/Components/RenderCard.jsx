import { Link } from "react-router-dom";

export const RenderCard = ({curr}) => {
    const { image , title , price , description , category , id} = curr;
    return (<>
        <Link to={`/product/${id}`} className="w-[20vw] h-[70vh] flex flex-wrap bg-[#F1E7C7] rounded-xl overflow-hidden">

            <div className="cardTop w-full h-[72%] flex justify-center ">
                <div className="w-[20vw] h-full">
                    <img className="w-full h-full object-cover " src={image} />
                </div>
            </div>
            <div className="cardBottom w-full h-[28%] p-2 flex flex-col gap-1 bg-[#FDF8E8]">
                <h1 className="font-bold text-sm">{title}</h1>
                <h3> <span>{price}</span> </h3>
            </div>
        </Link>
    </>)
}