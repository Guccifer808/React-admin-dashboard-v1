import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "./../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsModeOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsModeOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonModeOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  //using mui Box instead of div to apply css directly here + convenient css directly in component code
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search bar */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex">
        {/* theme mode switcher */}
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsModeOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsModeOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonModeOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
