import React from "react";
import { Box, Button } from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { showDrawer } from "../../store/appSlice";

const NavLinks = ({ sx }: { sx?: Object }) => {
  const dispatch = useAppDispatch();
  const buttons: string[] = ["About", "Projects", "Contact"];

  const scrollIntoView = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    button: string
  ): void => {
    const aboutme =
      document.querySelector("#aboutme").getBoundingClientRect().top +
      window.scrollY;
    const projects =
      document.querySelector("#projects").getBoundingClientRect().top +
      window.scrollY;
    const footer =
      document.querySelector("#footer").getBoundingClientRect().top +
      window.scrollY;

    if (button === "About")
      window.scrollTo({ left: 0, top: aboutme, behavior: "smooth" });
    if (button === "Projects")
      window.scrollTo({ left: 0, top: projects, behavior: "smooth" });
    if (button === "Contact")
      window.scrollTo({ left: 0, top: footer, behavior: "smooth" });

    dispatch(showDrawer(false));
  };

  return (
    <Box sx={sx}>
      {buttons.map((button, index) => {
        return (
          <Button key={index} onClick={(e) => scrollIntoView(e, button)}>
            {button}
          </Button>
        );
      })}
    </Box>
  );
};

export default NavLinks;
