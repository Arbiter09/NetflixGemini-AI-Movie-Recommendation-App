import { AlertCircle } from "lucide-react";
import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div className="flex items-start gap-2 p-2 bg-red-50 border border-red-200 rounded-lg">
      <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
      <p className="text-sm text-red-700 leading-relaxed">{error}</p>
    </div>
  );
};

export default ErrorMessage;
