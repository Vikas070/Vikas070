import { Box } from "@mui/material";
import "./homeStyles.css";
import { info } from "../info";
import SocialIcon from "./SocialIcon";
import EmojiBullet from "./EmojiBullet";
import me from "../../assets/images/profile2.png";

const Home = () => {
  return (
    <Box
      component={"main"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"calc(100vh - 175px)"}
    >
      <Box
        alt={"image of developer"}
        style={{ background: info.gradient }}
        component={"img"}
        src={me}
        width={{ xs: "35vh", md: "40vh" }}
        height={{ xs: "35vh", md: "40vh" }}
        borderRadius={"50%"}
        p={"0.75rem"}
        mb={{ xs: "1rem", sm: 0 }}
        mr={{ xs: 0, md: "2rem" }}
      />
      <Box>
        <h1>
          Hi, I'm <span className="text">{info.firstName}</span>
          <span alt="namaste" className={"hand"}>
            🧑‍💻
          </span>
        </h1>
        <div class="content">
          <h2>I'm {info.position}.</h2>
          <h2>I'm {info.position}.</h2>
        </div>
        <Box component={"ul"} p={"0.8rem"}>
          {info.miniBio.map((bio, index) => (
            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </Box>
        <Box
          display={"flex"}
          gap={"1.5rem"}
          justifyContent={"center"}
          fontSize={{ xs: "2rem", md: "2.5rem" }}
        >
          {info.socials.map((social, index) => (
            <SocialIcon
              key={index}
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
