// import ExportExcel from 'react-export-excel';
import Button from '@mui/material/Button'

// const ExcelFile = ExportExcel.ExcelFile;
// const ExcelSheet = ExportExcel.ExcelSheet;
// const ExcelColumn = ExportExcel.ExcelColumn;

export const ExportExcelFile = ({ data = [] }) => {
    console.log("🚀 ~ data:", data);
    return (
        <>
            {/* <ExcelFile
                element={
                    <Button variant="text">
                        Exportar a Excel
                    </Button>
                }
                filename="Informe Final"
            >
                <ExcelSheet data={data} name="Informe">
                    <ExcelColumn label="Mes" value={mes} />
                </ExcelSheet>
            </ExcelFile> */}
        </>
    )
}
