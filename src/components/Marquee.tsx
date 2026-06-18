"use client";

const ITEMS = [
  "SOFTWARE ENGINEER",
  "DOCKER",
  "DOTNET",
  "TERRAFORM",
  "GHA",
  "BASED IN FRANCE",
  "JENKINS",
  "AWS",
  "MICROSERVICES",
  "AZURE",
  "DEVOPS",
  "CI/CD",
  "GITLAB",
  "JIRA",
  "CLOUD",
];

function Dot() {
  return (
    <span className="mx-6 text-violet-500 text-xs select-none">✦</span>
  );
}

const Content = () => (
  <div className="flex shrink-0 items-center">
    {ITEMS.map((item, i) => (
      <span
        key={i}
        className="inline-flex items-center text-[11px] font-mono tracking-[0.2em] text-zinc-500 uppercase whitespace-nowrap"
      >
        {item}
        <Dot />
      </span>
    ))}
  </div>
);

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-black/[0.07] dark:border-white/[0.07] py-4">
      <div
        className="flex marquee"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        <Content />
        <Content aria-hidden />
      </div>
    </div>
  );
}
