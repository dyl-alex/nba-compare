import CompareGraph from "./CompareGraph"
import CompareStatsContainer from "./CompareStatsContainer"

const CompareContainer = () => {

    

    return (
        <div>
            <div className="flex w-full">
                <div className="flex-1">
                    <CompareStatsContainer/>
                </div>
                <div className="flex-1">
                    <CompareGraph/>
                </div>
                <div className="flex-1">
                    <CompareStatsContainer/>
                </div>
            </div>
        </div>
    )
}

export default CompareContainer