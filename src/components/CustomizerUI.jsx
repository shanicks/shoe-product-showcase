import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PARTS = ["body", "sole", "laces", "plastic"];

function CustomizerUI({ selectedPart, setSelectedPart, color, setColor }) {
  return (
    <div className="absolute top-6 left-6 z-10">
      <Card className="w-64 shadow-xl backdrop-blur-md bg-white/80">
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
              {/* Color Input */}
              <Input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-12 h-10 p-1 cursor-pointer"
              />

              {/* Hex Input */}
              <Input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="flex-1"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CustomizerUI;
