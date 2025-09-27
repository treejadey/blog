import { HttpError, PageProps } from "fresh";

function ErrorWrapper(code: number, message: string) {
  return (
    <div class="error-page-wrapper">
      <h1>{code}</h1>
      <p>{message}</p>
    </div>
  );
}

export default function ErrorPage(props: PageProps) {
  const error = props.error;
  if (error instanceof HttpError) {
    return ErrorWrapper(error.status, error.message);
  }

  return <h1>Unknown unexpected error.</h1>;
}
