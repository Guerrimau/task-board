import { Card, CardContent, CardHeader, Grid, Paper, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Grid container height="100%" columnSpacing={3}>
        <Grid item xs={4}>
          <Card sx={{ height: "100%" }}>
            <CardHeader title="To do" />
            <CardContent>
              
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ height: "100%" }}>
            <CardHeader title="To do" />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ height: "100%" }}>
            <CardHeader title="To do" />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
