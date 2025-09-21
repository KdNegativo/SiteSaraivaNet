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
  const [isProcessing, setIsProcessing] = useState(true);

  const handleProcessed = useCallback((processedUrl: string) => {
    setProcessedLogoUrl(processedUrl);
    setIsProcessed(true);
    setIsProcessing(false);
    console.log('Logo background removed successfully:', processedUrl);
  }, []);

  return (
    <>
      {!isProcessed && (
        <BackgroundRemovalProcessor
          imageUrl={saraivaLogoOriginal}
          onProcessed={handleProcessed}
        />
      )}
      {isProcessing && !isProcessed && (
        <div className="flex items-center justify-center" style={style}>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
      <img 
        src={processedLogoUrl || saraivaLogoOriginal} 
        alt={alt} 
        className={`${className} ${!processedLogoUrl ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`} 
        style={{
          ...style,
          backgroundColor: 'transparent',
          mixBlendMode: 'multiply'
        }}
      />
    </>
  );
};