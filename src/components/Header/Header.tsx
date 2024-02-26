import { AppBar, Container, Typography } from "@mui/material";
import './Header.css'

const TITLE_TEXT = 'My Shop';

const Header = () => {
  return (
    <div className="appbar">
      <Container maxWidth="lg">
        <AppBar sx={{ backgroundColor: "#fff", padding: 1 }} position="fixed">
          <Typography variant="h5" sx={{ color: "#000", textAlign: "center" }}>
            {TITLE_TEXT}
          </Typography>
        </AppBar>
      </Container>
    </div>
  );
};

export default Header;
