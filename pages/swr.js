// import React from "react";
import useSWR from "swr";

function useCounter() {
  const { data, mutate } = useSWR("state", () => window.count);
  return {
    data: data || 0,
    mutate: (count) => {
        window.count = count;
      mutate();
    }
  };
}

export default function Counter() {
  const { data, mutate } = useCounter();

  const handleInc = () => mutate(data + 1);
  const handleDec = () => mutate(data - 1);

  return (
    <div>
      <span>count: {data}</span>
      <button onClick={handleInc}>inc</button>
      <button onClick={handleDec}>dec</button>
    </div>
  );
}

