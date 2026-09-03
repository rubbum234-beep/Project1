const SYMBOLS = [
  "{ }",
  "[ ]",
  "( )",
  "=>",
  "</>",
  "&&",
  "||",
  "===",
  "!==",
  "++",
  "::",
  "fn()",
  "const",
  "async",
  "await",
  "useState",
  "props",
  "API",
  "SQL",
  "npm",
  "git",
  "HTTP",
  "JSON",
  "<>",
  "?:",
  "...",
  "0x",
  "#",
  "$",
  "*",
  "/",
  ";",
  "tsx",
  "css",
  "map()",
  "filter",
  "reduce",
  "Promise",
  "fetch",
  "null",
];

const ROWS = 24;

function buildLine(offset: number) {
  const items = [...SYMBOLS, ...SYMBOLS];
  return items.map((_, index) => items[(index + offset) % items.length]).join("   ·   ");
}

export function CodeMarquee() {
  return (
    <div className="code-marquee" aria-hidden="true">
      <div className="code-marquee-fill">
        {Array.from({ length: ROWS }, (_, row) => (
          <div
            className={`code-marquee-row${row % 2 === 1 ? " is-reverse" : ""}`}
            key={row}
            style={{ animationDuration: `${22 + (row % 6) * 5}s` }}
          >
            <span>{buildLine(row * 5)}</span>
            <span>{buildLine(row * 5)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
