"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

import { Button } from "./ui/button";

const Temp = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setQueryParam = useCallback(
    (name: string, value: any) => {
      const prevParams = new URLSearchParams(searchParams.toString());
      prevParams.set(name, String(value));
      const newParams = prevParams.toString();
      console.log(newParams);

      router.push(`${pathname}?${newParams}`);
    },
    [searchParams, pathname, router],
  );

  const [counter, setCounter] = useState(
    Number(searchParams.get("counter")) || 0,
  );

  useEffect(() => {
    // add it to search params
    setQueryParam("counter", counter);
  }, [setQueryParam, counter]);

  return (
    <div>
      <header className="my-10 text-center text-5xl font-semibold">
        Temp Check
      </header>

      <div className="flex items-center justify-center">
        <Button
          onClick={() => setCounter((prev) => prev + 1)}
          className="min-w-16"
        >
          {counter}
        </Button>
      </div>
    </div>
  );
};

export default Temp;
