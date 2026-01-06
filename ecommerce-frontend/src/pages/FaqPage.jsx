import { Container, Accordion, AccordionSummary, AccordionDetails, Typography, breadcrumbsClasses } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function FaqPage() {


    return (
        <Container sx={{ marginBottom: '335px', marginTop: '30px' }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>¿Cómo busco un producto?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Primero debes ir al cuadro de texto situado en la esquina superior izquierda, ingresa el producto que deseas encontrar y luego haz click en el botón Buscar.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <Typography>¿Cómo filtro los productos por marca?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Desde el selector de marcas podés elegir la categoría que desees (Adidas, Nike, Vans, etc.). Al seleccionar una marca, se mostrarán únicamente los productos correspondientes.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <Typography>¿Cómo selecciono el producto que deseo comprar?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        presioná el botón Agregar al carrito para sumar el productos que desees a tu compra.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <Typography>¿Dónde veo los productos seleccionados?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Los productos seleccionados se muestran en el carrito de compras, accesible desde el ícono ubicado en la parte superior del sitio.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <Typography>¿Puedo eliminar un producto del carrito?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Sí. Dentro del carrito podés quitar productos o modificar la cantidad antes de finalizar la compra.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            

        </Container>
    );
}

export default FaqPage;
