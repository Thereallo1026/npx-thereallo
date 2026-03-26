import React from "react";
import { Box, Text, useApp } from "ink";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";
import Link from "ink-link";

const DIVIDER = "─".repeat(48);

type SocialLink = { label: string; url: string };

const socials: SocialLink[] = [
	{ label: "github", url: "https://github.com/Thereallo1026" },
	{ label: "twitter", url: "https://twitter.com/Thereallo1026" },
	{ label: "bluesky", url: "https://bsky.app/profile/cognosphere.bsky.social" },
	{ label: "telegram", url: "https://t.me/Thereallo1026" },
	{ label: "email", url: "mailto:personal@thereallo.dev" },
	{ label: "web", url: "https://thereallo.dev" },
];

const stack = ["TypeScript", "React", "Next.js", "Tailwind", "Go", "Expo", "Cloudflare"];

const projects = [
	{ name: "dispackage", url: "https://dispackage.thereallo.dev", desc: "Discord data package analyzer" },
	{ name: "shape-morph", url: "https://shape-morph.thereallo.dev", desc: "Material Design 3 shape morphing" },
	{ name: "wordle hints", url: "https://wordle.thereallo.dev", desc: "Hints & answers for Wordle" },
	{ name: "umaplanner", url: "https://umaplanner.thereallo.dev", desc: "Banner planner for Umamusume" },
];

function Row({ label, children }: { label: string; children: React.ReactNode }) {
	return (
		<Box>
			<Text color="magenta" bold>
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
		<Box flexDirection="column" paddingX={1} paddingY={1} gap={0}>
			{/* Header */}
			<Gradient colors={["#f472b6", "#a78bfa", "#67e8f9"]}>
				<BigText text="thereallo" font="tiny" />
			</Gradient>

			<Text dimColor>{DIVIDER}</Text>

			{/* Bio */}
			<Box marginBottom={1}>
				<Text>
					web dev & designer · building since 2020{"\n"}
					<Text dimColor>frontend-first, fullstack-capable, ex reverse engineer</Text>
				</Text>
			</Box>

			<Text dimColor>{DIVIDER}</Text>

			{/* Stack */}
			<Box marginY={1} flexDirection="column" gap={0}>
				<Row label="stack">
					<Text>{stack.join("  ·  ")}</Text>
				</Row>
			</Box>

			<Text dimColor>{DIVIDER}</Text>

			{/* Projects */}
			<Box marginY={1} flexDirection="column" gap={0}>
				{projects.map((p) => (
					<Row key={p.name} label={p.name}>
						<Link url={p.url} fallback={false}>
							<Text color="cyan">{p.url.replace("https://", "")}</Text>
						</Link>
						<Text dimColor>{"  "}{p.desc}</Text>
					</Row>
				))}
			</Box>

			<Text dimColor>{DIVIDER}</Text>

			{/* Socials */}
			<Box marginTop={1} flexDirection="column" gap={0}>
				{socials.map((s) => (
					<Row key={s.label} label={s.label}>
						<Link url={s.url} fallback={false}>
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
