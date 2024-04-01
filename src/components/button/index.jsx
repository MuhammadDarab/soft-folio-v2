import { ArrowUpRight } from "react-feather";

const RoundedButton = ({ label, onClick, sx }) => {
    return (        
        <div className='flex justify-between' style={sx}>
            <div className="cursor-pointer bg-gray-700 text-gray-100 rounded-full w-fit p-4 text-3xl flex items-center" onClick={onClick}>
                <div>{label}</div>
                <div className="bg-gray-100 rounded-full p-4 ml-2">
                <ArrowUpRight color="rgb(55 65 81 / 1)" />
                </div>
            </div>
        </div>
    );
}
 
export default RoundedButton;