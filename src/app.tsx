import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { MetaProvider } from "@solidjs/meta";

export default function App() {
  return (
    <MetaProvider>
      <main class="container">
        <Router root={(props) => <Suspense>{props.children}</Suspense>}>
          <FileRoutes />
        </Router>
      </main>
    </MetaProvider>
  );
}
