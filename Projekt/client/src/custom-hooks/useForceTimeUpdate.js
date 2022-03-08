import { useState, useCallback } from 'react'

const useForceTimeUpdate = () => {
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    return forceUpdate
}

export default useForceTimeUpdate