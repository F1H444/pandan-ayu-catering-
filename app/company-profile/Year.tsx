"use client";

import { useEffect, useState } from "react";

export default function Year({ separator = true }: { separator?: boolean }) {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (year === null) return null;
  return (
    <>
      {separator ? " · " : ""}
      {year}
    </>
  );
}
