const PreodicItem = ({ url, values, title, lock, customClass }) => {
    return (
        <div className={"m-2" + (lock == true ? ' grayscale ' : '')}>
            <div className="w-fit rounded-xl">
                <div className="text-xl p-1">({values[0]})</div>
                <img src={url} alt="" className={"w-20 min-w-20 max-w-20 h-20 min-h-20 max-h-20 mx-6 object-contain " + customClass}  />
                <div className="text-lg pt-6 text-center font-bold">{title}</div>
                <div className="text-lg text-center font-light">{values[1]}</div>
            </div>
        </div>
    );
}
 
export default PreodicItem;