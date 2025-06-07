import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { SectionSEO } from './SectionSEO';


// Container principal
const Section = styled.section`
  scroll-margin-top: 80px;
  background: var(--color-accent);
  padding: 6rem 1.5rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 30% 20%, 
      rgba(90, 0, 22, 0.05) 0%, 
      transparent 60%
    );
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 70% 80%, 
      rgba(90, 0, 22, 0.04) 0%, 
      transparent 50%
    );
    z-index: 1;
  }
  
  @media (min-width: 901px) {
    display: none; /* Hide on desktop, using FinalCTA instead */
  }
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const ContentWrapper = styled(motion.div)`
  max-width: 100%;
  margin: 0 auto 3rem;
  position: relative;
  text-align: center;
`;

const Eyebrow = styled(motion.span)`
  font-size: 0.8rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--color-primary);
  display: inline-block;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 1px;
    background-color: var(--color-primary);
    opacity: 0.7;
  }
`;

const Headline = styled(motion.h2)`
  font-size: 2.2rem;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Highlight = styled.span`
  color: var(--color-primary-dark);
  position: relative;
  display: inline-block;
  font-style: italic;
`;

const Subheadline = styled(motion.p)`
  font-size: 1.1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  color: var(--color-primary-dark);
  margin-bottom: 2.5rem;
  line-height: 1.6;
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

// Formulário wizard (múltiplas etapas)
const FormContainer = styled(motion.div)`
  background: #fff;
  border-radius: 2px;
  padding: 30px 25px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(90, 0, 22, 0.1);
  position: relative;
  
  @media (max-width: 480px) {
    padding: 25px 20px;
  }
`;

// Indicador de progresso
const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(90, 0, 22, 0.1);
    z-index: 1;
  }
`;

const ProgressStep = styled.div<{ $active: boolean; $completed: boolean }>`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${props => 
    props.$completed 
      ? 'var(--color-primary)' 
      : props.$active 
        ? 'white' 
        : 'rgba(90, 0, 22, 0.05)'};
  border: 2px solid ${props => 
    props.$completed || props.$active 
      ? 'var(--color-primary)' 
      : 'rgba(90, 0, 22, 0.15)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: ${props => 
    props.$completed 
      ? 'white' 
      : props.$active 
        ? 'var(--color-primary)' 
        : 'rgba(90, 0, 22, 0.5)'};
  position: relative;
  z-index: 2;
`;

const StepLabel = styled.span<{ $active: boolean }>`
  position: absolute;
  top: 30px;
  font-size: 0.7rem;
  font-weight: 500;
  color: ${props => props.$active ? 'var(--color-primary)' : 'rgba(90, 0, 22, 0.5)'};
  text-align: center;
  width: 80px;
  left: 50%;
  transform: translateX(-50%);
`;

const FormTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: var(--color-primary);
  margin: 0 0 20px;
  font-weight: 600;
  text-align: center;
`;

const CallInfoBox = styled.div`
  margin: 0 0 25px;
  padding: 16px 18px;
  background: rgba(90, 0, 22, 0.03);
  border-left: 2px solid var(--color-primary);
  text-align: left;
  font-size: 0.9rem;
`;

const CallInfoText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-primary-dark);
  margin: 0;
  font-weight: 400;
`;

const StepContainer = styled(motion.div)`
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  width: 100%;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-primary-dark);
  margin-bottom: 8px;
  opacity: 0.9;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  background: #fcfcfc;
  border: 1px solid rgba(90, 0, 22, 0.12);
  border-radius: 2px;
  font-size: 0.95rem;
  font-family: 'Montserrat', sans-serif;
  color: var(--color-primary-dark);
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    background: white;
    box-shadow: 0 0 0 2px rgba(90, 0, 22, 0.08);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  background: #fcfcfc;
  border: 1px solid rgba(90, 0, 22, 0.12);
  border-radius: 2px;
  font-size: 0.95rem;
  font-family: 'Montserrat', sans-serif;
  color: var(--color-primary-dark);
  min-height: 100px;
  resize: vertical;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    background: white;
    box-shadow: 0 0 0 2px rgba(90, 0, 22, 0.08);
  }
`;

const OptionGroupTitle = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-primary-dark);
  margin: 0 0 8px 0;
  opacity: 0.9;
`;

const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 2px;
`;

const OptionButton = styled.label<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  padding: 14px 16px;
  min-height: 44px;
  background: ${props => props.$selected ? 'rgba(90, 0, 22, 0.05)' : 'white'};
  border: 1px solid ${props => props.$selected ? 'var(--color-primary)' : 'rgba(90, 0, 22, 0.15)'};
  border-radius: 2px;
  font-size: 0.85rem;
  font-family: 'Montserrat', sans-serif;
  color: var(--color-primary-dark);
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
  position: relative;
  
  &:hover {
    background: ${props => props.$selected ? 'rgba(90, 0, 22, 0.07)' : 'rgba(90, 0, 22, 0.02)'};
    border-color: ${props => props.$selected ? 'var(--color-primary)' : 'rgba(90, 0, 22, 0.25)'};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const HiddenRadio = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const NavButton = styled(motion.button)<{ $isPrimary?: boolean; $isLoading?: boolean }>`
  background: ${props => props.$isPrimary ? 'var(--color-primary)' : 'transparent'};
  color: ${props => props.$isPrimary ? 'white' : 'var(--color-primary)'};
  border: ${props => props.$isPrimary ? 'none' : '1px solid var(--color-primary)'};
  padding: ${props => props.$isPrimary ? '14px 20px' : '13px 20px'};
  border-radius: 2px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  min-height: 44px;
  position: relative;
  overflow: hidden;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  ${props => props.$isLoading && `
    &::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      margin: auto;
      border: 2px solid transparent;
      border-top-color: currentColor;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `}
`;

const WaitlistNotice = styled.div`
  margin: 10px 0 15px;
  padding: 14px 18px;
  background: rgba(90, 0, 22, 0.05);
  text-align: left;
  border-radius: 2px;
`;

const WaitlistText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-primary-dark);
  margin: 0;
  font-weight: 500;
`;

const Privacy = styled.p`
  font-size: 0.8rem;
  font-family: 'Montserrat', sans-serif;
  color: #777;
  margin-top: 15px;
  text-align: center;
  line-height: 1.5;
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 20px;
`;

const SuccessIcon = styled.div`
  width: 70px;
  height: 70px;
  background: rgba(90, 0, 22, 0.05);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: var(--color-primary);
`;

const SuccessTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  color: var(--color-primary);
  margin: 0 0 15px;
`;

const SuccessText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-primary-dark);
  margin: 0 0 25px;
`;

// Adicione um componente de mensagem de erro
const ErrorBanner = styled.div`
  color: #d32f2f;
  background-color: rgba(211, 47, 47, 0.1);
  border-left: 2px solid #d32f2f;
  padding: 10px 15px;
  margin-bottom: 15px;
  font-size: 0.85rem;
  font-family: 'Montserrat', sans-serif;
`;

const FieldError = styled.div`
  color: #d32f2f;
  font-size: 0.75rem;
  font-family: 'Montserrat', sans-serif;
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &::before {
    content: '⚠';
    font-size: 0.8rem;
  }
`;

const InputWithError = styled(Input)<{ $hasError?: boolean }>`
  border-color: ${props => props.$hasError ? '#d32f2f' : 'rgba(90, 0, 22, 0.12)'};
  
  &:focus {
    border-color: ${props => props.$hasError ? '#d32f2f' : 'var(--color-primary)'};
    box-shadow: 0 0 0 2px ${props => props.$hasError ? 'rgba(211, 47, 47, 0.1)' : 'rgba(90, 0, 22, 0.08)'};
  }
`;

const TextAreaWithError = styled(TextArea)<{ $hasError?: boolean }>`
  border-color: ${props => props.$hasError ? '#d32f2f' : 'rgba(90, 0, 22, 0.12)'};
  
  &:focus {
    border-color: ${props => props.$hasError ? '#d32f2f' : 'var(--color-primary)'};
    box-shadow: 0 0 0 2px ${props => props.$hasError ? 'rgba(211, 47, 47, 0.1)' : 'rgba(90, 0, 22, 0.08)'};
  }
`;

// Animation variants
const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.4
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

const slideLeftVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4
    }
  },
  exit: { 
    opacity: 0, 
    x: -30,
    transition: {
      duration: 0.3
    }
  }
};

const slideRightVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4
    }
  },
  exit: { 
    opacity: 0, 
    x: 30,
    transition: {
      duration: 0.3
    }
  }
};

// Tipos de etapas do formulário
type FormStep = 'info' | 'project' | 'timing' | 'success';

export const MobileFinalCTA: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  // Estados do formulário
  const [currentStep, setCurrentStep] = useState<FormStep>('info');
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  
  // Estados para os campos do formulário
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [services, setServices] = useState('');
  
  // Estados para validação
  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});
  const [touched, setTouched] = useState<{[key: string]: boolean}>({});
  
  // Estados para os campos de escolha múltipla
  const [journeyOptions, setJourneyOptions] = useState(['handsoff']);
  const [readinessOptions, setReadinessOptions] = useState(['now']);
  const [waitlist, setWaitlist] = useState('');
  
  // Funções de validação
  const validateEmail = (email: string): string => {
    if (!email.trim()) return t('finalCTA.validation.emailRequired');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return t('finalCTA.validation.emailInvalid');
    return '';
  };
  
  const validateFullName = (name: string): string => {
    if (!name.trim()) return t('finalCTA.validation.nameRequired');
    if (name.trim().length < 2) return t('finalCTA.validation.nameTooShort');
    return '';
  };
  
  const validateServices = (text: string): string => {
    if (!text.trim()) return t('finalCTA.validation.servicesRequired');
    if (text.trim().length < 10) return t('finalCTA.validation.servicesTooShort');
    return '';
  };
  
  // Validar campo específico
  const validateField = (fieldName: string, value: string) => {
    let error = '';
    switch (fieldName) {
      case 'fullName':
        error = validateFullName(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'services':
        error = validateServices(value);
        break;
    }
    
    setFieldErrors(prev => ({
      ...prev,
      [fieldName]: error
    }));
    
    return error === '';
  };
  
  // Validações para navegação entre etapas
  const isInfoStepValid = fullName.trim() !== '' && email.trim() !== '' && !fieldErrors.fullName && !fieldErrors.email;
  const isProjectStepValid = services.trim() !== '' && !fieldErrors.services;
  const isTimingStepValid = waitlist !== '';
  
  // Handle viewport issues when keyboard appears
  useEffect(() => {
    const handleFocus = () => {
      // Prevent automatic scrolling when an input is focused
      setTimeout(() => {
        if (formContainerRef.current) {
          // Get the position of the form container
          const rect = formContainerRef.current.getBoundingClientRect();
          
          // If the form is partially or fully out of view, scroll to it
          if (rect.top < 0 || rect.bottom > window.innerHeight) {
            formContainerRef.current.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center'
            });
          }
        }
      }, 100);
    };

    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('focus', handleFocus);
    });

    return () => {
      inputs.forEach(input => {
        input.removeEventListener('focus', handleFocus);
      });
    };
  }, [currentStep]);

  // Fix viewport height issues on mobile
  useEffect(() => {
    const setViewportHeight = () => {
      // First we get the viewport height and multiply it by 1% to get a value for a vh unit
      const vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Set the height initially
    setViewportHeight();

    // Update the height whenever the window resizes
    window.addEventListener('resize', setViewportHeight);
    
    return () => {
      window.removeEventListener('resize', setViewportHeight);
    };
  }, []);
  
  // Handlers para navegação
  const goToNextStep = () => {
    if (currentStep === 'info') {
      setCurrentStep('project');
      // Clear any active focus
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      // Scroll to the top of the form container after changing steps
      setTimeout(() => {
        if (formContainerRef.current) {
          formContainerRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 50);
    }
    else if (currentStep === 'project') {
      setCurrentStep('timing');
      // Clear any active focus
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      // Scroll to the top of the form container after changing steps
      setTimeout(() => {
        if (formContainerRef.current) {
          formContainerRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 50);
    }
    else if (currentStep === 'timing') {
      if (submitState === 'error') {
        // Retry: reset error state and try again
        setSubmitState('idle');
        setErrorMessage('');
      }
      handleSubmit();
    }
  };
  
  const goToPrevStep = () => {
    if (currentStep === 'project') {
      setCurrentStep('info');
      // Scroll to the top of the form container after changing steps
      setTimeout(() => {
        if (formContainerRef.current) {
          formContainerRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 50);
    }
    else if (currentStep === 'timing') {
      setCurrentStep('project');
      // Scroll to the top of the form container after changing steps
      setTimeout(() => {
        if (formContainerRef.current) {
          formContainerRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 50);
    }
  };
  
  // Reset do formulário
  const resetForm = () => {
    setFullName('');
    setEmail('');
    setInstagram('');
    setServices('');
    setJourneyOptions(['handsoff']);
    setReadinessOptions(['now']);
    setWaitlist('');
    setErrorMessage('');
    setFieldErrors({});
    setTouched({});
    setCurrentStep('info');
    
    if (formRef.current) {
      const form = formRef.current;
      form.reset();
    }
  };
  
  // Submit do formulário
  const handleSubmit = async () => {
    if (currentStep === 'timing' && isTimingStepValid) {
      setSubmitState('sending');
      setErrorMessage('');
      
      try {
        // Preparar os dados para envio via nossa API
        const formData = {
          name: fullName,
          email: email,
          instagram: instagram,
          
          // Valores mais descritivos para os campos de escolha múltipla
          journey: journeyOptions.map(option => {
            switch(option) {
              case 'handsoff': return 'Hands-off (Full service)';
              case 'notsure': return 'Not sure yet (Need guidance)';
              case 'specific': return 'Specific project (Targeted help)';
              default: return option;
            }
          }).join(', '),
          
          // Descrição mais completa dos serviços
          services: services || 'No details provided',
          
          // Valores mais descritivos para readiness
          readiness: readinessOptions.map(option => {
            switch(option) {
              case 'now': return 'Ready to start now';
              case 'soon': return 'Ready to start soon';
              case 'later': return 'Planning for later';
              default: return option;
            }
          }).join(', '),
          
          // Valor mais descritivo para waitlist
          waitlist: waitlist,
          
          language: i18n.language === 'en' ? 'English' : i18n.language === 'pt' ? 'Portuguese' : 'Spanish',
          date: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
          source: 'Mobile Form'
        };
        
        // Enviar via nossa API Vercel Function
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (response.ok && result.success) {
          setSubmitState('sent');
          setCurrentStep('success');
          
          setTimeout(() => {
            setSubmitState('idle');
          }, 5000);
        } else {
          throw new Error(result.message || 'Erro ao enviar formulário');
        }
      } catch (error) {
        console.error('Erro ao enviar email:', error);
        setSubmitState('error');
        setErrorMessage(
          error instanceof Error 
            ? `${t('finalCTA.error')}: ${error.message}` 
            : t('finalCTA.error')
        );
        // Não resetar automaticamente para permitir retry manual
      }
    }
  };
  
  // Handlers para os campos de escolha múltipla
  const toggleJourneyOption = (option: string) => {
    if (journeyOptions.includes(option)) {
      setJourneyOptions(journeyOptions.filter((o) => o !== option));
    } else {
      setJourneyOptions([...journeyOptions, option]);
    }
  };
  
  const toggleReadinessOption = (option: string) => {
    if (readinessOptions.includes(option)) {
      setReadinessOptions(readinessOptions.filter((o) => o !== option));
    } else {
      setReadinessOptions([...readinessOptions, option]);
    }
  };
  
  // Variáveis para controle da UI
  const getStepTitle = () => {
    switch (currentStep) {
      case 'info':
        return t('finalCTA.steps.infoTitle');
      case 'project':
        return t('finalCTA.steps.projectTitle');
      case 'timing':
        return t('finalCTA.steps.timingTitle');
      default:
        return '';
    }
  };
  
  const getNextButtonText = () => {
    if (currentStep === 'timing') {
      return submitState === 'idle' 
        ? t('finalCTA.send') 
        : submitState === 'sending' 
          ? t('finalCTA.sending') + '...' 
          : submitState === 'error'
            ? t('finalCTA.tryAgain')
            : t('finalCTA.sent');
    }
    return t('finalCTA.next');
  };
  
  const isNextButtonDisabled = () => {
    if (submitState !== 'idle') return true;
    if (currentStep === 'info') return !isInfoStepValid;
    if (currentStep === 'project') return !isProjectStepValid;
    if (currentStep === 'timing') return !isTimingStepValid;
    return false;
  };
  
  // Renderização da etapa atual
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'info':
        return renderInfoStep();
      case 'project':
        return renderProjectStep();
      case 'timing':
        return renderTimingStep();
      case 'success':
        return renderSuccessStep();
      default:
        return null;
    }
  };
  
  // Etapa 1: Informações pessoais
  const renderInfoStep = () => (
    <StepContainer
      key="info-step"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={currentStep === 'info' ? fadeVariants : slideRightVariants}
    >
      <FormGroup>
        <Label htmlFor="fullName">{t('finalCTA.placeholders.fullName')}</Label>
        <InputWithError 
          type="text" 
          autoComplete="name"
          id="fullName" 
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            if (touched.fullName) {
              validateField('fullName', e.target.value);
            }
          }}
          onBlur={() => {
            setTouched(prev => ({ ...prev, fullName: true }));
            validateField('fullName', fullName);
          }}
          $hasError={touched.fullName && !!fieldErrors.fullName}
          required
          aria-required="true"
          aria-invalid={touched.fullName && !!fieldErrors.fullName}
          autoFocus
        />
        {touched.fullName && fieldErrors.fullName && (
          <FieldError>{fieldErrors.fullName}</FieldError>
        )}
      </FormGroup>
      
      <FormGroup>
        <Label htmlFor="email">{t('finalCTA.placeholders.email')}</Label>
        <InputWithError 
          type="email" 
          inputMode="email"
          autoComplete="email"
          id="email" 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (touched.email) {
              validateField('email', e.target.value);
            }
          }}
          onBlur={() => {
            setTouched(prev => ({ ...prev, email: true }));
            validateField('email', email);
          }}
          $hasError={touched.email && !!fieldErrors.email}
          required
          aria-required="true"
          aria-invalid={touched.email && !!fieldErrors.email}
        />
        {touched.email && fieldErrors.email && (
          <FieldError>{fieldErrors.email}</FieldError>
        )}
      </FormGroup>
      
      <FormGroup>
        <Label htmlFor="instagram">{t('finalCTA.placeholders.instagram')}</Label>
        <Input 
          type="text" 
          id="instagram" 
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
          placeholder="@username or URL"
        />
      </FormGroup>
    </StepContainer>
  );
  
  // Etapa 2: Detalhes do projeto
  const renderProjectStep = () => (
    <StepContainer
      key="project-step"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={slideLeftVariants}
    >
      <FormGroup>
        <OptionGroupTitle id="journey-title">{t('finalCTA.placeholders.journey')}</OptionGroupTitle>
        <OptionGroup role="group" aria-labelledby="journey-title">
          <OptionButton $selected={journeyOptions.includes('handsoff')}>
            <HiddenCheckbox 
              type="checkbox" 
              id="journey-handsoff" 
              name="journey" 
              value="handsoff"
              checked={journeyOptions.includes('handsoff')}
              onChange={() => toggleJourneyOption('handsoff')}
              aria-describedby="journey-title"
            />
            {t('finalCTA.placeholders.journeyOptions.handsOff')}
          </OptionButton>
        
          <OptionButton $selected={journeyOptions.includes('notsure')}>
            <HiddenCheckbox 
              type="checkbox" 
              id="journey-notsure" 
              name="journey" 
              value="notsure"
              checked={journeyOptions.includes('notsure')}
              onChange={() => toggleJourneyOption('notsure')}
              aria-describedby="journey-title"
            />
            {t('finalCTA.placeholders.journeyOptions.notSure')}
          </OptionButton>
        
          <OptionButton $selected={journeyOptions.includes('specific')}>
            <HiddenCheckbox 
              type="checkbox" 
              id="journey-specific" 
              name="journey" 
              value="specific"
              checked={journeyOptions.includes('specific')}
              onChange={() => toggleJourneyOption('specific')}
              aria-describedby="journey-title"
            />
            {t('finalCTA.placeholders.journeyOptions.specificProject')}
          </OptionButton>
        </OptionGroup>
      </FormGroup>
      
      <FormGroup>
        <Label htmlFor="services">{t('finalCTA.placeholders.services')}</Label>
        <TextAreaWithError 
          id="services" 
          value={services}
          onChange={(e) => {
            setServices(e.target.value);
            if (touched.services) {
              validateField('services', e.target.value);
            }
          }}
          onBlur={() => {
            setTouched(prev => ({ ...prev, services: true }));
            validateField('services', services);
          }}
          $hasError={touched.services && !!fieldErrors.services}
          rows={4} 
          placeholder={i18n.language === 'en' ? "Tell us about your business and services..." : i18n.language === 'pt' ? "Conte-nos sobre seu negócio e serviços..." : "Cuéntanos sobre tu negocio y servicios..."}
          required
          aria-required="true"
          aria-invalid={touched.services && !!fieldErrors.services}
          autoFocus
        />
        {touched.services && fieldErrors.services && (
          <FieldError>{fieldErrors.services}</FieldError>
        )}
      </FormGroup>
    </StepContainer>
  );
  
  // Etapa 3: Prazos e lista de espera
  const renderTimingStep = () => (
    <StepContainer
      key="timing-step"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={slideLeftVariants}
    >
      <CallInfoBox>
        <CallInfoText>
          {t('finalCTA.callInfo')}
        </CallInfoText>
      </CallInfoBox>
      
      {submitState === 'error' && (
        <ErrorBanner>
          {errorMessage || t('finalCTA.error')}
        </ErrorBanner>
      )}
      
      <FormGroup>
        <OptionGroupTitle id="readiness-title">{t('finalCTA.placeholders.readiness')}</OptionGroupTitle>
        <OptionGroup role="group" aria-labelledby="readiness-title">
          <OptionButton $selected={readinessOptions.includes('now')}>
            <HiddenCheckbox 
              type="checkbox" 
              id="readiness-now" 
              name="readiness" 
              value="now"
              checked={readinessOptions.includes('now')}
              onChange={() => toggleReadinessOption('now')}
              aria-describedby="readiness-title"
            />
            {t('finalCTA.placeholders.readinessOptions.now')}
          </OptionButton>
        
          <OptionButton $selected={readinessOptions.includes('soon')}>
            <HiddenCheckbox 
              type="checkbox" 
              id="readiness-soon" 
              name="readiness" 
              value="soon"
              checked={readinessOptions.includes('soon')}
              onChange={() => toggleReadinessOption('soon')}
              aria-describedby="readiness-title"
            />
            {t('finalCTA.placeholders.readinessOptions.soon')}
          </OptionButton>
        
          <OptionButton $selected={readinessOptions.includes('later')}>
            <HiddenCheckbox 
              type="checkbox" 
              id="readiness-later" 
              name="readiness" 
              value="later"
              checked={readinessOptions.includes('later')}
              onChange={() => toggleReadinessOption('later')}
              aria-describedby="readiness-title"
            />
            {t('finalCTA.placeholders.readinessOptions.later')}
          </OptionButton>
        </OptionGroup>
      </FormGroup>
      
      <WaitlistNotice>
        <WaitlistText>
          {t('finalCTA.waitlistInfo')}
        </WaitlistText>
      </WaitlistNotice>
      
      <FormGroup>
        <OptionGroupTitle id="waitlist-title">{t('finalCTA.placeholders.waitlist')}</OptionGroupTitle>
        <OptionGroup role="radiogroup" aria-labelledby="waitlist-title">
          <OptionButton $selected={waitlist === 'yes'}>
            <HiddenRadio 
              type="radio" 
              id="waitlist-yes" 
              name="waitlist" 
              value="yes"
              checked={waitlist === 'yes'}
              onChange={() => setWaitlist('yes')}
              required
              aria-describedby="waitlist-title"
              aria-required="true"
            />
            {t('finalCTA.placeholders.waitlistOptions.yes')}
          </OptionButton>
        
          <OptionButton $selected={waitlist === 'no'}>
            <HiddenRadio 
              type="radio" 
              id="waitlist-no" 
              name="waitlist" 
              value="no"
              checked={waitlist === 'no'}
              onChange={() => setWaitlist('no')}
              aria-describedby="waitlist-title"
            />
            {t('finalCTA.placeholders.waitlistOptions.no')}
          </OptionButton>
        </OptionGroup>
      </FormGroup>
    </StepContainer>
  );
  
  // Etapa de sucesso
  const renderSuccessStep = () => (
    <SuccessMessage
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <SuccessIcon>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </SuccessIcon>
      <SuccessTitle>{t('finalCTA.success.title')}</SuccessTitle>
      <SuccessText>{t('finalCTA.success.message')}</SuccessText>
      <NavButton 
        $isPrimary 
        onClick={resetForm}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {t('finalCTA.success.button')}
      </NavButton>
    </SuccessMessage>
  );
  
  return (
    <>
      <SectionSEO 
        id="contact-mobile"
        title="Contact Vanilla Rubi - Mobile Booking Form"
        description="Book a discovery call with Vanilla Rubi on mobile. Our step-by-step form makes it easy to connect with us and start your business growth journey."
        keywords="mobile contact, discovery call, business consultation, mobile form, business growth"
      />
      
      <LazyMotion features={domAnimation}>
        <Section id="contact-mobile" aria-labelledby="contact-mobile-title">
          <Container>
            {/* Título e descrição */}
            <ContentWrapper
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Eyebrow>
                {t('finalCTA.eyebrow')}
              </Eyebrow>
              
              <Headline id="contact-mobile-title">
                <Trans i18nKey="finalCTA.headline" components={{ 1: <Highlight /> }} />
              </Headline>
              
              <Subheadline>
                {t('finalCTA.subheadline')}
              </Subheadline>
            </ContentWrapper>
            
            {/* Formulário de múltiplas etapas */}
            <FormContainer ref={formContainerRef}>
              {currentStep !== 'success' && (
                <>
                  {/* Indicador de progresso */}
                  <ProgressContainer>
                    <ProgressStep 
                      $active={currentStep === 'info'} 
                      $completed={currentStep === 'project' || currentStep === 'timing'}
                    >
                      {currentStep === 'project' || currentStep === 'timing' ? (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : '1'}
                      <StepLabel $active={currentStep === 'info'}>
                        {t('finalCTA.steps.info')}
                      </StepLabel>
                    </ProgressStep>
                    
                    <ProgressStep 
                      $active={currentStep === 'project'} 
                      $completed={currentStep === 'timing'}
                    >
                      {currentStep === 'timing' ? (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : '2'}
                      <StepLabel $active={currentStep === 'project'}>
                        {t('finalCTA.steps.project')}
                      </StepLabel>
                    </ProgressStep>
                    
                    <ProgressStep 
                      $active={currentStep === 'timing'} 
                      $completed={false}
                    >
                      3
                      <StepLabel $active={currentStep === 'timing'}>
                        {t('finalCTA.steps.timing')}
                      </StepLabel>
                    </ProgressStep>
                  </ProgressContainer>
                  
                  <FormTitle>{getStepTitle()}</FormTitle>
                </>
              )}
              
              <Form ref={formRef} onSubmit={(e) => e.preventDefault()} aria-describedby="form-instructions-mobile">
                <div id="form-instructions-mobile" className="sr-only">{t('finalCTA.formInstructions')}</div>
                
                <AnimatePresence mode="wait">
                  {renderCurrentStep()}
                </AnimatePresence>
                
                {currentStep !== 'success' && (
                  <NavigationButtons>
                    {currentStep !== 'info' && (
                      <NavButton 
                        type="button" 
                        onClick={goToPrevStep}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {t('finalCTA.back')}
                      </NavButton>
                    )}
                    
                    <NavButton 
                      type="button" 
                      $isPrimary
                      $isLoading={submitState === 'sending'}
                      onClick={goToNextStep}
                      disabled={isNextButtonDisabled()}
                      whileHover={{ scale: submitState === 'sending' ? 1 : 1.02 }}
                      whileTap={{ scale: submitState === 'sending' ? 1 : 0.98 }}
                      style={{ marginLeft: currentStep === 'info' ? 'auto' : '0' }}
                    >
                      {getNextButtonText()}
                    </NavButton>
                  </NavigationButtons>
                )}
              </Form>
              
              {currentStep !== 'success' && (
                <Privacy>
                  {t('finalCTA.privacy')}
                </Privacy>
              )}
            </FormContainer>
          </Container>
        </Section>
      </LazyMotion>
    </>
  );
}; 