import { Box } from "@mui/system";

const Footer = () => {
  return (
    <Box
      component={"footer"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      py={"1.5rem"}
      sx={{ opacity: 0.7 }}
      width={"100%"}
    >
      <p>portfolio created with &hearts; by Vikas Saxena</p>
      <p>&copy; 2022</p>
    </Box>
  );
};

export default Footer;
