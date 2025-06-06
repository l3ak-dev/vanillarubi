import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { SectionSEO } from './SectionSEO';
import emailjs from '@emailjs/browser';

const Section = styled.section`
  scroll-margin-top: 120px;
  background: var(--color-accent);
  padding: 9rem 0;
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
  
  @media (max-width: 900px) {
    display: none; /* Hide on mobile, using MobileFinalCTA instead */
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 5rem;
  
  @media (max-width: 1240px) {
    max-width: 95%;
    gap: 3rem;
  }
`;

const ContentWrapper = styled(motion.div)`
  max-width: 460px;
  position: relative;
  text-align: left;
`;

const Eyebrow = styled(motion.span)`
  font-size: 0.85rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--color-primary);
  display: inline-block;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 1px;
    background-color: var(--color-primary);
    opacity: 0.7;
  }
`;

const Headline = styled(motion.h2)`
  font-size: 2.8rem;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-primary);
  margin-bottom: 2rem;
  text-align: left;
`;

const Highlight = styled.span`
  color: var(--color-primary-dark);
  position: relative;
  display: inline-block;
  font-style: italic;
`;

const Subheadline = styled(motion.p)`
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  color: var(--color-primary-dark);
  margin-bottom: 3rem;
  line-height: 1.8;
  text-align: left;
`;

const FormContainer = styled(motion.div)`
  background: #fff;
  border-radius: 2px;
  padding: 40px;
  width: 100%;
  max-width: 580px;
  box-shadow: 0 10px 30px rgba(90, 0, 22, 0.1);
  position: relative;
  
  @media (max-width: 1240px) {
    padding: 35px;
  }
`;

const FormHeadline = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: var(--color-primary);
  margin: 0 0 25px;
  font-weight: 600;
  text-align: left;
  letter-spacing: -0.01em;
`;

const CallInfoBox = styled.div`
  margin: 0 0 35px;
  padding: 20px 24px;
  background: rgba(90, 0, 22, 0.03);
  border-left: 2px solid var(--color-primary);
  text-align: left;
`;

const CallInfoText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--color-primary-dark);
  margin: 0;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
`;

const FormGroup = styled.div<{ $fullWidth?: boolean }>`
  width: 100%;
  text-align: left;
  grid-column: ${props => props.$fullWidth ? '1 / span 2' : 'auto'};
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
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 2px;
`;

const OptionButton = styled.label<{ $selected: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  background: ${props => props.$selected ? 'rgba(90, 0, 22, 0.05)' : 'white'};
  border: 1px solid ${props => props.$selected ? 'var(--color-primary)' : 'rgba(90, 0, 22, 0.15)'};
  border-radius: 2px;
  font-size: 0.85rem;
  font-family: 'Montserrat', sans-serif;
  color: var(--color-primary-dark);
  cursor: pointer;
  transition: all 0.2s;
  flex: 1 1 calc(50% - 5px);
  user-select: none;
  
  &:hover {
    background: ${props => props.$selected ? 'rgba(90, 0, 22, 0.07)' : 'rgba(90, 0, 22, 0.02)'};
    border-color: ${props => props.$selected ? 'var(--color-primary)' : 'rgba(90, 0, 22, 0.25)'};
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

const WaitlistNotice = styled.div`
  margin: 10px 0 20px;
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

const SubmitButton = styled(motion.button)<{ $isLoading?: boolean }>`
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 14px;
  border-radius: 2px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
  will-change: transform;
  min-height: 48px;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: var(--color-primary-dark);
    
    &::after {
      left: 100%;
    }
  }
  
  &:disabled {
    background: #999;
    cursor: not-allowed;
  }
  
  ${props => props.$isLoading && `
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 18px;
      height: 18px;
      border: 2px solid transparent;
      border-top-color: white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      0% { transform: translate(-50%, -50%) rotate(0deg); }
      100% { transform: translate(-50%, -50%) rotate(360deg); }
    }
  `}
`;

const StatusContainer = styled(motion.div)`
  width: 100%;
  text-align: center;
`;

const Privacy = styled.p`
  font-size: 0.8rem;
  font-family: 'Montserrat', sans-serif;
  color: #777;
  margin-top: 15px;
  text-align: center;
  line-height: 1.5;
`;

// Novo componente para feedback de status
const SuccessMessage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  text-align: center;
`;

const SuccessIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(90, 0, 22, 0.05);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
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

const ErrorMessage = styled.div`
  color: #d32f2f;
  background-color: rgba(211, 47, 47, 0.1);
  border-left: 3px solid #d32f2f;
  padding: 10px 15px;
  margin-bottom: 15px;
  font-size: 0.9rem;
  font-family: 'Montserrat', sans-serif;
`;

const FieldError = styled.div`
  color: #d32f2f;
  font-size: 0.75rem;
  font-family: 'Montserrat', sans-serif;
  margin-top: 6px;
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

// Animation variants - otimizados para performance
const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export const FinalCTA: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);
  
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
  
  // Flag para controlar quando mostrar a mensagem de sucesso
  const [showSuccess, setShowSuccess] = useState(false);

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
    
    if (formRef.current) {
      const form = formRef.current;
      form.reset();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Se é retry, reset error state primeiro
    if (submitState === 'error') {
      setSubmitState('idle');
      setErrorMessage('');
    }
    
    // Validar todos os campos obrigatórios antes de enviar
    const nameValid = validateField('fullName', fullName);
    const emailValid = validateField('email', email);
    const servicesValid = validateField('services', services);
    
    setTouched({ fullName: true, email: true, services: true });
    
    if (!nameValid || !emailValid || !servicesValid) {
      setSubmitState('idle');
      setErrorMessage(t('finalCTA.validation.pleaseFix'));
      return;
    }
    
    setSubmitState('sending');
    setErrorMessage('');
    
    try {
      // Preparar o template de email com os dados do formulário com valores mais detalhados
      const templateParams = {
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
        waitlist: waitlist === 'yes' ? 'Yes, willing to join waitlist' : 'No, not willing to join waitlist',
        
        language: i18n.language === 'en' ? 'English' : i18n.language === 'pt' ? 'Portuguese' : 'Spanish',
        date: new Date().toLocaleString(),
        source: 'Desktop Form'
      };
      
      // Enviar o email usando EmailJS com os IDs corretos
      const response = await emailjs.send(
        'service_y56p4zp',  // Service ID do EmailJS
        'template_daha4ei', // Template ID do EmailJS
        templateParams,
        'oRnW9lkMHFkYb0FCA'  // Public Key correta do EmailJS
      );
      
      if (response.status === 200) {
        setSubmitState('sent');
        setShowSuccess(true);
        setTimeout(() => {
          resetForm();
          setSubmitState('idle');
        }, 5000);
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
  };

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

  const renderFormContent = () => {
    if (showSuccess) {
      return (
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
          <SubmitButton 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowSuccess(false)}
          >
            {t('finalCTA.success.button')}
          </SubmitButton>
        </SuccessMessage>
      );
    }
    
    return (
      <>
        <FormHeadline id="contact-form-title">
          {t('finalCTA.modalHeadline')}
        </FormHeadline>
        
        <CallInfoBox>
          <CallInfoText>
            {t('finalCTA.callInfo')}
          </CallInfoText>
        </CallInfoBox>
        
        {submitState === 'error' && (
          <ErrorMessage>
            {errorMessage || t('finalCTA.error')}
          </ErrorMessage>
        )}
        
        <Form ref={formRef} onSubmit={handleSubmit} aria-describedby="form-instructions">
          <div id="form-instructions" className="sr-only">{t('finalCTA.formInstructions')}</div>
          <FormRow>
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
          </FormRow>
          
          <FormGroup $fullWidth>
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
          
          <FormGroup $fullWidth>
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
              rows={3} 
              placeholder={i18n.language === 'en' ? "Tell us about your business and services..." : i18n.language === 'pt' ? "Conte-nos sobre seu negócio e serviços..." : "Cuéntanos sobre tu negocio y servicios..."}
              aria-invalid={touched.services && !!fieldErrors.services}
            />
            {touched.services && fieldErrors.services && (
              <FieldError>{fieldErrors.services}</FieldError>
            )}
          </FormGroup>
          
          <FormGroup $fullWidth>
            <Label htmlFor="instagram">{t('finalCTA.placeholders.instagram')}</Label>
            <Input 
              type="text" 
              autoComplete="url"
              id="instagram" 
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              placeholder="@username or URL"
            />
          </FormGroup>
          
          <FormGroup $fullWidth>
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
          
          <FormGroup $fullWidth>
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
          
                      <SubmitButton
              type="submit"
              $isLoading={submitState === 'sending'}
              disabled={submitState === 'sending'}
              whileHover={{ scale: submitState === 'sending' ? 1 : 1.02 }}
              whileTap={{ scale: submitState === 'sending' ? 1 : 0.98 }}
              aria-live="polite"
            >
              <StatusContainer>
                {submitState === 'idle' && t('finalCTA.send')}
                {submitState === 'sending' && t('finalCTA.sending') + '...'}
                {submitState === 'sent' && t('finalCTA.sent')}
                {submitState === 'error' && t('finalCTA.tryAgain')}
              </StatusContainer>
            </SubmitButton>
        </Form>
        
        <Privacy>
          {t('finalCTA.privacy')}
        </Privacy>
      </>
    );
  };

  return (
    <>
      <SectionSEO 
        id="contact"
        title="Contact Vanilla Rubi - Book Your Discovery Call"
        description="Book a discovery call with Vanilla Rubi. We'll help grow your business to match your vision, value, and next level with our multidimensional business growth services."
        keywords="discovery call, business consultation, growth strategy, contact form, business services"
      />
      
      <Section id="contact" aria-labelledby="contact-title">
        <Container>
          {/* Left Column - Content */}
          <ContentWrapper
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Eyebrow
              custom={0}
              initial="hidden"
              whileInView="visible"
              variants={fadeUpVariants}
              viewport={{ once: true }}
            >
              {t('finalCTA.eyebrow')}
            </Eyebrow>
            
            <Headline
              custom={1}
              initial="hidden"
              whileInView="visible"
              variants={fadeUpVariants}
              viewport={{ once: true }}
              id="contact-title"
            >
              <Trans i18nKey="finalCTA.headline" components={{ 1: <Highlight /> }} />
            </Headline>
            
            <Subheadline
              custom={2}
              initial="hidden"
              whileInView="visible"
              variants={fadeUpVariants}
              viewport={{ once: true }}
            >
              {t('finalCTA.subheadline')}
            </Subheadline>
          </ContentWrapper>
          
          {/* Right Column - Form */}
          <FormContainer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            {renderFormContent()}
          </FormContainer>
        </Container>
      </Section>
    </>
  );
}; 