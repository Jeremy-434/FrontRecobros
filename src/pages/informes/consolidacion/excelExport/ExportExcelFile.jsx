import ReactHTMLTableToExcel from 'react-html-table-to-excel-3';
import { makeStyles } from '@mui/styles';
import { StyledTableCell } from '../../../layout';
import { Box, Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import { loadingConsolidados } from '../../../../store/apis/consolidados/thunks';
import { theme } from '../../../../theme/theme';
import { ImportExport } from '@mui/icons-material';

const useStyles = makeStyles({
  buttonExportExcel: {
    backgroundColor: 'white',
    border: `2px solid ${theme.palette.primary.main}`, /* Green */
    borderRadius: 4,
    color: theme.palette.primary.main,
    fontWeight: 600,
    height: 36,
    width: '100%',
    padding: '0',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.main + '30',
    },
  },
  table: {
    display: 'none'
  }
});

const encabezadoDeTabla = [
  {
    title: "Mes",
    sxhead: { textAlign: 'left', paddingLeft: 20 }
  },
  { title: "Año" },
  { title: "Registro" },
  {
    title: "Nombre",
    sxhead: { minWidth: '120px' }
  },
  // { title: "Servicio" },
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
  { title: "Descripción CECO emisor" },
  { title: "Cantidad" },
  { title: "Tarifa" },
  { title: "Costo" },
  { title: "Detalle" },
  { title: "Regional" },
  { title: "Localidad" },
  { title: "Serial" },
  { title: "Nombre del PC" },
  { title: "Producto instalado" },
  { title: "Fecha" },
  { title: "Fecha de modificación" },
  { title: "Estado del registro" },
  { title: "Aplicacion" },
  { title: "Servicio" },
  { title: "Aliado" },
  // { title: "id_aplicacion" },
  // { title: "id_control_archivo" },
  // { title: "id_servicio" },
  // { title: "id_aliado" },
]

export const ExportExcelFile = () => {

  const { consolidados, error } = loadingConsolidados();
  const classes = useStyles();

  return (
    <>
      {/* //* REACT HTML TABLE TO EXCEL */}
      <ReactHTMLTableToExcel
        id="buttom-export-excel"
        table="tableConsolidado"
        filename="Consolidado"
        sheet="Informe Final"
        buttonText={
          <Box display="flex" justifyContent="center" alignItems="center" >
            Exportar excel
            <ImportExport sx={{ fontSize: 20, ml: 1 }} />
          </Box>
        }
        className={classes.buttonExportExcel}
      />
      <Box className={classes.table}>
        <Paper sx={{ width: '100%' }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table" id="tableConsolidado">
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
                  : consolidados ?
                    <TableBody>
                      {
                        consolidados.map((consolidado) => (
                          <TableRow
                            key={consolidado.idConsolidado}
                          >
                            <StyledTableCell>{consolidado.mes}</StyledTableCell>
                            <StyledTableCell>{consolidado.anio}</StyledTableCell>
                            <StyledTableCell>{consolidado.registro}</StyledTableCell>
                            <StyledTableCell>{consolidado.nombre}</StyledTableCell>
                            <StyledTableCell>{consolidado.nombreServicio}</StyledTableCell>
                            <StyledTableCell>{consolidado.subServicio}</StyledTableCell>
                            <StyledTableCell>{consolidado.claseActividad}</StyledTableCell>
                            <StyledTableCell>{consolidado.claseCosto}</StyledTableCell>
                            <StyledTableCell>{consolidado.driver}</StyledTableCell>
                            <StyledTableCell>{consolidado.centroCostoReceptor}</StyledTableCell>
                            <StyledTableCell>{consolidado.descripcionCecoEmisor}</StyledTableCell>
                            <StyledTableCell>{consolidado.cantidad}</StyledTableCell>
                            <StyledTableCell>{consolidado.tarifa}</StyledTableCell>
                            <StyledTableCell>{consolidado.costo}</StyledTableCell>
                            <StyledTableCell>{consolidado.detalle}</StyledTableCell>
                            <StyledTableCell>{consolidado.regional}</StyledTableCell>
                            <StyledTableCell>{consolidado.localidad}</StyledTableCell>
                            <StyledTableCell>{consolidado.serial}</StyledTableCell>
                            <StyledTableCell>{consolidado.nombrePc}</StyledTableCell>
                            <StyledTableCell>{consolidado.productoInstalado}</StyledTableCell>
                            <StyledTableCell>{consolidado.fecha}</StyledTableCell>
                            <StyledTableCell>{consolidado.fechaModificacion}</StyledTableCell>
                            <StyledTableCell>{consolidado.estadoRegistro}</StyledTableCell>
                            <StyledTableCell>{consolidado.idAplicacionNavigation.nombreAplicacion}</StyledTableCell>
                            <StyledTableCell>{consolidado.idServicioNavigation.nombreServicio}</StyledTableCell>
                            <StyledTableCell>{consolidado.idAliadoNavigation.nombreAliado}</StyledTableCell>
                            <StyledTableCell sxbody={{
                              textAlign: 'center',
                              padding: 'auto',
                              display: 'flex',
                              justifyContent: 'space-around'
                            }}
                            >
                            </StyledTableCell>
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
