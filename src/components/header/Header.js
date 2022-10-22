import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import "./navbarStyles.css";

const links = [
  {
    name: "Home",
    to: "/",
    active: "home",
  },
  {
    name: "About Me",
    to: "/about",
    active: "about",
  },
  {
    name: "Portfolio",
    to: "/portfolio",
    active: "portfolio",
  },
];

const Header = () => {
  return (
    <Box component={"nav"} width={"100%"}>
      <Box
        component={"ul"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ xs: "2rem", md: "8rem" }}
        fontSize={"1rem"}
        style={{
          listStyleType: "none",
          padding: "0px",
          margin: "0px",
          marginBlock: "0px",
        }}
      >
        {links.map((link, index) => (
          <Box key={index} component={"li"} className="active">
            <Link to={link.to}>
              {!link.type && <p style={{ marginBlock: "0" }}>{link.name}</p>}
              {link.type && <h1>{link.name}</h1>}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
