import React from "react";
import { cn } from "@/lib/utils";

interface MobileContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function MobileContainer({ children, className, ...props }: MobileContainerProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-0 md:p-8">
      <div 
        className={cn(
          "w-full h-[100dvh] md:h-[800px] md:max-w-[400px] md:rounded-[2rem] overflow-hidden relative shadow-2xl bg-background/50 backdrop-blur-sm border-x border-white/5",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
