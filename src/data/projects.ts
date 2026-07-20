export interface Project {
  title: string;
  description: string;
  tech: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: "Real-Time Crypto Data Pipeline",
    description: "Binance WebSocket -> Kafka (3-broker KRaft) -> ClickHouse OLAP -> Grafana dashboards. Fully containerised with Docker Compose.",
    tech: ["Python", "Kafka", "ClickHouse", "Docker", "Grafana"],
    url: "https://github.com/dsoja/finance-pipeline",
  },
  {
    title: "Music Royalties Data Platform",
    description: "End-to-end ingestion, transformation, validation, and LLM-assisted mapping for financial royalties data standardisation.",
    tech: ["Python", "SQL", "AWS", "Airflow", "LLM"],
    url: "https://github.com/dsoja/royalties-platform",
  },
  {
    title: "Portfolio Website",
    description: "This site - built with Astro, deployed to GitHub Pages via npm run deploy.",
    tech: ["Astro", "TypeScript", "GitHub Pages"],
    url: "https://github.com/dsoja/portfolio-website",
  },
];
