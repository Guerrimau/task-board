import {
  Card,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import { EntryList, NewEntry } from "./components";

export default function Home() {
  return (
    <>
      <Grid container height="100%" columnSpacing={3}>
        <Grid item xs={4}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardHeader title="Pending" />
            <CardContent sx={{ flex: 1 }}>
              <NewEntry />
              <EntryList status="Pending" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardHeader title="In-Progress" />
            <CardContent sx={{ flex: 1 }}>
              <EntryList status="In-Progress" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardHeader title="Finished" />
            <CardContent sx={{ flex: 1 }}>
              <EntryList status="Finished" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
