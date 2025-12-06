import React from "react";
import Intro from "../components/Intro";
import { createBudget, fetchData } from "../localStorage";
import { useLoaderData } from "react-router-dom";
import AddBudgetForm from "../components/AddBudgetForm";
export const dashboardLoader = () => {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
};

export async function dashboardAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  //new user submission
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
    } catch (error) {
      throw new Error("There was an error while creating your account ");
    }
  }

  //creating budget
  if (_action === "createBudget") {
    try {
      createBudget({ name: values.newBudget, amount: values.newBudget });
      return console.log("budget created");
    } catch (error) {
      throw new Error(" There was a problem creating your budget ");
    }
  }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();
  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back,<span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            <div className="grid-lg">
              <div className="flex-lg"></div>
              <AddBudgetForm />
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
