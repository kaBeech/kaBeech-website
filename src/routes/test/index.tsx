import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./test.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <div class="screenContainer">
        <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
        <script>
          var controller = new ScrollMagic.Controller({"vertical: false"});
        </script>
        <div id="parallaxContainer">
          <div class="layer1">
            <div class="box1 white">
              <p>A box in the sky.</p>
              <a href="#" class="viewsource">
                view source
              </a>
            </div>
          </div>
          <div class="layer2"></div>
          <div class="layer3"></div>
        </div>
        <script>
          $(function (){" "}
          {
            // wait for document ready
            // build tween
            `{var tween = new TimelineMax ()
                    .add([
                        TweenMax.to("#parallaxContainer .layer1", 1, {backgroundPosition: "-40% 0", ease: Linear.easeNone}),
                        TweenMax.to("#parallaxContainer .layer2", 1, {backgroundPosition: "-500% 0", ease: Linear.easeNone}),
                        TweenMax.to("#parallaxContainer .layer3", 1, {backgroundPosition: "-225% 0", ease: Linear.easeNone})
                    ]);
        
                // build scene
                var scene = new ScrollMagic.Scene({triggerElement: "#parallaxContainer", duration: 2000, offset: 450})
                                .setTween(tween)
                                .setPin("#parallaxContainer")
                                .addIndicators() // add indicators (requires plugin)
                                .addTo(controller);}
            `
          }
          );
        </script>
        <div class="block">
          <img src="/flower.svg" data-speed="-1" id="img-parallax" />
          <h2>Parallax Speed -1</h2>
        </div>
        <img
          src="/flower.svg"
          alt="A fractal flower budding"
          data-speed="-1"
          class="img-parallax"
        />
        <p id="demo"></p>
        <script>
          const myTestElement = document.getElementById("demo");
          myTestElement.innerHTML = "Hello World!";
        </script>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "kaBeech - Contact",
  meta: [
    {
      name: "description",
      content: "Contact Me!",
    },
  ],
};

// const myTestBackground =
//         document.getElementById("img-parallax"); useOnWindow( "scroll",
//         $((event) {"=>"}{" "}
//         {(myTestBackground.style.backgroundPosition = +window.scrollY)}) );
