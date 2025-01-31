import { Link, Outlet } from "react-router";
import "../style/banderas.css"

export default function Home() {
  return (
    <>
      <Link to={"banderas"}>
      <h2 className="title-banner"> Diversión con Banderas 🏳️</h2>
      </Link>
      <Outlet />
    </>
  );
}
