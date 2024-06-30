import { Button } from "@/components/ui/button";
import { useState } from "react";

function Index() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="text-center">
        <h1 className="text-3xl">Welcome to Your Bare-Bones App</h1>
        <p className="mt-2">This is a minimal web application to get you started.</p>
        <div className="mt-4">
          <Button onClick={() => setCount(count + 1)}>Click me</Button>
          <p className="mt-2">You clicked {count} times</p>
        </div>
      </div>
    </main>
  );
}

export default Index;