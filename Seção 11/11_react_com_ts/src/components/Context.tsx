import React, {useContext} from 'react'

import { AppContext } from '../App';

const Context = () => {
    const details = useContext(AppContext);
    return (
        <>
            {details && (
                <div>
                    <h2>Linguagem: {details.language}</h2>
                    <h2>Framework: {details.framework}</h2>
                    <h2>Número de projetos: {details.projects}</h2>
                </div>
            )}
        </>
    )
}

export default Context