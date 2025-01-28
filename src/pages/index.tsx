import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import * as motion from "motion/react-client";

const pageStyles = {
  backgroundColor: "#0f1115",
  backgroundImage:
    "linear-gradient(#0f1115 60%,transparent 100%),radial-gradient(#0d63f8 1px,transparent 1px),radial-gradient(#0d63f8 1px,transparent 1px)",
  backgroundPosition:
    "0 0,0 0, calc(var(--gap-size) / 2) calc(var(--gap-size) / 2)",
  backgroundSize: "100% 100%,20px 20px,20px 20px",
};
const box = {
  width: 100,
  height: 100,
  backgroundColor: "#9911ff",
  borderRadius: 5,
};

const IndexPage: React.FC = () => {
  return (
    <main style={pageStyles} className="h-full text-slate-400">
      <div className="max-w-screen-2xl flex px-8 mx-auto">
        {/* Sidebar */}
        <aside className="w-1/3 sticky top-0 h-screen py-10">
          <header className="mb-10">
            <h1 className="text-4xl font-bold text-white">Mykhailo Parm</h1>
            <h2 className="text-lg font-medium text-white">Position</h2>
            <p className="text-sm leading-relaxed mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              necessitatibus.
            </p>
          </header>
          <nav className="mb-10">
            <ul className="space-y-4">
              <li>
                <a href="#about" className="hover:text-white cursor-pointer">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="hover:text-white cursor-pointer"
                >
                  Education
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white cursor-pointer">
                  Projects
                </a>
              </li>
            </ul>
          </nav>
          <footer className="flex gap-4 text-xl">
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com" aria-label="GitHub">
              <FaGithub />
            </a>
          </footer>
        </aside>
        <section className="w-2/3 py-10">
          <div id="about">
            <article className="max-w-2xl mx-auto flex flex-col gap-2">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                magni iusto debitis ea a quis optio beatae, ut quasi mollitia
                architecto distinctio illum iste id consequuntur veniam maxime
                exercitationem fugiat?
              </p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                magni iusto debitis ea a quis optio beatae, ut quasi mollitia
                architecto distinctio illum iste id consequuntur veniam maxime
                exercitationem fugiat?
              </p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                magni iusto debitis ea a quis optio beatae, ut quasi mollitia
                architecto distinctio illum iste id consequuntur veniam maxime
                exercitationem fugiat?
              </p>
            </article>
          </div>
          <div id="education">
            
          </div>
        </section>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
