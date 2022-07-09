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
    <div style={{ width: "13%", maxHeight: "96vh" }} className="m-0 border-r-2">
      <a
        className="mt-4 mb-4 text-sm"
        href="https://www.flaticon.com/free-icons/meal"
        title="meal icons"
      >
        Meal icons created by Freepik - Flaticon
      </a>
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
