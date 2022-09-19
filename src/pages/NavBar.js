import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Home, Coffee, ShoppingCart } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import './NavBar.css'

export default function ButtonAppBar() {
	const navigate = useNavigate()

	return (
		<Box className="appbar" sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar className="appbar_toolbar">
					<Coffee fontSize="large" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography variant="h5" component="div" sx={{ flexGrow: 1 }} href="/cart">
						Cafetería UES21
					</Typography>
					<Button
						size="large"
						onClick={() => navigate('/cart')}
						color="inherit">
						<ShoppingCart id='cartIcon' /> Carrito
					</Button>
					<Button
						size="large"
						onClick={() => navigate('/')}
						color="inherit">
						<Home id='cartIcon' /> Home
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}