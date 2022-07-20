import { Container, Box, TextField, Typography, Button } from "@mui/material";

const TextFieldComp = () => {
  let error = false;
  return (
    <>
      <Container maxWidth="xs">
        <Typography variant="h4" component="h6" align="center" color="error">
          TextField
        </Typography>
        <Box
          sx={{
            mt: 4,
            textAlign: "center",
          }}
        >
          <TextField
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            fullWidth
            error={error}
            helperText={error && "Incorrect Email Format"}
          />

          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your pasword"
            fullWidth
            error={error}
            helperText={error && "Incorrect Email Format"}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TextFieldComp;
