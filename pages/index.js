import Head from "next/head";
import WorkList from "../components/work_list";
import Work from "../components/work";
import Section from "../components/section";
import Project from "../components/project";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Head>
        <title>Kuhn.dev - Software and Project Development - Fabio Kuhn</title>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/icons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/icons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/icons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/icons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <header className="container py-12 flex flex-col lg:flex-row justify-center items-center w-full text-gray-800">
        <div className="w-48 h-48">
          <img
            src="/images/kuhn logo.svg"
            alt="Fabio Kuhn"
            objectFit="cover"
            layout="fill"
            className="rounded-full"
          />
        </div>
        <div className="text-center lg:text-left lg:ml-8 flex flex-col">
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest">
            <div className="text-blue">KUHN.DEV</div>
          </h1>
          <p className="md:text-xl tracking-widest block uppercase md:inline md:rounded-md text-red">
            Building effective digital solutions
          </p>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <Section title="About me" className="bg-grey-light-rotated-left">
          <div className="mb-12 mx-auto w-48 h-48 rounded-full border-8 shadow-xl relative border-blue">
            <img
              src="/images/fabiokuhn.jpg"
              alt="Fabio Kuhn"
              style={{ objectFit: "cover" }}
              className="rounded-full"
            />
          </div>
          <p className="text-lg text-left pb-2">
            Hi, I'm Fabio, a software developer and technical leader with over
            20 years of experience across startups, agencies, and large
            enterprises. My strengths are in full-stack web development (Ruby on
            Rails, Next.js, PostgreSQL), system architecture, IT security, and
            technical leadership.
          </p>
          <p className="text-lg text-left">
            I have a proven track record in building and growing engineering
            teams, migrating and modernizing legacy systems, and reliably
            maintaining business-critical platforms. Experienced in collaborating
            with international, remote teams.
          </p>
        </Section>
        <Section title="Services">
          <div className="text-left mx-auto">
            <h3 className="text-xl pb-1">Software Development</h3>
            <p className="text-xl pb-8">
              Custom application development in both new and legacy projects.
              Experienced in the full stack of a web application – from
              databases to backend to frontend – or any part of them.
            </p>
            <h3 className="text-xl pb-1">System Design</h3>
            <p className="text-xl pb-8">
              A crucial part of your product development process is figuring out
              the optimal system design. Defining the architecture, modules,
              interfaces, and data for a system to satisfy your specific
              requirements.
            </p>

            <h3 className="text-xl pb-1">Consulting</h3>
            <p className="text-xl pb-4">
              You are starting a new project and lack certain skills or can you
              use support in an existing team?
            </p>
            <div className="pl-6">
              <h4 className="font-body text-lg pb-1 underline">
                Software Development, Deployment and Operations
              </h4>
              <p className="text-xl pb-4">
                Transform your development into a continuous success of
                delivering high quality. Writing maintainable code, balance
                velocity with risks and ensure high uptime.
              </p>
              <h4 className="font-body text-lg pb-1 underline">
                Development methodologies and team setup
              </h4>
              <p className="text-xl pb-4">
                Key part of creating valuable outcomes is to optimize your
                processes around the product development. Ensuring involvement
                of key stakeholders and identifying constraints to figure out
                clear structures and reasonable processes.
              </p>
              <h4 className="font-body text-lg pb-1 underline">
                Product planning
              </h4>
              <p className="text-xl pb-4">
                What objectives to prioritize and how to reach key metric goals?
                I can help you figure out the path from your vision to an
                understandable strategy that leads to concrete actions.
              </p>
              <h4 className="font-body text-lg pb-1 underline">Hiring</h4>
              <p className="text-xl pb-8">
                Grow your business and hire the right people by getting a second
                opinion on a candidate.
              </p>
            </div>

            <h3 className="text-xl pb-1">Coaching</h3>
            <p className="text-xl pb-8">
              You’ve learned the craft but still feel a bit unsure of the
              practice? Or maybe you hired a new programmer and want him to get
              started on the right foot? I’ll help you get up to speed with
              virtual or in-person pair programming and async code reviews.
            </p>
          </div>
        </Section>
        <Section title="My skillset">
          <div className="text-left mx-auto">
            <p className="text-lg pb-8">
              It's hard to list all the skills and things I do or did over the
              past years. I selected some of the more important and interesting
              skills and tools for which I have professional experiences with.
            </p>

            <p className="p-2">
              <span className="font-bold">Languages & Frameworks:</span> Ruby on
              Rails, JavaScript, Node.js, React, Next.js, GraphQL
            </p>
            <p className="p-2">
              <span className="font-bold">Databases:</span> PostgreSQL, MySQL, Redis
            </p>
            <p className="p-2">
              <span className="font-bold">DevOps & Cloud:</span> Heroku, AWS (RDS,
              S3, CloudFront), CI/CD, Docker
            </p>
            <p className="p-2">
              <span className="font-bold">Frontend:</span> HTML, CSS (SCSS,
              TailwindCSS), StimulusJS, Responsive Design
            </p>
            <p className="p-2">
              <span className="font-bold">IT Security:</span> System architecture,
              security best practices, data governance, infrastructure planning
            </p>
            <p className="p-2">
              <span className="font-bold">Project Management:</span> Shape Up,
              Scrum, Kanban, OKR planning, roadmap development
            </p>
            <p className="p-2">
              <span className="font-bold">Leadership:</span> Remote team management,
              recruiting, coaching, team building
            </p>
          </div>
        </Section>
        <Section
          title="Some of the projects I worked on"
          className="bg-grey-light-rotated-right"
        >
          <div className="w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 pt-12">
            <Project
              title="Giving Multiplier"
              img="/images/giving_multiplier.jpg"
              href="https://givingmultiplier.org"
            >
              Donation platform built from the ground up in collaboration with
              Prof. Joshua Greene (Harvard) and Prof. Lucius Caviola
              (Cambridge). Over 15,000 donations processed with a total volume
              of $6.2M, of which $4.1M went to highly effective charities.
            </Project>
            <Project
              title="Giving What We Can"
              img="/images/gwwc_screenshot.jpg"
              href="https://www.givingwhatwecan.org"
            >
              Global community of effective givers. As Director of Technology,
              led the platform migration, infrastructure separation, and website
              redesign that supported doubling the community membership.
            </Project>
            <Project
              title="Algrano"
              img="/images/algrano.jpg"
              href="https://www.algrano.com"
            >
              Algrano is a Swiss tech startup that changes the global trade of
              coffee. Using technology, Algrano has set an ambitious goal to
              revolutionise the centuries old coffee trade industry and make it
              more transparent. Through the Algrano online platform, coffee
              growers promote and sell their coffees straight to roasters in
              Europe
            </Project>
            <Project
              title="local.ch"
              img="/images/local_ch.jpg"
              href="https://www.local.ch"
            >
              local.ch is the swiss phone directory. Recently they switched
              their entire front-end to Ruby. It is one of the most visited
              websites in Switzerland.
            </Project>
          </div>
        </Section>

        <Section title="My work experience">
          <WorkList className="w-full">
            <Work
              company="kuhn.dev"
              title="Full-Stack Developer & Consultant"
              date="2021 - now"
              img="images/kuhn.png"
            >
              Freelance development and technical consulting. Main project:{" "}
              <a
                rel="noopener noreferrer nofollow"
                target="_blank"
                href="https://givingmultiplier.org/"
              >
                Giving Multiplier
              </a>
              .
              <p className="pt-8 text-left">
                <span className="font-bold">Key Achievements</span>
                <ul className="ml-8 list-disc">
                  <li>
                    Built Giving Multiplier from the ground up as a solo
                    developer, in collaboration with Prof. Joshua Greene
                    (Harvard) and Prof. Lucius Caviola (Cambridge)
                  </li>
                  <li>
                    Processed over 15,000 donations with a total volume of
                    $6.2M, of which $4.1M went to highly effective charities
                  </li>
                  <li>
                    Additional client:{" "}
                    <a
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      href="https://funds.effectivealtruism.org/"
                    >
                      EA Funds
                    </a>{" "}
                    (technical support and development of the grantmaking
                    platform)
                  </li>
                </ul>
              </p>
            </Work>
            <Work
              company="Giving What We Can"
              title="Director of Technology"
              date="2021 - 2026"
              img="images/gwwc.png"
            >
              Technical leadership of a global non-profit in effective giving.
              Changed roles three times from Senior Engineer to Director of
              Technology.
              <p className="pt-8 text-left">
                <span className="font-bold">Key Achievements</span>
                <ul className="ml-8 list-disc">
                  <li>
                    Built engineering team from 1 to 3; supported org growth
                    from 4 to 16 staff with very high team retention
                  </li>
                  <li>
                    Led full technical separation of infrastructure from parent
                    org (Effective Ventures) — completed without service
                    interruptions
                  </li>
                  <li>
                    Migrated and consolidated legacy donation platform into a
                    simplified, maintainable architecture (Next.js, GraphQL,
                    PostgreSQL)
                  </li>
                  <li>
                    Implemented tipping feature: 300% increase in processed
                    donation volume
                  </li>
                  <li>
                    Built pledge club system with 100+ new pledges including
                    dashboard infrastructure
                  </li>
                  <li>
                    Reduced financial reconciliation from six weeks to weekly
                    cycles
                  </li>
                  <li>
                    Redesigned entire web presence; supported doubling of
                    community members
                  </li>
                </ul>
              </p>
            </Work>
            <Work
              company="Algrano"
              title="Principal & Lead Engineer"
              date="2014 - 2021"
              img="images/algrano_logo.jpg"
            >
              First technical hire at an international coffee trading platform.
              Built the entire product and technical infrastructure from scratch.
              <p className="pt-8 text-left">
                <span className="font-bold">Key Achievements</span>
                <ul className="ml-8 list-disc">
                  <li>
                    Sole developer from project start until August 2018; then
                    built and led a team of 6 (4 engineers, 2 frontend
                    designers)
                  </li>
                  <li>
                    Built complete trading platform: from the first order (half
                    container, 4 orders, 2015) to hundreds of containers between
                    Latin America, Africa, Asia and Europe
                  </li>
                  <li>
                    Full-stack development with Ruby on Rails and JavaScript;
                    co-shaped product strategy and technical roadmap
                  </li>
                  <li>
                    Evaluated, built and maintained the technology stack over the
                    entire product lifecycle
                  </li>
                </ul>
              </p>
            </Work>
            <Work
              company="Simplificator"
              title="Software Engineer"
              date="2010 - 2013"
              img="images/simplificator.jpg"
            >
              Software development at a leading Swiss Ruby on Rails agency.
              Building new projects and contributing to major clients like
              local.ch (one of the most visited websites in Switzerland).
              <p className="pt-8 text-left">
                <span className="font-bold">Key Achievements</span>
                <ul className="ml-8 list-disc">
                  <li>
                    Engineering with Ruby on Rails, RubyMotion and JavaScript
                    for diverse clients (startups, Swisscom/local.ch, myclimate)
                  </li>
                  <li>
                    Project specification, on-site technical consulting and
                    quality assurance
                  </li>
                </ul>
              </p>
            </Work>
            <Work
              company="WhinyByte"
              title="CEO and Software Engineer"
              date="2009 - 2014"
              img="images/whinybyte.jpg"
            >
              Co-founder and technical lead of a software startup. Developed and
              sold three products: middle (CMS), coiff (appointment management
              for hairdressers) and fahrschule.ch (directory and appointment
              management). Responsible for engineering, project management,
              customer support and server management.
            </Work>
            <Work
              company="Coop"
              title="Software Developer"
              date="2004 - 2009"
              img="images/coop.jpg"
            >
              IT apprenticeship with technical baccalaureate followed by
              employment as a software developer. Java web development, ABAP/SAP
              development, API design and IT support.
            </Work>
          </WorkList>
        </Section>

        <Section title="Contact" className="bg-grey-light-rotated-left w-full">
          <p className="pb-3">
            <span className="p-4 mb-3 block">
              Interested in having a conversation?
              <br />
              Send me an email to
            </span>
            <code className="p-3 font-mono text-lg bg-green-light rounded-md text-black">
              fabio@kuhn.dev
            </code>
            <br />
            <a
              className="block my-5 hover:underline"
              rel="noopener noreferrer nofollow"
              target="_blank"
              href="https://www.linkedin.com/in/fabio-kuhn-647173a2/"
            >
              {" "}
              or check my LinkedIn Profile
            </a>
          </p>
        </Section>
      </main>

      <footer className="flex flex-wrap items-center justify-center w-full h-24 mt-8 px-8">
        <a className="hover:underline text-center" href="#">
          Congratulations! You reached the end.
          <br />
          Back to the top?
        </a>
        <small className="w-full text-center">
          Note: This website has no cookies and no JS tracking
        </small>
      </footer>
    </div>
  );
}
