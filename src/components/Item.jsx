import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const {
    palette: { neutral },
  } = useTheme();

  const { category, price, name, image } = item.attributes;
  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={item.name}
          width="300px"
          height="400px"
          src={`http://localhost:1337${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}
              sx={{ backgroundColor: shades.primary[300], color: "white" }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>

      <Box mt="3px">
        <Typography variant="subtitle2" color={neutral.dark}>
          {category}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">${price}</Typography>
      </Box>
    </Box>
  );
};

export default Item;
// this is client react side 
// client 
// client/node_modules 
// client/public 
// client/src 
// client/src/assets 
// client/src/components 
// client/src/components/Item.jsx 
// client/src/scenes 
// client/src/scenes/checkout 
// client/src/scenes/checkout/AddressForm.jsx 
// client/src/scenes/checkout/Checkout.jsx 
// client/src/scenes/checkout/Confirmation.jsx 
// client/src/scenes/checkout/Payment.jsx 
// client/src/scenes/checkout/Shipping.jsx 
// client/src/scenes/global 
// client/src/scenes/global/CartMenu.jsx 
// client/src/scenes/global/Footer.jsx 
// client/src/scenes/global/Navbar.jsx 
// client/src/scenes/home 
// client/src/scenes/home/Home.jsx 
// client/src/scenes/home/MainCarousel.jsx 
// client/src/scenes/home/ShoppingList.jsx 
// client/src/scenes/home/Subscribe.jsx 
// client/src/scenes/itemDetails 
// client/src/scenes/itemDetails/ItemDetails.jsx 
// client/src/state 
// client/src/state/index.js 
// client/src/App.js 
// client/src/index.css 
// client/src/index.js 
// client/src/theme.js 
// client/temp 
// client/.gitignore 
// client/package-lock.json 
// client/package.json 
// client/README.md 

// server this is strapi folder 