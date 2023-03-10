import { useState } from 'react';
import { saveAs } from 'file-saver';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { handleMessageOpen, setMessage } from '../../../store/slices/messageCreated';
import { deleteDataFileLines, setDataFileLines } from '../../../store/slices/dataFile.js';

export const useLoadFile = () => {

    const [countOneLineFile, setCountOneLineFile] = useState();
    const { dataFinalFile } = useSelector(state => state.dataFile);
    const dispatch = useDispatch();

    const createFile = () => {

        const blob = new Blob([myValue], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'mi-archivo.txt');
    }

    const readFile = (valueFile) => {

        if (!valueFile) return;

        const fileReader = new FileReader();

        fileReader.readAsText(valueFile);

        fileReader.onload = () => {
            const newDataArray = fileReader.result.split("\r\n");
            const oneLineArray = newDataArray.slice(0, 1);
            const countDataArray = oneLineArray[0].split("|");
            setCountOneLineFile(countDataArray.length);
            if (countDataArray.length != 7) {
                dispatch(setMessage({ text: "El archivo no corresponde", severity: 'error' }))
                dispatch(handleMessageOpen());
                return;
            } else {
                dispatch(setMessage({ text: "El se cargo correctamente", severity: 'success' }))
                dispatch(handleMessageOpen());
                newDataArray.forEach(i => {
                    dispatch(setDataFileLines(i.split("|")));
                });
                dispatch(deleteDataFileLines());
                return;
            }


        };

        fileReader.onerror = () => {
            console.log(fileReader.error);
        };

    };

    return {
        countOneLineFile,
        dataFinalFile,
        createFile,
        readFile
    }
}
