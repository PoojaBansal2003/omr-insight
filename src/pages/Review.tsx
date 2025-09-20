import { useState } from "react";
import { ChevronLeft, ChevronRight, Check, X, AlertTriangle, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock flagged sheets data
const flaggedSheets = [
  {
    id: 1,
    studentName: "Priya Patel",
    rollNumber: "2024002",
    subject: "Mathematics",
    questionNumber: 15,
    imageUrl: "/api/placeholder/800/1000",
    bubbleOverlays: [
      { id: 1, x: 45, y: 320, isAmbiguous: true, detectedAnswers: ["B", "C"] },
      { id: 2, x: 45, y: 280, isAmbiguous: false, detectedAnswers: ["A"] },
    ],
    flaggedAt: "2024-01-15 14:30"
  },
  {
    id: 2,
    studentName: "Sneha Agarwal",
    rollNumber: "2024004",
    subject: "Science",
    questionNumber: 8,
    imageUrl: "/api/placeholder/800/1000",
    bubbleOverlays: [
      { id: 3, x: 45, y: 180, isAmbiguous: true, detectedAnswers: ["A", "D"] },
    ],
    flaggedAt: "2024-01-15 15:45"
  },
];

export default function Review() {
  const [currentSheet, setCurrentSheet] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [selectedBubble, setSelectedBubble] = useState<number | null>(null);

  const sheet = flaggedSheets[currentSheet];

  const handleAccept = (bubbleId: number) => {
    console.log(`Accepted bubble ${bubbleId} for sheet ${sheet.id}`);
    // In real app: update database with accepted answer
  };

  const handleCorrect = (bubbleId: number, newAnswer: string) => {
    console.log(`Corrected bubble ${bubbleId} to ${newAnswer} for sheet ${sheet.id}`);
    // In real app: update database with corrected answer
  };

  const nextSheet = () => {
    if (currentSheet < flaggedSheets.length - 1) {
      setCurrentSheet(currentSheet + 1);
      setSelectedBubble(null);
    }
  };

  const prevSheet = () => {
    if (currentSheet > 0) {
      setCurrentSheet(currentSheet - 1);
      setSelectedBubble(null);
    }
  };

  if (flaggedSheets.length === 0) {
    return (
      <div className="text-center space-y-6 py-16">
        <div className="mx-auto w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center">
          <Check className="h-8 w-8 text-success" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">All Clear!</h1>
          <p className="text-lg text-muted-foreground">
            No flagged sheets require manual review at this time.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Flagged Sheets Review</h1>
          <p className="text-muted-foreground">
            Review and resolve ambiguous bubble marks detected by the system
          </p>
        </div>
        <Badge variant="outline" className="status-warning">
          <AlertTriangle className="h-4 w-4 mr-1" />
          {flaggedSheets.length} sheets need review
        </Badge>
      </div>

      {/* Navigation */}
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSheet}
              disabled={currentSheet === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              Sheet {currentSheet + 1} of {flaggedSheets.length}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSheet}
              disabled={currentSheet === flaggedSheets.length - 1}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setZoom(Math.max(0.5, zoom - 0.25))}
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground min-w-16 text-center">
              {Math.round(zoom * 100)}%
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setZoom(Math.min(2, zoom + 0.25))}
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sheet Information */}
        <Card className="p-6 lg:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Sheet Information</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Student Name</label>
              <p className="text-lg font-medium">{sheet.studentName}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Roll Number</label>
              <p className="text-lg font-medium">{sheet.rollNumber}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Subject</label>
              <p className="text-lg font-medium">{sheet.subject}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Flagged At</label>
              <p className="text-sm">{sheet.flaggedAt}</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            <h4 className="font-medium mb-3">Detected Issues</h4>
            <div className="space-y-3">
              {sheet.bubbleOverlays.filter(b => b.isAmbiguous).map((bubble) => (
                <div
                  key={bubble.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedBubble === bubble.id
                      ? "border-primary bg-primary/10"
                      : "border-border bg-muted/30 hover:bg-muted/50"
                  }`}
                  onClick={() => setSelectedBubble(bubble.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Question {sheet.questionNumber}</span>
                    <AlertTriangle className="h-4 w-4 text-warning" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Detected multiple marks: {bubble.detectedAnswers.join(", ")}
                  </p>
                  <div className="flex space-x-2">
                    {bubble.detectedAnswers.map((answer) => (
                      <Button
                        key={answer}
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCorrect(bubble.id, answer);
                        }}
                        className="h-8 px-3"
                      >
                        Accept {answer}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t space-y-2">
            <Button
              className="w-full btn-hero"
              onClick={() => handleAccept(selectedBubble || 0)}
              disabled={!selectedBubble}
            >
              <Check className="h-4 w-4 mr-2" />
              Accept Current Selection
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setSelectedBubble(null)}
            >
              <X className="h-4 w-4 mr-2" />
              Mark as Invalid
            </Button>
          </div>
        </Card>

        {/* OMR Sheet Image */}
        <Card className="p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">OMR Sheet with Detected Bubbles</h3>
          <div className="relative overflow-hidden rounded-lg border bg-muted/20">
            <div 
              className="relative mx-auto"
              style={{ 
                transform: `scale(${zoom})`,
                transformOrigin: 'top center',
                transition: 'transform 0.2s ease-in-out'
              }}
            >
              {/* Placeholder for OMR sheet image */}
              <div className="w-full h-[600px] bg-gradient-to-br from-card to-muted/50 border-2 border-dashed border-muted-foreground/25 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <AlertTriangle className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-medium">OMR Sheet Preview</p>
                    <p className="text-sm text-muted-foreground">
                      {sheet.studentName} - {sheet.rollNumber}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bubble Overlays */}
              {sheet.bubbleOverlays.map((bubble) => (
                <div
                  key={bubble.id}
                  className={`absolute w-6 h-6 rounded-full border-2 cursor-pointer transition-all ${
                    bubble.isAmbiguous
                      ? selectedBubble === bubble.id
                        ? "border-primary bg-primary/20 scale-125"
                        : "border-destructive bg-destructive/20 hover:scale-110"
                      : "border-success bg-success/20"
                  }`}
                  style={{
                    left: `${bubble.x}%`,
                    top: `${bubble.y}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={() => bubble.isAmbiguous && setSelectedBubble(bubble.id)}
                >
                  {bubble.isAmbiguous && (
                    <AlertTriangle className="h-3 w-3 text-destructive absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            <p>• Red circles indicate ambiguous marks requiring review</p>
            <p>• Green circles show clearly detected marks</p>
            <p>• Click on red circles to select and review specific issues</p>
          </div>
        </Card>
      </div>
    </div>
  );
}