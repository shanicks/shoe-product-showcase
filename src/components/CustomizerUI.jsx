import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

const PARTS = ["body", "sole"];

function CustomizerUI({ selectedPart, setSelectedPart, color, setColor }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-3 right-0 z-10">
      <Collapsible open={open} onOpenChange={setOpen}>
        <Card className="w-52 shadow-xl backdrop-blur-md bg-white/80">
          <div className="flex items-center justify-between px-4 py-2 border-b">
            <span className="text-sm font-semibold">Customizer</span>

            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon">
                {open ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
              </Button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent>
            <CardContent className="p-4 space-y-4">
              {/* Part Selector */}
              <div>
                <Label className="text-sm font-semibold">Select Part</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {PARTS.map((part) => (
                    <Button
                      key={part}
                      variant={selectedPart === part ? "default" : "outline"}
                      className="capitalize"
                      onClick={() => setSelectedPart(part)}
                    >
                      {part}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Color Picker */}
              <div>
                <Label className="text-sm font-semibold">Color</Label>
                <div className="flex items-center gap-3 mt-2">
                  <Input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-12 h-10 p-1 cursor-pointer"
                  />

                  <Input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </div>
  );
}

export default CustomizerUI;