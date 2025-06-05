import { HeroSection } from './HeroSection';
import { MobileHeroSection } from './MobileHeroSection';
import { useIsMobile } from '../utils/deviceDetection';

/**
 * Componente responsivo que decide qual versão do HeroSection renderizar
 * baseado no tamanho da tela
 */
export const ResponsiveHeroSection: React.FC = () => {
  const isMobile = useIsMobile();
  
  // Renderiza a versão mobile ou desktop dependendo do tamanho da tela
  return isMobile ? <MobileHeroSection /> : <HeroSection />;
}; 