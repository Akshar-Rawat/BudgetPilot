import React from "react";
import { Form } from "react-router-dom";
import illustration from "../assets/illustration.jpg";
const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent"> Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom . Start your
          journey today
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="Your Name"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6 "
              width={20}
            >
              <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
            </svg>
          </button>
        </Form>
      </div>
            <img src={illustration} alt="person with money" width={650} />
    </div>
  );
};

export default Intro;
