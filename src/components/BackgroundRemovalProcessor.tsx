import { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

interface BackgroundRemovalProcessorProps {
  imageUrl: string;
  onProcessed: (processedImageUrl: string) => void;
}

export const BackgroundRemovalProcessor = ({ imageUrl, onProcessed }: BackgroundRemovalProcessorProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processImage = async () => {
      if (!imageUrl) return;
      
      setIsProcessing(true);
      setError(null);
      
      try {
        // Fetch the image as blob
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        
        // Load as HTMLImageElement
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for processed image
        const processedUrl = URL.createObjectURL(processedBlob);
        
        onProcessed(processedUrl);
      } catch (err) {
        console.error('Failed to process image:', err);
        setError('Falha ao processar imagem');
        // Fall back to original image
        onProcessed(imageUrl);
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();
  }, [imageUrl, onProcessed]);

  if (isProcessing) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
        <span className="ml-2 text-sm text-gray-600">Removendo fundo...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-sm text-red-600 p-2">
        {error}
      </div>
    );
  }

  return null;
};