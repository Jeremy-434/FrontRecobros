import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { LinksAcordion } from '..';

export const AcordionPortafolio = ({ text, linksAcordion, Icon, namesAcordion }) => {
    return (
        <Accordion sx={{ bgcolor: 'transparent', color: 'inherit'}} >
            <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                    margin: '0px',
                    color: 'inherit',
                }}
            >
                {Icon}
                <Typography fontWeight={400} marginLeft={2} fontSize='14px' >{text}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {
                    linksAcordion.map((linkText, i) => (
                        <LinksAcordion key={linkText} linkText={linkText} text={namesAcordion[i]} />
                    ))
                }
            </AccordionDetails>
        </Accordion>
    )
}
