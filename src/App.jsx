import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "./localStorage";
import Nav from "./components/Nav";
import wave from "./assets/wave.svg";

export const appLoader = () => {
  const userName = fetchData("userName") ?? null;
  return { userName };
};

export default function App() {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} />
    </div>
  );
}
