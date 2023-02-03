import { recobrosApi } from '../api/recobrosApi';

const getAplicacion = async () => {
    try {
        const resp = await recobrosApi.get("listar");
        const { data } = resp;
        // console.log('data', data.response)
        return data.response;
    } catch (err) {
        console.log('err', err)
    }
}

export {
    getAplicacion
}





// export const fetchRecobros = async() => {
//     const resp = await fetch('src/data/recobrosData.json');
//     const data = await resp.json();
//     console.log('resp', data)
// }