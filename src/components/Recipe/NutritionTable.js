import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const NutritionTable = (props) => {
  return (
    <div style={{ overflow: "scroll", height: "400px" }}>
      <Table stickyHeader style={{ backgroundColor: "none" }}>
        <TableHead>
          <TableRow>
            <TableCell>Nutrient</TableCell>
            <TableCell>Total Nutrients</TableCell>
            <TableCell>Total Daily (%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.nutrients.map((nutrient) => (
            <TableRow>
              <TableCell>{nutrient.label}</TableCell>
              <TableCell>
                {Math.round(nutrient.total).toLocaleString()}
                {nutrient.unit}
              </TableCell>
              <TableCell>
                {Math.round(nutrient.daily).toLocaleString()}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default NutritionTable;
