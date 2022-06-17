import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import { useState } from "react";

const images: { [label: string]: string } = {
  各年平均價格: "average_price-year",
  每平方公尺平均價格: "price-pre_square_meter",
  各區價格比較: "total_price-district",
  房間數量占比: "room_num_percentage",
  房間數量和價格關係: "room_num-price",
  主要用途占比: "main_purpose",
};
const getImage = (name: string) =>
  new URL(`./assets/${name}.png`, import.meta.url).href;

export function Charts() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleExpand = (id: string, expanded: boolean) =>
    setExpanded(expanded ? id : false);

  return (
    <Container>
      {Object.entries(images).map(([label, id]) => (
        <Accordion
          expanded={expanded === id}
          onChange={(_, expanded) => handleExpand(id, expanded)}
          key={id}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h5" fontWeight="bold" color="initial">
              {label}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <img src={getImage(id)} width="100%" />
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
