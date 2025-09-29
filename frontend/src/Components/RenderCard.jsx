import { Link } from "react-router-dom";

export const RenderCard = ({curr}) => {
    const { image , title , price , description , category , id} = curr;
    return (<>
        <Link to={`/product/${id}`} className="flex flex-col gap-2 items-center w-[20vw] p-2 bg-zinc-900 rounded-lg">
            <div className="cardTop border-b-1 w-full flex justify-center h-[55%]">
                <div className="w-[15vw] h-full">
                    <img className="w-full h-full object-cover" src={image} />
                </div>
            </div>
            <div className="cardBottom flex flex-col gap-2 ">
                <h1 className="font-black" >{title}</h1>
                <h3> <span>{price}</span> </h3>
                <p>Desc: <span className="text-zinc-400 text-sm">{description.slice(0, 50)}.. <small className="text-blue-500">more</small></span></p>
                <p>Category : <span className="bg-green-500 px-1 py-0.5 rounded-lg text-sm">{category}</span></p>

            </div>
        </Link>
    </>)
}