import { useState } from "react";
import { Search, Filter, Download, AlertTriangle, TrendingUp, Users, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Mock data
const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    rollNumber: "2024001",
    totalScore: 87,
    subjects: {
      mathematics: { score: 18, total: 20 },
      science: { score: 17, total: 20 },
      english: { score: 16, total: 20 },
      socialStudies: { score: 19, total: 20 },
      hindi: { score: 17, total: 20 }
    },
    status: "clear",
    submittedAt: "2024-01-15"
  },
  {
    id: 2,
    name: "Priya Patel",
    rollNumber: "2024002",
    totalScore: 92,
    subjects: {
      mathematics: { score: 19, total: 20 },
      science: { score: 18, total: 20 },
      english: { score: 19, total: 20 },
      socialStudies: { score: 18, total: 20 },
      hindi: { score: 18, total: 20 }
    },
    status: "flagged",
    submittedAt: "2024-01-15"
  },
  {
    id: 3,
    name: "Rahul Kumar",
    rollNumber: "2024003",
    totalScore: 76,
    subjects: {
      mathematics: { score: 15, total: 20 },
      science: { score: 16, total: 20 },
      english: { score: 14, total: 20 },
      socialStudies: { score: 16, total: 20 },
      hindi: { score: 15, total: 20 }
    },
    status: "clear",
    submittedAt: "2024-01-15"
  },
  {
    id: 4,
    name: "Sneha Agarwal",
    rollNumber: "2024004",
    totalScore: 89,
    subjects: {
      mathematics: { score: 17, total: 20 },
      science: { score: 19, total: 20 },
      english: { score: 18, total: 20 },
      socialStudies: { score: 17, total: 20 },
      hindi: { score: 18, total: 20 }
    },
    status: "flagged",
    submittedAt: "2024-01-15"
  },
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "score" | "rollNumber">("score");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const filteredStudents = students
    .filter(student => 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNumber.includes(searchTerm)
    )
    .sort((a, b) => {
      const multiplier = sortOrder === "asc" ? 1 : -1;
      if (sortBy === "score") return (a.totalScore - b.totalScore) * multiplier;
      if (sortBy === "name") return a.name.localeCompare(b.name) * multiplier;
      if (sortBy === "rollNumber") return a.rollNumber.localeCompare(b.rollNumber) * multiplier;
      return 0;
    });

  const stats = {
    totalStudents: students.length,
    averageScore: Math.round(students.reduce((sum, s) => sum + s.totalScore, 0) / students.length),
    flaggedSheets: students.filter(s => s.status === "flagged").length,
    passRate: Math.round((students.filter(s => s.totalScore >= 60).length / students.length) * 100)
  };

  const handleSort = (column: "name" | "score" | "rollNumber") => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("desc");
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Student Performance Dashboard
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive overview of student performance across all subjects with detailed analytics.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 hover-glow">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-2xl">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.totalStudents}</p>
              <p className="text-sm text-muted-foreground">Total Students</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover-glow">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-success/10 rounded-2xl">
              <Target className="h-6 w-6 text-success" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.averageScore}%</p>
              <p className="text-sm text-muted-foreground">Average Score</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover-glow">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-warning/10 rounded-2xl">
              <AlertTriangle className="h-6 w-6 text-warning" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.flaggedSheets}</p>
              <p className="text-sm text-muted-foreground">Flagged Sheets</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover-glow">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-2xl">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stats.passRate}%</p>
              <p className="text-sm text-muted-foreground">Pass Rate</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Controls */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search students by name or roll number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </Card>

      {/* Students Table */}
      <Card className="p-6">
        <div className="rounded-lg border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="table-header">
                <TableHead 
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => handleSort("rollNumber")}
                >
                  Roll Number {sortBy === "rollNumber" && (sortOrder === "asc" ? "↑" : "↓")}
                </TableHead>
                <TableHead 
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => handleSort("name")}
                >
                  Student Name {sortBy === "name" && (sortOrder === "asc" ? "↑" : "↓")}
                </TableHead>
                <TableHead className="text-center">Mathematics</TableHead>
                <TableHead className="text-center">Science</TableHead>
                <TableHead className="text-center">English</TableHead>
                <TableHead className="text-center">Social Studies</TableHead>
                <TableHead className="text-center">Hindi</TableHead>
                <TableHead 
                  className="text-center cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => handleSort("score")}
                >
                  Total Score {sortBy === "score" && (sortOrder === "asc" ? "↑" : "↓")}
                </TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id} className="table-row-hover">
                  <TableCell className="font-medium">{student.rollNumber}</TableCell>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell className="text-center">
                    <span className={`px-2 py-1 rounded text-sm ${
                      student.subjects.mathematics.score >= 16 ? 'text-success' : 
                      student.subjects.mathematics.score >= 12 ? 'text-warning' : 'text-destructive'
                    }`}>
                      {student.subjects.mathematics.score}/{student.subjects.mathematics.total}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className={`px-2 py-1 rounded text-sm ${
                      student.subjects.science.score >= 16 ? 'text-success' : 
                      student.subjects.science.score >= 12 ? 'text-warning' : 'text-destructive'
                    }`}>
                      {student.subjects.science.score}/{student.subjects.science.total}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className={`px-2 py-1 rounded text-sm ${
                      student.subjects.english.score >= 16 ? 'text-success' : 
                      student.subjects.english.score >= 12 ? 'text-warning' : 'text-destructive'
                    }`}>
                      {student.subjects.english.score}/{student.subjects.english.total}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className={`px-2 py-1 rounded text-sm ${
                      student.subjects.socialStudies.score >= 16 ? 'text-success' : 
                      student.subjects.socialStudies.score >= 12 ? 'text-warning' : 'text-destructive'
                    }`}>
                      {student.subjects.socialStudies.score}/{student.subjects.socialStudies.total}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className={`px-2 py-1 rounded text-sm ${
                      student.subjects.hindi.score >= 16 ? 'text-success' : 
                      student.subjects.hindi.score >= 12 ? 'text-warning' : 'text-destructive'
                    }`}>
                      {student.subjects.hindi.score}/{student.subjects.hindi.total}
                    </span>
                  </TableCell>
                  <TableCell className="text-center font-bold">
                    <span className={`text-lg ${
                      student.totalScore >= 80 ? 'text-success' : 
                      student.totalScore >= 60 ? 'text-warning' : 'text-destructive'
                    }`}>
                      {student.totalScore}%
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    {student.status === "flagged" ? (
                      <Badge variant="outline" className="status-warning">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        Flagged
                      </Badge>
                    ) : (
                      <Badge className="status-success">Clear</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}