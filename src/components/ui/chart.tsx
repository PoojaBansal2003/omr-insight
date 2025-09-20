// Simple chart component replacement to avoid TypeScript conflicts
// Using our custom SimpleChart components instead

import * as React from "react"

// Basic chart context for compatibility
const ChartContext = React.createContext<{ config?: any }>({ config: {} });

export const useChart = () => {
  const context = React.useContext(ChartContext);
  return context;
};

export const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    config?: any;
  }
>(({ children, className, config, ...props }, ref) => {
  return (
    <ChartContext.Provider value={{ config }}>
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    </ChartContext.Provider>
  );
});

ChartContainer.displayName = "ChartContainer";

// Basic tooltip component
export const ChartTooltip = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
});

ChartTooltip.displayName = "ChartTooltip";

// Basic tooltip content
export const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
});

ChartTooltipContent.displayName = "ChartTooltipContent";

// Basic legend
export const ChartLegend = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
});

ChartLegend.displayName = "ChartLegend";

// Basic legend content
export const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
});

ChartLegendContent.displayName = "ChartLegendContent";