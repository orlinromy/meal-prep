import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Selection from "../components/SelectionCard/Selection";
import { diet, meal, allergy, health } from "../data/mealOptions";
import styles from "../styles/Create.module.css";

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
    // document.body.style.backgroundColor = "#ffefd9";
  }, []);
  return (
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
        id="diet"
        setData={setSelectedDiet}
        value={selectedDiet}
        hasImage={true}
      />
      <Selection
        title="Allergy"
        types={allergy}
        multiple={true}
        id="allergy"
        setData={setSelectedAllergy}
        value={selectedAllergy}
        hasImage={false}
      />
      <Selection
        title="Health"
        types={health}
        multiple={true}
        id="health"
        setData={setSelectedHealth}
        value={selectedHealth}
        hasImage={false}
      />
      <button
        type="submit"
        className="w-60 bg-[#659B91] text-cream p-2.5 rounded-xl text-"
      >
        Submit
      </button>
    </form>
  );
};

export default Create;
