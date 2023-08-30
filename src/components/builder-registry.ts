import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import { AlLughaMismaTable } from "./alLughaMismaTable/alLughaMismaTable";
import { Beechy } from "./beechy/beechy";
import { Hamburger } from "./hamburger/hamburger";
import { HamburgerChoice } from "./hamburgerChoice/hamburgerChoice";
import Header from "./header/header";
import { Logo } from "./logo/logo";
import { Namagen } from "./namagen/namagen";
import { ResponseBar } from "./responseBar/responseBar";
import { ResponseButton } from "./responseButton/responseButton";
import { ResponseDetail } from "./responseDetail/responseDetail";
import { Screen } from "./screen/screen";

/**
 * This array is used to integrate custom components within Builder.
 * https://www.builder.io/c/docs/custom-components-intro
 *
 * These components will be found the "Custom Components"
 * section of Builder's visual editor.
 * You can also turn on "components only mode" to limit
 * editing to only these components.
 * https://www.builder.io/c/docs/guides/components-only-mode
 */
export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: AlLughaMismaTable,
    name: "AlLughaMismaTable",
    inputs: [
      {
        name: "mode",
        type: "string",
        required: true,
      },
      {
        name: "translatedWordList",
        type: "string",
        required: true,
      },
    ],
  },
  {
    component: Beechy,
    name: "Beechy",
  },
  {
    component: Hamburger,
    name: "Hamburger",
    inputs: [
      {
        name: "class",
        type: "string",
        required: true,
      },
    ],
  },
  {
    component: HamburgerChoice,
    name: "HamburgerChoice",
    inputs: [
      {
        name: "imagePath",
        type: "string",
        required: true,
      },
      {
        name: "text",
        type: "string",
        required: true,
      },
    ],
  },
  {
    component: Header,
    name: "Header",
  },
  {
    component: Logo,
    name: "Logo",
    inputs: [
      {
        name: "class",
        type: "string",
        required: true,
      },
    ],
  },
  {
    component: Namagen,
    name: "Namagen",
    inputs: [
      {
        name: "language",
        type: "string",
        required: true,
      },
    ],
  },
  {
    component: ResponseBar,
    name: "ResponseBar",
  },
  {
    component: ResponseButton,
    name: "ResponseButton",
    inputs: [
      {
        name: "response",
        type: "string",
        required: true,
      },
    ],
  },
  {
    component: ResponseDetail,
    name: "ResponseDetail",
    inputs: [
      {
        name: "response",
        type: "string",
        required: true,
      },
    ],
  },
  {
    component: Screen,
    name: "Screen",
  },
];
