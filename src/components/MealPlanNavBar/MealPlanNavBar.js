import React, { useEffect } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MealPlanNavBar = (props) => {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);
  function generateDays() {
    const el = [];
    for (let i = 0; i < props.days; i++) {
      el.push(
        <>
          <a href={"#day" + (i + 1)}>Day {i + 1}</a>
          <br />
          <br />
        </>
      );
    }
    return el;
  }
  return (
    <div className="m-0 border-r-2 grow-[1] max-h-[91.7vh] min-w-[200px]">
      <p className="text-2xl mt-4 ml-2">Navigation</p>
      <Accordion className="bg-transparent shadow-none mb-0">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="text-lg">Meal Plan</p>
        </AccordionSummary>
        <AccordionDetails>{generateDays().map((el) => el)}</AccordionDetails>
      </Accordion>
      <a href="#groceries">
        <p className="text-lg pl-4">Groceries</p>
      </a>
    </div>
  );
};

export default MealPlanNavBar;
