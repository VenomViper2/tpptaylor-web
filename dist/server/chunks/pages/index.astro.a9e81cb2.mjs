import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, e as renderHead, f as renderSlot } from '../astro.f55b618a.mjs';
import 'html-escaper';
/* empty css                           *//* empty css                           *//* empty css                           *//* empty css                           */
const $$Astro$5 = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Title;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="container astro-ZFUFVVIG">
    <div class="typewriter astro-ZFUFVVIG">
        <h1 class="astro-ZFUFVVIG"><span class="text-gradient astro-ZFUFVVIG">&#123; ${title} &#125;</span></h1>    </div>
</div>`;
}, "C:/Users/tompt/tpptaylor-web/src/components/Title.astro");

const $$Astro$4 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hero;
  const { description, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section id="hero" class="astro-BBE6DXRZ">
    <div class="hero-container astro-BBE6DXRZ">
        <div class="navbar astro-BBE6DXRZ">
            <div class="menu astro-BBE6DXRZ">
                <a href="/" class="astro-BBE6DXRZ">Home</a>
                <a href="/about" class="astro-BBE6DXRZ">About</a>
                <a href="/contact" class="btn-special astro-BBE6DXRZ">Contact</a>
            </div>

        </div>
        <!-- hero content -->
        <div class="hero-box astro-BBE6DXRZ">
            <h1 class="hero-heading astro-BBE6DXRZ">${renderComponent($$result, "Title", $$Title, { "title": title, "class": "astro-BBE6DXRZ" })}</h1>
            <p class="hero-desc astro-BBE6DXRZ">${description}</p>
        </div>
    </div>
</section>`;
}, "C:/Users/tompt/tpptaylor-web/src/components/Hero.astro");

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderHead($$result)}</head>
	<body>
	${renderComponent($$result, "Hero", $$Hero, { "title": title, "description": description })}

		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "C:/Users/tompt/tpptaylor-web/src/layouts/Layout.astro");

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome.", "description": "Welcome to my website built using the Astro Framework. While it's still a work in progress, my goal is to capture and share my journey, learning experiences, and projects.", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`

    ${maybeRenderHead($$result2)}<main class="astro-J7PV25F6">
        <div class="projects astro-J7PV25F6" style="display: flex">
            <h1 class="astro-J7PV25F6">My Projects</h1>
            <p class="introduction astro-J7PV25F6">Over the last year I have contributed to the following projects</p>
            <div class="project astro-J7PV25F6">
                <h2 class="astro-J7PV25F6"><a href="https://steam.minibuilds.io/" class="astro-J7PV25F6">Steam Game Picker</a></h2>
                <p class="astro-J7PV25F6">The Steam Game Picker is a web application designed to randomly select a game from a user's Steam
                    library.
                </p>
                <p class="astro-J7PV25F6">This project was created, deployed and monitored using the following: </p>
                <ul class="astro-J7PV25F6">
                    <li class="astro-J7PV25F6">Typescript</li>
                    <li class="astro-J7PV25F6">Angular</li>
                    <li class="astro-J7PV25F6">Java</li>
                    <li class="astro-J7PV25F6">Spring Framework</li>
                    <li class="astro-J7PV25F6">Kubernetes</li>
                    <li class="astro-J7PV25F6">Docker</li>

                </ul>
                <img class="project-image astro-J7PV25F6" src="/steam-game-picker.png">
            </div>
            <div class="project astro-J7PV25F6">
                <h2 class="astro-J7PV25F6"><a href="https://dex.minibuilds.io/login" class="astro-J7PV25F6">Dex</a></h2>
                <p class="astro-J7PV25F6">Dex is an application that enables users to monitor and manage data, ranging from personal weight
                    tracking to tracking time spent on specific activities. With Dex, users have the ability to create
                    personalized tables and dashboards, facilitating convenient organization, sorting, and visualization
                    of
                    their data.</p>

                <p class="astro-J7PV25F6">This project was created, deployed and monitored using the following: </p>
                <ul class="astro-J7PV25F6">
                    <li class="astro-J7PV25F6">Typescript</li>
                    <li class="astro-J7PV25F6">Angular</li>
                    <li class="astro-J7PV25F6">Java</li>
                    <li class="astro-J7PV25F6">Spring Framework</li>
                    <li class="astro-J7PV25F6">Kubernetes</li>
                    <li class="astro-J7PV25F6">Docker</li>
                </ul>
                <img class="project-image astro-J7PV25F6" src="/dex.png">
                <p class="note astro-J7PV25F6">*Dex is under active development and is not finished</p>
            </div>

        </div>


    </main>
` })}`;
}, "C:/Users/tompt/tpptaylor-web/src/pages/index.astro");

const $$file$2 = "C:/Users/tompt/tpptaylor-web/src/pages/index.astro";
const $$url$2 = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact me", "class": "astro-AHC3Q4VW" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<main class="astro-AHC3Q4VW">
        <div class="introduction astro-AHC3Q4VW">

            <p class="astro-AHC3Q4VW">I Currently don't have contact details for this website. </p>
        </div>

    </main>
` })}`;
}, "C:/Users/tompt/tpptaylor-web/src/pages/contact/index.astro");

const $$file$1 = "C:/Users/tompt/tpptaylor-web/src/pages/contact/index.astro";
const $$url$1 = "/contact";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About me", "description": "I'm Tom, a developer with a passion for learning and coding!", "class": "astro-FWDCSVA6" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<main class="astro-FWDCSVA6">
        <div class="introduction astro-FWDCSVA6">

            <p class="astro-FWDCSVA6"> My
                journey into the world of development started after a fulfilling career as a firefighter. Now, I spend
                my
                days immersed in coding, constantly expanding my knowledge and honing my skills. </p>
            <p class="astro-FWDCSVA6">
                When I'm not coding, I enjoy spending time with my wife and our German Shepherd Luna. We cherish
                moments
                together, whether it's exploring the outdoors, diving into a good book, or simply embracing the joys of
                everyday life.
            </p>
            <p class="astro-FWDCSVA6">
                Through this website, I aim to share my learning experiences, showcase the projects I've worked on.
            </p>


    </div></main>
` })}`;
}, "C:/Users/tompt/tpptaylor-web/src/pages/about/index.astro");

const $$file = "C:/Users/tompt/tpptaylor-web/src/pages/about/index.astro";
const $$url = "/about";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
