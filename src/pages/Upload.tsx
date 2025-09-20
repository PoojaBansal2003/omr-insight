import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload as UploadIcon, File, CheckCircle, Clock, AlertCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface UploadFile {
  id: string;
  file: File;
  status: "pending" | "processing" | "completed" | "error";
  progress: number;
}

export default function Upload() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadFile[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      id: Math.random().toString(36).substring(7),
      file,
      status: "pending" as const,
      progress: 0,
    }));
    
    setUploadedFiles((prev) => [...prev, ...newFiles]);
    
    // Simulate processing
    newFiles.forEach((uploadFile, index) => {
      setTimeout(() => {
        setUploadedFiles((prev) =>
          prev.map((f) =>
            f.id === uploadFile.id ? { ...f, status: "processing" } : f
          )
        );
        
        // Simulate progress
        let progress = 0;
        const interval = setInterval(() => {
          progress += Math.random() * 20;
          if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setUploadedFiles((prev) =>
              prev.map((f) =>
                f.id === uploadFile.id
                  ? { ...f, status: "completed", progress: 100 }
                  : f
              )
            );
          } else {
            setUploadedFiles((prev) =>
              prev.map((f) =>
                f.id === uploadFile.id ? { ...f, progress } : f
              )
            );
          }
        }, 200);
      }, index * 500);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
      "application/pdf": [".pdf"]
    },
    multiple: true,
  });

  const removeFile = (id: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const getStatusIcon = (status: UploadFile["status"]) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4 text-warning" />;
      case "processing":
        return <div className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />;
      case "completed":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
    }
  };

  const getStatusBadge = (status: UploadFile["status"]) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="text-warning border-warning/50">Pending</Badge>;
      case "processing":
        return <Badge variant="outline" className="text-primary border-primary/50">Processing</Badge>;
      case "completed":
        return <Badge className="status-success">Completed</Badge>;
      case "error":
        return <Badge variant="destructive">Error</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Upload OMR Sheets
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Drag and drop your OMR answer sheets or click to browse. We support images (JPG, PNG) and PDF files.
        </p>
      </div>

      {/* Upload Zone */}
      <Card className="p-8">
        <div
          {...getRootProps()}
          className={`upload-zone rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
            isDragActive ? "upload-zone-active" : ""
          }`}
        >
          <input {...getInputProps()} />
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <UploadIcon className="h-8 w-8 text-primary" />
            </div>
            {isDragActive ? (
              <p className="text-lg font-medium text-primary">Drop the files here...</p>
            ) : (
              <>
                <p className="text-lg font-medium text-foreground">
                  Drop your OMR sheets here, or click to select files
                </p>
                <p className="text-sm text-muted-foreground">
                  Supports JPG, PNG, and PDF files up to 10MB each
                </p>
              </>
            )}
            <Button className="btn-hero">
              Choose Files
            </Button>
          </div>
        </div>
      </Card>

      {/* File List */}
      {uploadedFiles.length > 0 && (
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">Uploaded Files ({uploadedFiles.length})</h3>
          <div className="space-y-4">
            {uploadedFiles.map((uploadFile) => (
              <div
                key={uploadFile.id}
                className="flex items-center justify-between p-4 bg-muted/30 rounded-xl hover-lift"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <File className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">
                      {uploadFile.file.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {(uploadFile.file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(uploadFile.status)}
                    {getStatusBadge(uploadFile.status)}
                  </div>
                </div>
                
                {uploadFile.status === "processing" && (
                  <div className="w-32 mx-4">
                    <Progress value={uploadFile.progress} className="h-2" />
                  </div>
                )}
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(uploadFile.id)}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Quick Stats */}
      {uploadedFiles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-foreground">
              {uploadedFiles.length}
            </div>
            <div className="text-sm text-muted-foreground">Total Files</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-warning">
              {uploadedFiles.filter((f) => f.status === "pending").length}
            </div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">
              {uploadedFiles.filter((f) => f.status === "processing").length}
            </div>
            <div className="text-sm text-muted-foreground">Processing</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-success">
              {uploadedFiles.filter((f) => f.status === "completed").length}
            </div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </Card>
        </div>
      )}
    </div>
  );
}