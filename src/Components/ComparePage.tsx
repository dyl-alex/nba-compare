import { Button } from "@mui/material"
import CompareContainer from "./CompareContainer"
import { useNavigate } from "react-router-dom";

const ComparePage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <div>
            <div className="w-full h-screen">
                <div className="w-[90%] h-full bg-slate-200 m-auto">
                    <div className="flex w-full bg-slate-100 pb-5">
                        <div className="flex-none mt-3 pl-3 fixed">
                            <Button variant="contained" size="large" onClick={handleClick}>Return</Button>
                        </div>
                        <div className="flex-initial w-full text-2xl mt-3">Compare</div>
                    </div>
                    <CompareContainer/>
                </div>
                
            </div>
        </div>
    )
}

export default ComparePage