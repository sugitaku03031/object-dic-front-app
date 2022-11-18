import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as { status: number; statusText: string };
  return (
    <div id="error-page">
      <h1>🙇</h1>
      <p>申し訳ありません、エラーが発生しました。</p>
      <p>コード: {error.status}</p>
      <p>内容: {error.statusText}</p>
    </div>
  );
}