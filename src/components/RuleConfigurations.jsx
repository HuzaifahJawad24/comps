import React, {useState} from "react";
import RuleConfig from "./RuleConfig";

const RuleConfigurations = () => {
    const generateId = () => {
        return new Date().getMilliseconds();
    }

    const [configs, setConfigs] = useState([{id: generateId()}]);
    const onAdd = () => setConfigs((prev) => [...prev, {id: generateId()}]);
    const onRemove = (id) => setConfigs((prev) => {
        return prev.filter(e => e.id !== id);
    });

    const [first, ...rest] = configs;

    return (
        <div>
            <RuleConfig key={first.id} onAdd={onAdd} id={first.id}/>
            {rest.map((e) =>
                <RuleConfig key={e.id} onRemove={onRemove} id={e.id}/>
            )}
            <button className="btn btn-primary btn-sm pull-right">Save</button>
        </div>
    );
}

export default RuleConfigurations;