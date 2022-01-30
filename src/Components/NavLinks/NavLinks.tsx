import React from "react";
import { Box, Button } from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { showDrawer } from "../../store/appSlice";
import { Link } from "react-scroll";

const NavLinks = ({ sx }: { sx?: Object }) => {
  const dispatch = useAppDispatch();
  const buttons: any[] = [
    { name: "Home", href: "main" },
    { name: "About", href: "aboutme" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "footer" },
  ];

  const clickHandler = (): void => {
    dispatch(showDrawer(false));
  };

  return (
    <Box sx={sx}>
      {buttons.map((button, index) => {
        return (
          <Button key={index}>
            <Link
              to={button.href}
              smooth
              duration={750}
              onClick={() => clickHandler()}
            >
              {button.name}
            </Link>
          </Button>
        );
      })}
    </Box>
  );
};

export default NavLinks;
