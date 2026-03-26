import { Box, Text, useApp } from "ink";
import BigText from "ink-big-text";
import Gradient from "ink-gradient";
import Link from "ink-link";
import React from "react";

const divider = "─".repeat(48);

interface SocialLink {
  label: string;
  url: string;
}

const socials: SocialLink[] = [
  { label: "github", url: "https://github.com/Thereallo1026" },
  { label: "twitter", url: "https://twitter.com/Thereallo1026" },
  { label: "bluesky", url: "https://bsky.app/profile/cognosphere.bsky.social" },
  { label: "telegram", url: "https://t.me/Thereallo1026" },
  { label: "email", url: "personal@thereallo.dev" },
  { label: "web", url: "https://thereallo.dev" },
];

const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Go",
  "Expo",
  "Cloudflare",
];

const projects = [
  {
    name: "dispackage",
    url: "https://dispackage.thereallo.dev",
    desc: "Discord data package analyzer",
  },
  {
    name: "shape-morph",
    url: "https://shape-morph.thereallo.dev",
    desc: "Material Design 3 shape morphing",
  },
  {
    name: "expo-native-storage",
    url: "https://github.com/Thereallo1026/expo-native-storage",
    desc: "Lightning-fast native storage for Expo",
  },
  {
    name: "umaplanner",
    url: "https://umaplanner.thereallo.dev",
    desc: "Banner planner for Umamusume: Pretty Derby",
  },
];

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Box>
      <Text bold color="magenta">
        {label.padEnd(12)}
      </Text>
      <Text dimColor>{"  "}</Text>
      {children}
    </Box>
  );
}

export default function App() {
  const { exit } = useApp();

  React.useEffect(() => {
    exit();
  }, [exit]);

  return (
    <Box flexDirection="column" gap={0} paddingX={1} paddingY={1}>
      {/* Header */}
      <Gradient colors={["#f472b6", "#a78bfa", "#67e8f9"]}>
        <BigText font="tiny" text="thereallo" />
      </Gradient>

      <Text dimColor>{divider}</Text>

      {/* Bio */}
      <Box marginBottom={1} marginTop={1}>
        <Text>
          web dev & designer{"\n"}
          <Text dimColor>
            frontend-first, fullstack-capable, ex reverse engineer
          </Text>
        </Text>
      </Box>

      <Text dimColor>{divider}</Text>

      {/* Stack */}
      <Box flexDirection="column" gap={0} marginY={1}>
        <Row label="stack">
          <Text>{stack.join("  ·  ")}</Text>
        </Row>
      </Box>

      <Text dimColor>{divider}</Text>

      {/* Projects */}
      <Box flexDirection="column" gap={0} marginY={1}>
        {projects.map((p) => (
          <Row key={p.name} label={p.name}>
            <Link url={p.url}>
              <Text color="cyan">{p.url.replace("https://", "")}</Text>
            </Link>
            <Text dimColor>
              {"  "}
              {p.desc}
            </Text>
          </Row>
        ))}
      </Box>

      <Text dimColor>{divider}</Text>

      {/* Socials */}
      <Box flexDirection="column" gap={0} marginTop={1}>
        {socials.map((s) => (
          <Row key={s.label} label={s.label}>
            <Link url={s.url}>
              <Text color="cyan">{s.url}</Text>
            </Link>
          </Row>
        ))}
      </Box>

      <Box marginTop={1}>
        <Text dimColor>thereallo.dev · personal@thereallo.dev</Text>
      </Box>
    </Box>
  );
}
