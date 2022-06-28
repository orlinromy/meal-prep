import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Selection from "../components/SelectionCard/Selection";
import { diet, meal, allergy, health } from "../data/mealOptions";

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

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="days">
        How many days do you want to plan for this week:
      </label>
      <input
        id="days"
        type="number"
        min="1"
        max="7"
        step="1"
        value={days}
        onChange={handleDaysChange}
      />
      <br />
      <Selection
        title="Meals per Day"
        types={meal}
        multiple={false}
        id="meals"
        setData={setSelectedMeal}
        value={selectedMeal}
      />
      <Selection
        title="Diet"
        types={diet}
        multiple={true}
        id="diet"
        setData={setSelectedDiet}
        value={selectedDiet}
      />
      <Selection
        title="Allergy"
        types={allergy}
        multiple={true}
        id="allergy"
        setData={setSelectedAllergy}
        value={selectedAllergy}
      />
      <Selection
        title="Health"
        types={health}
        multiple={true}
        id="health"
        setData={setSelectedHealth}
        value={selectedHealth}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Create;
