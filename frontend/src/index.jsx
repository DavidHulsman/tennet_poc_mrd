/* @refresh reload */
import { render } from "solid-js/web";
import { HopeProvider } from "@hope-ui/solid";

import "./index.css";
import InsertEntity from "./InsertEntity";

render(
  () => (
    <HopeProvider>
      <InsertEntity />
    </HopeProvider>
  ),
  document.getElementById("root")
);
