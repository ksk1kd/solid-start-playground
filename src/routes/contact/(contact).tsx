import { Title } from "@solidjs/meta";
import { action, useSubmission } from "@solidjs/router";
import { Show } from "solid-js";

const submitContact = action(async (formData: FormData) => {
  const name = formData.get("name") as string;
  if (!name) {
    return {
      error: "Name is required",
    };
  }
}, "submitContact");

export default function Contact() {
  const submission = useSubmission(submitContact);
  return (
    <>
      <Title>Contact</Title>
      <h1>Contact</h1>
      <form action={submitContact} method="post">
        <Show when={submission.result?.error}>
          <p>{submission.result?.error}</p>
        </Show>
        <div>
          <label>
            Name: <input name="name" />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
