import React from "react";

const ReactHooks = () => {
    const reactHooks = [
        'useState', 'useEffect', 'useMemo', 'useReducer', 'useContext', 'useRefs'
    ]
    return (
        <ol>
            {reactHooks.map((hook,index) => (
                <li key={index}> {hook} </li>
            ))}
        </ol>
    );
}

export default ReactHooks;