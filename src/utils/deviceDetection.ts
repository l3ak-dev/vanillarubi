import { useState, useEffect } from 'react';

/**
 * Hook para detectar se o dispositivo atual é mobile
 * @param breakpoint - Ponto de quebra para considerar um dispositivo como mobile (padrão: 900px)
 * @returns Estado booleano indicando se o dispositivo é mobile
 */
export const useIsMobile = (breakpoint = 900): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  useEffect(() => {
    // Verificação inicial
    const checkIfMobile = (): void => {
      setIsMobile(window.innerWidth <= breakpoint);
    };
    
    // Primeira verificação
    checkIfMobile();
    
    // Adicionar listener para redimensionamento
    window.addEventListener('resize', checkIfMobile);
    
    // Limpeza ao desmontar
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [breakpoint]);
  
  return isMobile;
};

/**
 * Verifica se o dispositivo é mobile baseado na largura atual
 * @param breakpoint - Ponto de quebra para considerar um dispositivo como mobile (padrão: 900px)
 * @returns Booleano indicando se o dispositivo é mobile
 */
export const checkIsMobile = (breakpoint = 900): boolean => {
  if (typeof window !== 'undefined') {
    return window.innerWidth <= breakpoint;
  }
  return false;
}; 