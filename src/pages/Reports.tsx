import { useState } from "react";
import { Download, FileText, Table, Languages, Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Reports() {
  const [selectedFormat, setSelectedFormat] = useState<"pdf" | "excel" | "csv">("pdf");
  const [selectedLanguage, setSelectedLanguage] = useState<"english" | "hindi">("english");
  const [selectedDate, setSelectedDate] = useState("2024-01-15");

  const reportTypes = [
    {
      id: "student-results",
      title: "Student Results Report",
      description: "Individual student performance with subject-wise breakdown",
      icon: FileText,
      formats: ["PDF", "Excel", "CSV"],
      lastGenerated: "2024-01-15 16:30",
      size: "2.3 MB"
    },
    {
      id: "class-summary",
      title: "Class Summary Report",
      description: "Overall class performance statistics and analytics",
      icon: Table,
      formats: ["PDF", "Excel"],
      lastGenerated: "2024-01-15 16:25",
      size: "1.8 MB"
    },
    {
      id: "subject-analysis",
      title: "Subject Analysis Report",
      description: "Detailed subject-wise performance analysis with insights",
      icon: Table,
      formats: ["PDF", "Excel"],
      lastGenerated: "2024-01-15 16:20",
      size: "3.1 MB"
    },
    {
      id: "flagged-sheets",
      title: "Flagged Sheets Report",
      description: "Summary of flagged sheets and manual review outcomes",
      icon: FileText,
      formats: ["PDF", "CSV"],
      lastGenerated: "2024-01-15 16:15",
      size: "892 KB"
    },
  ];

  const generateReport = (reportId: string) => {
    console.log(`Generating ${reportId} in ${selectedFormat} format, ${selectedLanguage} language`);
    // In real app: trigger report generation API call
  };

  const downloadSample = (reportId: string) => {
    console.log(`Downloading sample for ${reportId}`);
    // In real app: download sample report
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Export Reports
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Generate and download comprehensive evaluation reports in multiple formats and languages.
        </p>
      </div>

      {/* Export Configuration */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-6">Export Configuration</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Export Format
            </label>
            <Select value={selectedFormat} onValueChange={(value: "pdf" | "excel" | "csv") => setSelectedFormat(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF Document</SelectItem>
                <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                <SelectItem value="csv">CSV File</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Language
            </label>
            <Select value={selectedLanguage} onValueChange={(value: "english" | "hindi") => setSelectedLanguage(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hindi">हिन्दी (Hindi)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Exam Date
            </label>
            <Select value={selectedDate} onValueChange={setSelectedDate}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024-01-15">January 15, 2024</SelectItem>
                <SelectItem value="2024-01-10">January 10, 2024</SelectItem>
                <SelectItem value="2024-01-05">January 5, 2024</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Quick Export Actions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button className="btn-hero h-auto p-4 flex-col space-y-2">
            <Download className="h-6 w-6" />
            <span>Export All Results</span>
            <span className="text-xs opacity-80">Complete dataset</span>
          </Button>
          
          <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
            <Table className="h-6 w-6" />
            <span>Class Summary</span>
            <span className="text-xs text-muted-foreground">Overview only</span>
          </Button>
          
          <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
            <Filter className="h-6 w-6" />
            <span>Flagged Only</span>
            <span className="text-xs text-muted-foreground">Review items</span>
          </Button>
          
          <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
            <Languages className="h-6 w-6" />
            <span>Bilingual</span>
            <span className="text-xs text-muted-foreground">EN + HI</span>
          </Button>
        </div>
      </Card>

      {/* Available Reports */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Available Reports</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {reportTypes.map((report) => (
            <Card key={report.id} className="p-6 hover-glow">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <report.icon className="h-6 w-6 text-primary" />
                </div>
                
                <div className="flex-1 space-y-3">
                  <div>
                    <h4 className="text-lg font-semibold">{report.title}</h4>
                    <p className="text-sm text-muted-foreground">{report.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {report.formats.map((format) => (
                      <Badge key={format} variant="outline" className="text-xs">
                        {format}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Last generated: {report.lastGenerated}</span>
                    <span>Size: {report.size}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      onClick={() => generateReport(report.id)}
                      className="flex-1"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => downloadSample(report.id)}
                    >
                      Sample
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Export History */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Exports</h3>
        <div className="space-y-3">
          {[
            {
              name: "Student Results Report - January 15",
              format: "PDF",
              language: "English",
              size: "2.3 MB",
              downloadedAt: "2024-01-15 16:45",
              status: "completed"
            },
            {
              name: "Class Summary Report - January 15",
              format: "Excel",
              language: "Hindi",
              size: "1.8 MB",
              downloadedAt: "2024-01-15 16:40",
              status: "completed"
            },
            {
              name: "Subject Analysis Report - January 15",
              format: "PDF",
              language: "English",
              size: "3.1 MB",
              downloadedAt: "2024-01-15 16:35",
              status: "processing"
            },
          ].map((export_, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-muted/30 rounded-xl hover-lift"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{export_.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {export_.format} • {export_.language} • {export_.size}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Badge
                  variant={export_.status === "completed" ? "default" : "outline"}
                  className={export_.status === "completed" ? "status-success" : "status-warning"}
                >
                  {export_.status === "completed" ? "Ready" : "Processing"}
                </Badge>
                
                {export_.status === "completed" && (
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Tips */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Export Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <h4 className="font-medium">Format Recommendations</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• PDF for official documentation and printing</li>
              <li>• Excel for data analysis and further processing</li>
              <li>• CSV for importing into other systems</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium">Language Support</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• English reports are generated instantly</li>
              <li>• Hindi reports may take additional processing time</li>
              <li>• Bilingual reports include both languages</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}