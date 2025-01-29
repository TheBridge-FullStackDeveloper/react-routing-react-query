import { Link, Outlet } from "react-router";

export default function Home() {
  return (
    <>
      <Link to={"banderas"}>
        <h2>Diversión con banderas 🏳️</h2>
      </Link>
      <Outlet />
    </>
  );
}
