import { Box } from '@mui/material';

const containerInput = {
    textAlign: 'center',
    background: '#282828',
    borderTop: '5px solid #c39f77',
    padding: '50px 0',
    borderRadius: '6px',
    width: '50%',
    margin: '0 auto',
    marginBottom: '20px',
}

const inputFile = {
    width: '0.1px;',
    height: '0.1px',
    opacity: 0,
    overflow: 'hidden',
    position: 'absolute',
    zIndex: -1,
}

const inputFileLabel = {
    'max-width': '80%',
    'font-size': '1.25rem',
    'font-weight': 700,
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
    cursor: 'pointer',
    display: 'inline-block',
    overflow: 'hidden',
    padding: '0.625rem 1.25rem',
}

export const LoadButton = () => {
    return (
        <Box >
            <input type="file" name="file-2" id="file-2" data-multiple-caption="{count} archivos seleccionados" multiple />
            <label for="file-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
                    <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z">
                    </path>
                </svg>
                <span class="iborrainputfile">Seleccionar archivo</span>
            </label>
        </Box>
    )
}
