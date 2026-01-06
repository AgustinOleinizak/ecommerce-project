
import { getAllProducts } from '../api/products.api';
import { useEffect, useState } from 'react';
import { Container, Grid, Divider, TextField, Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import Feed from '../components/Feed'
import SearchIcon from '@mui/icons-material/Search';
import Loader from '../components/Loader'
import ListSubheader from '@mui/material/ListSubheader';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


const categorias = ["Adidas", "Vans", "Nike"];

function HomePage() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const [load, setLoad] = useState(false);
    const [paginaActual, setPaginaActual] = useState(1);
    const [categoria, setCategoria] = useState("todo");
    const theme = useTheme();





    const productosFiltrados =
        categoria === "todo"
            ? products
            : products.filter(p => p.catalog === categoria);


    const totalPaginas = Math.ceil(productosFiltrados.length / 5);
    const indiceInicio = (paginaActual - 1) * 5;
    const datosPagina = productosFiltrados.slice(indiceInicio, indiceInicio + 5);

    useEffect(() => {
        fetchData();
    }, []);

    const handleFilter = () => {
        searchTerm ? fetchData(searchTerm) : fetchData('')
    }

    const fetchData = (param) => {
        setLoad(true)
        getAllProducts(param).then((response) => {
            setProducts(response.data);
            setLoad(false)
        });
    }



    return (
        <Container>
            <TextField
                placeholder="Escriba su búsqueda..."
                value={searchTerm}
                variant="standard"
                onChange={(e) => setSearchTerm(e.target.value)}
            ></TextField>
            <Button variant="text" onClick={handleFilter} startIcon={<SearchIcon />}> Buscar </Button>
            <div>
                <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                    <Select
                        displayEmpty
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        input={<OutlinedInput />}
                        MenuProps={MenuProps}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="todo">
                            <em>Todos los productos</em>
                        </MenuItem>
                        {categorias.map(cat => (
                            <MenuItem
                                key={cat}
                                value={cat}
                            >
                                {cat}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            {
                load ?
                    <Loader /> :
                    <Grid container spacing={2}>
                        {datosPagina.map((product, idx) => (
                            <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
                                <Feed product={product} />
                            </Grid>

                        ))}
                    </Grid>
            }
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                <Stack alignItems="center" mt={3}>
                    <Pagination
                        count={totalPaginas}
                        page={paginaActual}
                        onChange={(e, value) => setPaginaActual(value)}
                        color="primary"
                    />
                </Stack>

            </div>
            <div style={{ marginBottom: 100 }}></div>
        </Container >
    );
}

export default HomePage
