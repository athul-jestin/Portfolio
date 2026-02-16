import { CheckCircle, AlertCircle, X } from "lucide-react";
import { useEffect } from "react";

interface NotificationModalProps {
  isOpen: boolean;
  type: "success" | "error";
  message: string;
  onClose: () => void;
  autoClose?: number; // milliseconds
}

export default function NotificationModal({
  isOpen,
  type,
  message,
  onClose,
  autoClose = 3000,
}: NotificationModalProps) {
  useEffect(() => {
    if (isOpen && autoClose) {
      const timer = setTimeout(onClose, autoClose);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoClose, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card border border-border rounded-lg shadow-lg p-6 max-w-sm mx-4 animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex gap-4 items-start">
          <div
            className={`flex-shrink-0 ${
              type === "success" ? "text-green-500" : "text-destructive"
            }`}
          >
            {type === "success" ? (
              <CheckCircle size={24} />
            ) : (
              <AlertCircle size={24} />
            )}
          </div>

          <div className="flex-1 pt-1">
            <h3
              className={`font-semibold ${
                type === "success" ? "text-green-500" : "text-destructive"
              }`}
            >
              {type === "success" ? "Success!" : "Error"}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
