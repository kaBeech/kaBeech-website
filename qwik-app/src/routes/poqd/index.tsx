import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Beechy } from "~/components/beechy/beechy";
import { ResponseBar } from "~/components/responseBar/responseBar";
import { linkTiles } from "~/util/linkTiles";

export default component$(() => {
  return (
    <div class="screenContainer">
      <Beechy />
      <div class="screenContents">
        <h1>What is the POQD stack?</h1>
        <p>
          This website was built using next-generation JavaScript software in a
          group (or 'stack') I like to call 'POQD'
        </p>
        <p>
          I first learned professional web development using a software stack
          known as MERN, which stands for 'MongoDB, Express, React, and
          Node.js'. POQD is very similar, and stands for 'PostgreSQL, Oak, Qwik,
          and Deno'
        </p>
        <h2>Comparing MERN and POQD</h2>
        <table>
          <tr>
            <th></th>
            <th>MERN</th>
            <th>POQD</th>
          </tr>
          <tr>
            <th>Database</th>
            <td>MongoDB</td>
            <td>PostgreSQL</td>
          </tr>{" "}
          <tr>
            <th>Backend</th>
            <td>Express</td>
            <td>Oak</td>
          </tr>{" "}
          <tr>
            <th>Frontend</th>
            <td>React</td>
            <td>Qwik</td>
          </tr>{" "}
          <tr>
            <th>Runtime</th>
            <td>Node.js</td>
            <td>Deno</td>
          </tr>
        </table>
        <div class="flex">
          <div>
            <h3>MongoDB</h3>
            <p>Non-Relational</p>
          </div>
          <div>
            <h3>PostgreSQL</h3>
            <p>Relational</p>
          </div>
        </div>
        <h3>Why PostgreSQL?</h3>
        <p>This might just be personal preference.</p>
        <div className="flex">
          <div>
            <h3>Express</h3>
            <p></p>
          </div>
          <div>
            <h3>Oak</h3>
            <p></p>
          </div>
        </div>
        <h3>Why Oak?</h3>
        <p></p>
        <div class="flex">
          <div>
            <h3>React</h3>
            <p></p>
          </div>
          <div>
            <h3>Qwik</h3>
            <p></p>
          </div>
        </div>
        <h3>Why Qwik?</h3>
        <p></p>
        <div class="flex">
          <div>
            <h3>Node.js</h3>
            <p></p>
          </div>
          <div>
            <h3>Deno</h3>
            <p></p>
          </div>
        </div>
        <h3>Why Deno?</h3>
        <p></p>
        <h2>Why POQD?</h2>
        <p></p>
      </div>

      <ResponseBar
        responses={[
          {
            fullMessage: "Actually, there's something else I want to ask...",
            linkTile: linkTiles.back,
          },
        ]}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "kaBeech - POQD Stack",
  meta: [
    {
      name: "description",
      content:
        "Information about the POQD stack of JavaScript software used to build this site",
    },
  ],
};
