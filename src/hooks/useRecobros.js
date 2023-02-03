import { useEffect, useState } from 'react';
import { getAplicacion } from '../helper/fetchRecobros';

export const useRecobros = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [aplicaciones, setAplicaciones] = useState()

    useEffect(() => {
        getAplicacion()
            .then(data => {
                setIsLoading(false)
                setAplicaciones(data)
            })
        console.log('se disparo fetchRecobros')
    }, [])


    return {
        isLoading,
        aplicaciones
    }
}
