import React, {useState} from "react";
import RuleConfig from "./RuleConfig";
import PlusCircleIcon from '../icons/plus-circle.svg';

const RuleConfigurations = () => {
    const generateId = () => {
        return new Date().getMilliseconds();
    }

    const [configs, setConfigs] = useState([{id: generateId()}]);
    const onAdd = () => setConfigs((prev) => [...prev, {id: generateId()}]);
    const onRemove = (id) => setConfigs((prev) => prev.filter(e => e.id !== id));

    return (
        <div>
            Rule Configurations &nbsp; <img src={PlusCircleIcon} alt="Add More" onClick={() => onAdd()}/>
            {configs.map((e) =>
                <RuleConfig key={e.id} onRemove={configs.length > 1 ? onRemove : undefined} id={e.id}/>
            )}
            <button className="btn btn-primary btn-sm pull-right">Save</button>
        </div>
    );
}

export default RuleConfigurations;