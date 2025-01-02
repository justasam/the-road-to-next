import { LucideMessageSquareWarning, LucideProps } from "lucide-react";
import { cloneElement } from "react";

import { cn } from "@/lib/utils";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<LucideProps>;
  button?: React.ReactElement<{ className?: string }>;
};

const Placeholder = ({
  label,
  icon = <LucideMessageSquareWarning />,
  button = <div />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      {cloneElement(icon, {
        className: cn("w-16 h-16", icon.props.className),
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button, {
        className: cn("h-10", button.props.className),
      })}
    </div>
  );
};

export { Placeholder };
