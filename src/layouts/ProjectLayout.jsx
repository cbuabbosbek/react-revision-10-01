import { Link, Outlet } from "react-router";

function ProjectLayout() {
  return (
    <>
      <div>
        <Link to={"/projects"}>
          <i class="fa-solid fa-left-long"></i>
        </Link>
      </div>

      <Outlet />
    </>
  );
}

export default ProjectLayout;
