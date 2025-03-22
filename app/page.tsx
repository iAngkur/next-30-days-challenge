import ProjectLink from "@/components/ProjectLink";
import Container from "@mui/material/Container";

const days = [
  {
    label: "Day 1",
    link: "/day1",
  },
  {
    label: "Day 2",
    link: "/day2",
  },
  {
    label: "Day 3",
    link: "/day3",
  },
  {
    label: "Day 4",
    link: "/day4",
  },
  {
    label: "Day 5",
    link: "/day5",
  },
  {
    label: "Day 6",
    link: "/day6",
  },
  {
    label: "Day 7",
    link: "/day7",
  },
  {
    label: "Day 8",
    link: "/day8",
  },
  {
    label: "Day 9",
    link: "/day9",
  },
  {
    label: "Day 10",
    link: "/day10",
  },
  {
    label: "Day 11",
    link: "/day11",
  },
  {
    label: "Day 12",
    link: "/day12",
  },
  {
    label: "Day 13",
    link: "/day13",
  },
  {
    label: "Day 14",
    link: "/day14",
  },
  {
    label: "Day 15",
    link: "/day15",
  },
  {
    label: "Day 16",
    link: "/day16",
  },
  { label: "Day 17", link: "/day17" },
  { label: "Day 18", link: "/day18" },
];

export default function Home() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: 4,
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {days.map((day) => (
        <ProjectLink key={day.label} label={day.label} link={day.link} />
      ))}
    </Container>
  );
}
