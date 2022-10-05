const ReactHooks = () => {
    const reactHooks = [
        'useState', 'useEffect', 'useMemo', 'useReducer', 'useContext', 'useRefs'
    ]
    return (
        <ol>
            {reactHooks.map((hook) => (
                <li key={index}> {hook} </li>
            ))}
        </ol>
    );
}

export default ReactHooks;