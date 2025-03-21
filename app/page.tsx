import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        // Ex: Dynamic routing with slug
        <Link href="/meals/burger">Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Share meal</Link>
      </p>
      <p>
        <Link href="/community">Create meal</Link>
      </p>
    </main>
  );
}
