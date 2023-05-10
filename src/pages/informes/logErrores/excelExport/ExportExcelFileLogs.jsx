import ReactHTMLTableToExcel from 'react-html-table-to-excel-3';
import { makeStyles } from '@mui/styles';
import { StyledTableCell } from '../../../layout';
import { Box, Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import { theme } from '../../../../theme/theme';
import { FileDownload } from '@mui/icons-material';
import { loadingLogErroresJoinConsolidados } from '../../../../store/apis/logErroresJoinConsolidados/thunks';

const useStyles = makeStyles({
  buttonExportExcel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    border: `1px solid ${theme.palette.primary.main}`, /* Green */
    borderRadius: 4,
    color: theme.palette.primary.main,
    fontWeight: 600,
    height: 36,
    width: '100%',
    padding: '0',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.main + '10',
    },
  },
  table: {
    display: 'none'
  }
});

const encabezadoDeTabla = [
  {
    title: "Fecha",
    sxhead: { minWidth: '120px' }
  },
  {
    title: "Descripción",
    sxhead: { minWidth: '120px' }
  },
  {
    title: "Aliado",
    sxhead: { minWidth: '120px' }
  },
  {
    title: "Mes",
    sxhead: { textAlign: 'left', paddingLeft: 20 }
  },
  {
    title: "Año",
    sxhead: { minWidth: '120px' }
  },
  { title: "Registro" },
  {
    title: "Nombre",
    sxhead: { minWidth: '120px' }
  },
  {
    title: "Sub servicio",
    sxhead: { minWidth: '120px' }
  },
  {
    title: "Cl. Actividad",
    sxhead: { minWidth: '120px' }
  },
  {
    title: "Cl. Costo",
    sxhead: { minWidth: '120px' }
  },
  { title: "Driver" },
  {
    title: "CECO receptor",
    sxhead: { minWidth: '160px' }
  },
  { title: "Cantidad" },
  {
    title: "Aplicacion",
    sxhead: { minWidth: '120px' }
  },
  {
    title: "Servicio",
    sxhead: { minWidth: '120px' }
  },
]

export const ExportExcelFileLogs = () => {

  const { logErroresJoinConsolidado, error } = loadingLogErroresJoinConsolidados();
  const classes = useStyles();

  return (
    <>
      {/* //* REACT HTML TABLE TO EXCEL */}
      <ReactHTMLTableToExcel
        id="buttom-export-excel-logs-errors"
        table="tableJoinQuery"
        filename="Registro de errores"
        sheet="Logs errors"
        className={classes.buttonExportExcel}
        renderAsHidden={true}
      >
        <FileDownload sx={{ fontSize: 20, mr: 0.5 }} />
        EXPORTAR ARCHIVO
      </ReactHTMLTableToExcel>
      <Box className={classes.table}>
        <Paper sx={{ width: '100%' }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table" id="tableJoinQuery">
              <TableHead>
                <TableRow >
                  {encabezadoDeTabla.map(e => (
                    <StyledTableCell
                      key={e.title}
                      sxhead={e.sxhead}
                    >
                      {e.title}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>

              {
                error
                  ? console.error("Oh no, algo ha ocurrido")
                  : logErroresJoinConsolidado ?
                    <TableBody>
                      {
                        logErroresJoinConsolidado.map((logError) => (
                          <TableRow
                          key={logError.logError.idLogError}

                          >
                            <StyledTableCell>
                              {new Date(logError.logError.fechaServidor).toLocaleDateString() + ' ' + new Date(logError.logError.fechaServidor).toLocaleTimeString()}
                            </StyledTableCell>
                            <StyledTableCell>{logError.logError.descripcionError}</StyledTableCell>
                            <StyledTableCell>{logError.logError.idAliadoNavigation.nombreAliado}</StyledTableCell>
                            <StyledTableCell>{logError.logError.mes}</StyledTableCell>
                            <StyledTableCell>{logError.logError.anio}</StyledTableCell>
                            <StyledTableCell>{logError.consolidado.registro}</StyledTableCell>
                            <StyledTableCell>{logError.consolidado.nombre}</StyledTableCell>
                            <StyledTableCell>{logError.consolidado.subServicio}</StyledTableCell>
                            <StyledTableCell>{logError.consolidado.claseActividad}</StyledTableCell>
                            <StyledTableCell>{logError.consolidado.claseCosto}</StyledTableCell>
                            <StyledTableCell>{logError.consolidado.driver}</StyledTableCell>
                            <StyledTableCell>{logError.consolidado.centroCostoReceptor}</StyledTableCell>
                            <StyledTableCell>{logError.consolidado.cantidad}</StyledTableCell>
                            <StyledTableCell>{logError.consolidado.idAplicacionNavigation.nombreAplicacion}</StyledTableCell>
                            <StyledTableCell>{logError.consolidado.idServicioNavigation.nombreServicio}</StyledTableCell>
                          </TableRow>
                        ))
                      }
                    </TableBody>
                    : null
              }
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  )
}
