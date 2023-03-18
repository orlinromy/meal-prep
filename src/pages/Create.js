import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip, Fab } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Selection from "../components/SelectionCard/Selection";
import { diet, meal, allergy, health } from "../data/mealOptions";

const Create = (props) => {
  const [days, setDays] = useState(1);
  const [selectedMeal, setSelectedMeal] = useState([0]);
  const [selectedDiet, setSelectedDiet] = useState([0]);
  const [selectedAllergy, setSelectedAllergy] = useState([0]);
  const [selectedHealth, setSelectedHealth] = useState([0]);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  function handleDaysChange(e) {
    setDays(e.target.value === "" ? 0 : parseInt(e.target.value));
  }
  let navigate = useNavigate();

  function handleIncrease(e) {
    if (days < 7) {
      setDays(days + 1);
    }
  }

  function handleDecrease(e) {
    if (days > 1) {
      setDays(days - 1);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.setData({
      days: days,
      meal: [...selectedMeal.map((idx) => parseInt(meal[idx].type))],
      diet: [...selectedDiet.map((idx) => diet[idx].type.toLowerCase())],
      allergy: [...selectedAllergy.map((idx) => allergy[idx].type)],
      health: [...selectedHealth.map((idx) => health[idx].type)],
    });
    navigate("/planner");
  }
  useEffect(() => {
    document.body.style.backgroundColor = "";
  }, []);
  return (
    <div className="flex justify-around flex-column">
      <form
        onSubmit={handleSubmit}
        className="text-center ml-48 mr-48 mt-20 mb-20 bg-white p-4 border-solid border-slate-300 rounded-3xl shadow-2xl"
      >
        <h1 className="text-4xl m-6">Create your plan</h1>
        <div className="m-6 mb-14">
          <label htmlFor="days" className="text-2xl mb-4 mt-4">
            How many days do you want to plan for this week:
          </label>
          <br />
          <button
            type="button"
            onClick={handleDecrease}
            className="bg-slate-200 rounded-full w-8 h-8 mr-2.5 text-2xl shadow"
          >
            -
          </button>
          <input
            className="border-none bg-transparent text-center text-2xl"
            id="days"
            type="number"
            min="1"
            max="7"
            step="1"
            value={days}
            onChange={handleDaysChange}
          />
          <button
            type="button"
            className="bg-slate-200 rounded-full w-8 h-8 ml-2.5 text-2xl shadow"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
        <Selection
          title="Meals per Day"
          types={meal}
          multiple={false}
          id="meals"
          setData={setSelectedMeal}
          value={selectedMeal}
          hasImage={true}
        />
        <Selection
          title="Diet"
          types={diet}
          multiple={true}
          multipleMax={2}
          id="diet"
          setData={setSelectedDiet}
          value={selectedDiet}
          hasImage={true}
        />
        <Selection
          title="Allergy"
          types={allergy}
          multiple={true}
          multipleMax={3}
          id="allergy"
          setData={setSelectedAllergy}
          value={selectedAllergy}
          hasImage={false}
        />
        <Selection
          title="Health"
          types={health}
          multiple={true}
          multipleMax={2}
          id="health"
          setData={setSelectedHealth}
          value={selectedHealth}
          hasImage={false}
        />
        <button
          type="submit"
          className="w-60 bg-[#659B91] text-white p-2.5 rounded-xl text-lg my-4 hover:bg-[#517c74]"
        >
          Submit
        </button>
      </form>
      <Tooltip
        disableHoverListener
        arrow
        open={isTooltipOpen}
        onClose={() => setIsTooltipOpen(false)}
        placement="top"
        title={
          <>
            <strong className="text-center text-lg">Icon credit</strong>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/meal"
              title="meal icons"
              className="text-center"
            >
              Meal icons created by Freepik - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/english-breakfast"
              title="english breakfast icons"
              className="text-center"
            >
              English breakfast icons created by Freepik - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/dinner"
              title="dinner icons"
              className="text-center"
            >
              Dinner icons created by Eucalyp - Flaticon
            </a>
            <br />

            <a
              href="https://www.flaticon.com/free-icons/forbidden"
              title="forbidden icons"
              className="text-center"
            >
              Forbidden icons created by Freepik - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/salad"
              title="salad icons"
              className="text-center"
            >
              Salad icons created by Freepik - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/fiber"
              title="fiber icons"
              className="text-center"
            >
              Fiber icons created by Flat Icons - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/whey"
              title="whey icons"
              className="text-center"
            >
              Whey icons created by Konkapp - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/carbs"
              title="carbs icons"
              className="text-center"
            >
              Carbs icons created by surang - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/no-fat"
              title="no fat icons"
              className="text-center"
            >
              No fat icons created by Freepik - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/salt-free"
              title="salt free icons"
              className="text-center"
            >
              Salt free icons created by Freepik - Flaticon
            </a>
            <br />
          </>
        }
      >
        <Fab
          size="small"
          aria-label="Icon Info"
          type="button"
          sx={{
            bgColor: "rgb(245, 245, 245)",
            position: "fixed",
            bottom: "3vh",
            right: "3vh",
          }}
          onClick={() => setIsTooltipOpen((prev) => !prev)}
        >
          <InfoIcon />
        </Fab>
      </Tooltip>
    </div>
  );
};

export default Create;
