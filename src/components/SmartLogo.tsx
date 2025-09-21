import { useState, useCallback } from 'react';
import { BackgroundRemovalProcessor } from './BackgroundRemovalProcessor';
import saraivaLogoOriginal from "@/assets/saraiva-logo-blue.png";

interface SmartLogoProps {
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
}

export const SmartLogo = ({ className, style, alt = "SaraivaNet Logo" }: SmartLogoProps) => {
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string | null>(null);
  const [isProcessed, setIsProcessed] = useState(false);

  const handleProcessed = useCallback((processedUrl: string) => {
    setProcessedLogoUrl(processedUrl);
    setIsProcessed(true);
  }, []);

  return (
    <>
      {!isProcessed && (
        <BackgroundRemovalProcessor
          imageUrl={saraivaLogoOriginal}
          onProcessed={handleProcessed}
        />
      )}
      <img 
        src={processedLogoUrl || saraivaLogoOriginal} 
        alt={alt} 
        className={className} 
        style={style}
      />
    </>
  );
};