import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as table from "./assets/district.json";

export function StatisticsTable() {
  return (
    <Container>
      <TableContainer sx={{ height: "85vh", overflow: "auto" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>區</TableCell>
              <TableCell>交易筆數</TableCell>
              <TableCell>最高價/每坪</TableCell>
              <TableCell>最低價/每坪</TableCell>
              <TableCell>平均/每坪</TableCell>
              <TableCell>最高總價</TableCell>
              <TableCell>最低總價</TableCell>
              <TableCell>平均總價</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {table.district.map((district, n) => (
              <TableRow hover key={district}>
                <TableCell>{district}</TableCell>
                <TableCell>{table.count[n]}</TableCell>
                <TableCell>{table.unitmax[n]}</TableCell>
                <TableCell>{table.unitmin[n]}</TableCell>
                <TableCell>{table.unitavg[n]}</TableCell>
                <TableCell>{table.totalmax[n]}</TableCell>
                <TableCell>{table.totalmin[n]}</TableCell>
                <TableCell>{table.totalavg[n]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
