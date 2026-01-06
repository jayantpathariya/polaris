"use client";

import { Button } from "@/components/ui/button";

const Page = () => {
  const handleBlocking = async () => {
    await fetch("/api/demo/blocking", { method: "POST" });
  };

  const handleUnblocking = async () => {
    await fetch("/api/demo/background", { method: "POST" });
  };

  return (
    <div className="p-8 space-x-4">
      <Button onClick={handleBlocking}>Blocking</Button>
      <Button onClick={handleUnblocking}>Background</Button>
    </div>
  );
};

export default Page;
