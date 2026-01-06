import { Typography, Box, Container, Grid } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SecurityIcon from "@mui/icons-material/Security";
import AutorenewIcon from "@mui/icons-material/Autorenew";

let theme = createTheme();
theme = responsiveFontSizes(theme);


const services = [
    {
        icon: <LocalShippingIcon fontSize="large" />,
        title: "Envío gratis",
        text: "Envíos gratis en compras desde $69.999"
    },
    {
        icon: <CreditCardIcon fontSize="large" />,
        title: "Compra en cuotas",
        text: "Pagá con débito, MODO o en cuotas sin interés con tarjetas bancarizadas"
    },
    {
        icon: <SecurityIcon fontSize="large" />,
        title: "Compra protegida",
        text: "Protegemos los datos de nuestros clientes en todo momento"
    },
    {
        icon: <AutorenewIcon fontSize="large" />,
        title: "Primer cambio gratis",
        text: "Tu primer cambio gratis a domicilio"
    }
];


function AboutUs() {
    return (
        <div>
        <Container fixed>

            <Box sx={{ width: '100%', maxWidth: 500, mx: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                <ThemeProvider theme={theme}>
                    <Typography variant="h3" gutterBottom align='center'>
                        Sobre Nosotros
                    </Typography>
                </ThemeProvider>
                <Typography variant="body1" gutterBottom align='center'>
                    Bienvenido a nuestra tienda Web! Estamos dedicados a proporcionarte la mejor experiencia de compra en línea.
                    Nuestra misión es ofrecer una amplia gama de productos a precios competitivos, garantizando la satisfacción del cliente mediante un excelente servicio.
                    <br />
                    ¡Gracias por elegirnos para tus necesidades de compra!
                </Typography>
            </Box>
        </Container>
        <Box
      sx={{
        backgroundColor: "#ffffffff",
        color: "#000000ff",
        py: 6
      }}
    >
      <Container>
        <Typography variant="h4" sx={{ mb: 5, textAlign: 'center' }}>
          Servicios
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  textAlign: "center"
                }}
              >
                <Box sx={{ color: "#000000ff", mb: 2 }}>
                  {service.icon}
                </Box>

                <Typography
                  variant="subtitle1"
                  sx={{ color: "#000000ff", mb: 1 }}
                >
                  {service.title}
                </Typography>

                <Typography variant="body2">
                  {service.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    </div>
    );
}
export default AboutUs;