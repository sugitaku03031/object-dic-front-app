import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as { status: number; statusText: string };
  return (
    <div id="error-page">
      <h1>ð</h1>
      <p>įģãčĻģãããūããããĻãĐãžãįšįããūããã</p>
      <p>ãģãžã: {error.status}</p>
      <p>ååŪđ: {error.statusText}</p>
    </div>
  );
}