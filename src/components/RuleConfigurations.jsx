import React, { useState } from "react";
import RuleConfig from "./RuleConfig";

const RuleConfigurations = () => {
    const [boxElementCount, setBoxElementCount] = useState(1);
    return (
        <div>
            <RuleConfig onAdd={() => setBoxElementCount(boxElementCount + 1)}/>
            {Array(boxElementCount - 1).fill(0).map(() =>
                <RuleConfig onRemove={() => setBoxElementCount(boxElementCount - 1)}/>
            )}
            <button className="btn btn-primary btn-sm pull-right mr-5">Save</button>
        </div>
    );
}

export default RuleConfigurations;