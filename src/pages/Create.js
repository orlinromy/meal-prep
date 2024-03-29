import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IconCredit } from "../components/IconCredit";
import Selection from "../components/SelectionCard/Selection";
import { diet, meal, allergy, health } from "../data/mealOptions";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const icons = [
  {
    link: "https://www.flaticon.com/free-icons/meal",
    title: "meal icons",
    label: "Meal icons created by Freepik - Flaticon",
  },
  {
    link: "https://www.flaticon.com/free-icons/english-breakfast",
    title: "english breakfast icons",
    label: "English breakfast icons created by Freepik - Flaticon",
  },
  {
    link: "https://www.flaticon.com/free-icons/dinner",
    title: "dinner icons",
    label: "Dinner icons created by Eucalyp - Flaticon",
  },
  {
    link: "https://www.flaticon.com/free-icons/forbidden",
    title: "forbidden icons",
    label: "Forbidden icons created by Freepik - Flaticon",
  },
  {
    link: "https://www.flaticon.com/free-icons/salad",
    title: "salad icons",
    label: "Salad icons created by Freepik - Flaticon",
  },
  {
    link: "https://www.flaticon.com/free-icons/fiber",
    title: "fiber icons",
    label: "Fiber icons created by Flat Icons - Flaticon",
  },
  {
    link: "https://www.flaticon.com/free-icons/whey",
    title: "whey icons",
    label: "Whey icons created by Konkapp - Flaticon",
  },
  {
    link: "https://www.flaticon.com/free-icons/carbs",
    title: "carbs icons",
    label: "Carbs icons created by surang - Flaticon",
  },
  {
    link: "https://www.flaticon.com/free-icons/no-fat",
    title: "no fat icons",
    label: "No fat icons created by Freepik - Flaticon",
  },
  {
    link: "https://www.flaticon.com/free-icons/salt-free",
    title: "salt free icons",
    label: "Salt free icons created by Freepik - Flaticon",
  },
];

const Create = (props) => {
  const [days, setDays] = useState(1);
  const [selectedMeal, setSelectedMeal] = useState([0]);
  const [selectedDiet, setSelectedDiet] = useState([0]);
  const [selectedAllergy, setSelectedAllergy] = useState([0]);
  const [selectedHealth, setSelectedHealth] = useState([0]);

  function handleDaysChange(e) {
    setDays(e.target.value === "" ? 0 : parseInt(e.target.value));
  }
  let navigate = useNavigate();

  function handleIncrease(e) {
    if (days < 5) {
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

    // invalidate local storage
    localStorage.clear();

    navigate("/planner");
  }
  useEffect(() => {
    document.body.style.backgroundColor = "";
  }, []);
  return (
    <div className="flex justify-around flex-column">
      <div style={{ justifySelf: "flex-start" }}>
        <IconButton
          onClick={() => {
            navigate("/");
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      </div>
      <form
        onSubmit={handleSubmit}
        className="text-center mx-[5%] my-[8%] bg-white p-1 sm:p-4 border-solid border-slate-300 rounded-3xl shadow-2xl"
      >
        <h1 className="text-3xl sm:text-4xl my-6">Create your plan</h1>
        <div className="m-6 mb-14">
          <label htmlFor="days" className="text-xl mb-4 mt-4">
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
          className="w-[80%] max-w-[200px] bg-[#659B91] text-white py-2.5 rounded-xl text-lg my-5 hover:bg-[#517c74]"
        >
          Submit
        </button>
      </form>

      {/* TODO: refactor - separate this to its own component, also used in Home */}
      <IconCredit icons={icons} />
    </div>
  );
};

export default Create;
