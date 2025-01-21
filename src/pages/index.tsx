import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const pageStyles = {
  height: "100vh",
  backgroundImage:
    "linear-gradient(#0f1115 60%,transparent 100%),radial-gradient(#0d63f8 1px,transparent 1px),radial-gradient(#0d63f8 1px,transparent 1px)",
  backgroundPosition:
    "0 0,0 0, calc(var(--gap-size) / 2) calc(var(--gap-size) / 2)",
  backgroundSize:
    "100% 100%,20px 20px,20px 20px",
};

const IndexPage: React.FC<PageProps> = () => {
  return <div style={pageStyles}>1</div>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
