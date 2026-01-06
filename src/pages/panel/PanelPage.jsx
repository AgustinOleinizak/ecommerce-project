
import { getAllProducts } from '../../api/products.api';
import { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Container, TableRow, Table, TableBody, TableCell, TableHead, TableContainer, Paper } from '@mui/material';
=======
import { Container, TableRow, Table, Avatar, TableBody, TableCell, TableHead, TableContainer, Paper } from '@mui/material';
>>>>>>> 0171aa5f9d2f58ee29c0fb3d7094a610868a27b4
import Loader from '../../components/Loader'
import FormProduct from '../../components/FormProduct';



function HomePagePanel() {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);

<<<<<<< HEAD

=======
>>>>>>> 0171aa5f9d2f58ee29c0fb3d7094a610868a27b4
    useEffect(() => {
        fetchData();
    }, []);

<<<<<<< HEAD

    const fetchData = (param) => {
        setLoad(true)
        getAllProducts(param).then((response) => {
            setProducts(response.data.map((element) => ({
                ...element,
                id: element._id
            }))) //agregamos un atributo nuevo, con el nombre ID
=======
    const fetchData = (param) => {
        setLoad(true)
        getAllProducts(param).then((response) => {
            setProducts(response.data);
>>>>>>> 0171aa5f9d2f58ee29c0fb3d7094a610868a27b4
            setLoad(false)
        });
    }

    return (
        <Container>
            <FormProduct fetchData={fetchData}></FormProduct>
<<<<<<< HEAD
            <br/>
=======
            <br />
>>>>>>> 0171aa5f9d2f58ee29c0fb3d7094a610868a27b4
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
<<<<<<< HEAD
=======
                            <TableCell>Imagen</TableCell>
>>>>>>> 0171aa5f9d2f58ee29c0fb3d7094a610868a27b4
                            <TableCell>Nombre</TableCell>
                            <TableCell align="right">Precio</TableCell>
                            <TableCell align="right">Categoria</TableCell>
                            <TableCell align="right">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
<<<<<<< HEAD
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{fontWeight:'800'}} component="th" scope="row">
=======
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>  <Avatar alt="Product Image" src={row.image} /></TableCell>
                                <TableCell sx={{ fontWeight: '800' }} component="th" scope="row">
>>>>>>> 0171aa5f9d2f58ee29c0fb3d7094a610868a27b4
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">$ {row.price}</TableCell>
                                <TableCell align="right">{row.catalog}</TableCell>
                                <TableCell align="right">

                                </TableCell>
<<<<<<< HEAD

=======
>>>>>>> 0171aa5f9d2f58ee29c0fb3d7094a610868a27b4
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
<<<<<<< HEAD
    );
}

=======
    )
}
>>>>>>> 0171aa5f9d2f58ee29c0fb3d7094a610868a27b4
export default HomePagePanel;
