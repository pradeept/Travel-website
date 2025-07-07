'use client'
import { MessageCircleWarning } from "lucide-react";

export default function ErrorHandler() {
  return (
    <div className=' min-h-screen min-w-screen flex flex-col justify-center items-center'>
      <MessageCircleWarning size={40} />
      500 | Something went wrong!
    </div>
  );
}
