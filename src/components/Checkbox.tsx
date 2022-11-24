import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export interface CheckboxProps {}
export function Checkbox({}: CheckboxProps) {
  return (
    <RadixCheckbox.Root className="h-6 w-6 p-[2px] bg-gray-800 rounded">
      <RadixCheckbox.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
}
