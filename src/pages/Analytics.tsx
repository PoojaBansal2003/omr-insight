import { SimpleBarChart, SimplePieChart } from "@/components/charts/SimpleChart";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, BarChart3, PieChart } from "lucide-react";

// Mock data
const subjectData = [
  { name: "Mathematics", value: 82, students: 150, difficulty: "high" },
  { name: "Science", value: 78, students: 150, difficulty: "medium" },
  { name: "English", value: 85, students: 150, difficulty: "low" },
  { name: "Social Studies", value: 88, students: 150, difficulty: "low" },
  { name: "Hindi", value: 80, students: 150, difficulty: "medium" },
];

const passFailData = [
  { name: "Pass (≥60%)", value: 89 },
  { name: "Fail (<60%)", value: 11 },
];

const performanceDistribution = [
  { name: "Excellent (90-100%)", value: 25 },
  { name: "Good (80-89%)", value: 35 },
  { name: "Average (70-79%)", value: 22 },
  { name: "Below Average (60-69%)", value: 7 },
  { name: "Poor (<60%)", value: 11 },
];

const strengthsWeaknesses = [
  {
    subject: "Mathematics",
    strengths: ["Algebra", "Basic Operations"],
    weaknesses: ["Geometry", "Word Problems"],
    averageScore: 82,
    trend: "up"
  },
  {
    subject: "Science",
    strengths: ["Physics Concepts", "Chemistry Basics"],
    weaknesses: ["Biology", "Environmental Science"],
    averageScore: 78,
    trend: "down"
  },
  {
    subject: "English",
    strengths: ["Grammar", "Vocabulary"],
    weaknesses: ["Comprehension", "Essay Writing"],
    averageScore: 85,
    trend: "up"
  },
  {
    subject: "Social Studies",
    strengths: ["History", "Geography"],
    weaknesses: ["Civics", "Economics"],
    averageScore: 88,
    trend: "up"
  },
  {
    subject: "Hindi",
    strengths: ["Grammar", "Literature"],
    weaknesses: ["Essay Writing", "Poetry"],
    averageScore: 80,
    trend: "stable"
  },
];

export default function Analytics() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Performance Analytics
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive insights into student performance patterns, subject-wise analysis, and learning outcomes.
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 hover-glow">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">85.2%</div>
            <div className="text-sm text-muted-foreground">Overall Average</div>
            <div className="flex items-center justify-center space-x-1 text-success">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm">+2.3% from last exam</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover-glow">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-success">89%</div>
            <div className="text-sm text-muted-foreground">Pass Rate</div>
            <div className="flex items-center justify-center space-x-1 text-success">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm">+5.1% improvement</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover-glow">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-warning">8</div>
            <div className="text-sm text-muted-foreground">Flagged Sheets</div>
            <div className="flex items-center justify-center space-x-1 text-destructive">
              <TrendingDown className="h-4 w-4" />
              <span className="text-sm">Needs review</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="chart-container">
          <div className="flex items-center space-x-2 mb-4">
            <BarChart3 className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Subject-wise Average Scores</h3>
          </div>
          <SimpleBarChart data={subjectData} />
          <div className="mt-4 text-sm text-muted-foreground">
            Average performance across all subjects with difficulty indicators
          </div>
        </Card>

        <Card className="chart-container">
          <div className="flex items-center space-x-2 mb-4">
            <PieChart className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Pass/Fail Distribution</h3>
          </div>
          <SimplePieChart data={passFailData} />
          <div className="mt-4 text-sm text-muted-foreground">
            Overall pass rate distribution (Passing grade: 60%)
          </div>
        </Card>
      </div>

      {/* Performance Distribution */}
      <Card className="chart-container">
        <div className="flex items-center space-x-2 mb-4">
          <BarChart3 className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-semibold">Performance Distribution</h3>
        </div>
        <SimpleBarChart data={performanceDistribution} />
        <div className="mt-4 text-sm text-muted-foreground">
          Student distribution across different performance bands
        </div>
      </Card>

      {/* Strengths & Weaknesses Analysis */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-6">Subject-wise Strengths & Weaknesses</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {strengthsWeaknesses.map((subject) => (
            <div
              key={subject.subject}
              className="bg-muted/30 rounded-xl p-5 hover-lift space-y-4"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-lg">{subject.subject}</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold">{subject.averageScore}%</span>
                  {subject.trend === "up" && <TrendingUp className="h-4 w-4 text-success" />}
                  {subject.trend === "down" && <TrendingDown className="h-4 w-4 text-destructive" />}
                  {subject.trend === "stable" && <div className="h-4 w-4 bg-muted-foreground rounded-full" />}
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-success mb-2">Strengths</div>
                  <div className="flex flex-wrap gap-1">
                    {subject.strengths.map((strength) => (
                      <Badge
                        key={strength}
                        variant="outline"
                        className="status-success text-xs"
                      >
                        {strength}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium text-destructive mb-2">Areas for Improvement</div>
                  <div className="flex flex-wrap gap-1">
                    {subject.weaknesses.map((weakness) => (
                      <Badge
                        key={weakness}
                        variant="outline"
                        className="status-error text-xs"
                      >
                        {weakness}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Insights */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Key Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-success/10 border border-success/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <TrendingUp className="h-5 w-5 text-success mt-1" />
              <div>
                <h4 className="font-medium text-success">Strong Performance</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Social Studies shows the highest average score (88%), indicating effective teaching methods in this subject.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <TrendingDown className="h-5 w-5 text-warning mt-1" />
              <div>
                <h4 className="font-medium text-warning">Attention Needed</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Science performance has declined slightly. Focus on Biology and Environmental Science topics.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <BarChart3 className="h-5 w-5 text-primary mt-1" />
              <div>
                <h4 className="font-medium text-primary">Overall Trend</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  89% pass rate indicates good overall performance with room for improvement in lower-performing students.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <TrendingDown className="h-5 w-5 text-destructive mt-1" />
              <div>
                <h4 className="font-medium text-destructive">Review Required</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  8 sheets flagged for manual review due to ambiguous bubble marks. Priority attention needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}