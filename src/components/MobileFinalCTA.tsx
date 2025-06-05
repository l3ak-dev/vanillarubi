import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

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

const ProgressStep = styled.div<{ active: boolean; completed: boolean }>`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${props => 
    props.completed 
      ? 'var(--color-primary)' 
      : props.active 
        ? 'white' 
        : 'rgba(90, 0, 22, 0.05)'};
  border: 2px solid ${props => 
    props.completed || props.active 
      ? 'var(--color-primary)' 
      : 'rgba(90, 0, 22, 0.15)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: ${props => 
    props.completed 
      ? 'white' 
      : props.active 
        ? 'var(--color-primary)' 
        : 'rgba(90, 0, 22, 0.5)'};
  position: relative;
  z-index: 2;
`;

const StepLabel = styled.span<{ active: boolean }>`
  position: absolute;
  top: 30px;
  font-size: 0.7rem;
  font-weight: 500;
  color: ${props => props.active ? 'var(--color-primary)' : 'rgba(90, 0, 22, 0.5)'};
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
  gap: 8px;
  margin-top: 2px;
`;

const OptionButton = styled.label<{ selected: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 14px;
  background: ${props => props.selected ? 'rgba(90, 0, 22, 0.05)' : 'white'};
  border: 1px solid ${props => props.selected ? 'var(--color-primary)' : 'rgba(90, 0, 22, 0.15)'};
  border-radius: 2px;
  font-size: 0.85rem;
  font-family: 'Montserrat', sans-serif;
  color: var(--color-primary-dark);
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;
  
  &:hover {
    background: ${props => props.selected ? 'rgba(90, 0, 22, 0.07)' : 'rgba(90, 0, 22, 0.02)'};
    border-color: ${props => props.selected ? 'var(--color-primary)' : 'rgba(90, 0, 22, 0.25)'};
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

const NavButton = styled(motion.button)<{ isPrimary?: boolean }>`
  background: ${props => props.isPrimary ? 'var(--color-primary)' : 'transparent'};
  color: ${props => props.isPrimary ? 'white' : 'var(--color-primary)'};
  border: ${props => props.isPrimary ? 'none' : '1px solid var(--color-primary)'};
  padding: ${props => props.isPrimary ? '14px 20px' : '13px 20px'};
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
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
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
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  
  // Estados para os campos do formulário
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [services, setServices] = useState('');
  
  // Estados para os campos de escolha múltipla
  const [journeyOptions, setJourneyOptions] = useState(['handsoff']);
  const [readinessOptions, setReadinessOptions] = useState(['now']);
  const [waitlist, setWaitlist] = useState('');
  
  // Validações para navegação entre etapas
  const isInfoStepValid = fullName.trim() !== '' && email.trim() !== '';
  const isProjectStepValid = services.trim() !== '';
  const isTimingStepValid = waitlist !== '';
  
  // Handlers para navegação
  const goToNextStep = () => {
    if (currentStep === 'info') setCurrentStep('project');
    else if (currentStep === 'project') setCurrentStep('timing');
    else if (currentStep === 'timing') handleSubmit();
  };
  
  const goToPrevStep = () => {
    if (currentStep === 'project') setCurrentStep('info');
    else if (currentStep === 'timing') setCurrentStep('project');
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
      
      // Simulação de envio de dados para o servidor
      await new Promise(res => setTimeout(res, 1400));
      
      setSubmitState('sent');
      setCurrentStep('success');
      
      setTimeout(() => {
        setSubmitState('idle');
      }, 1800);
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
          ? t('finalCTA.sending') 
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
        <Input 
          type="text" 
          id="fullName" 
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          aria-required="true"
        />
      </FormGroup>
      
      <FormGroup>
        <Label htmlFor="email">{t('finalCTA.placeholders.email')}</Label>
        <Input 
          type="email" 
          id="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-required="true"
        />
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
          <OptionButton selected={journeyOptions.includes('handsoff')}>
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
        
          <OptionButton selected={journeyOptions.includes('notsure')}>
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
        
          <OptionButton selected={journeyOptions.includes('specific')}>
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
        <TextArea 
          id="services" 
          value={services}
          onChange={(e) => setServices(e.target.value)}
          rows={4} 
          placeholder={i18n.language === 'en' ? "Tell us about your business and services..." : i18n.language === 'pt' ? "Conte-nos sobre seu negócio e serviços..." : "Cuéntanos sobre tu negocio y servicios..."}
          required
          aria-required="true"
        />
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
      
      <FormGroup>
        <OptionGroupTitle id="readiness-title">{t('finalCTA.placeholders.readiness')}</OptionGroupTitle>
        <OptionGroup role="group" aria-labelledby="readiness-title">
          <OptionButton selected={readinessOptions.includes('now')}>
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
        
          <OptionButton selected={readinessOptions.includes('soon')}>
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
        
          <OptionButton selected={readinessOptions.includes('later')}>
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
          <OptionButton selected={waitlist === 'yes'}>
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
        
          <OptionButton selected={waitlist === 'no'}>
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
        isPrimary 
        onClick={resetForm}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {t('finalCTA.success.button')}
      </NavButton>
    </SuccessMessage>
  );
  
  return (
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
          <FormContainer>
            {currentStep !== 'success' && (
              <>
                {/* Indicador de progresso */}
                <ProgressContainer>
                  <ProgressStep 
                    active={currentStep === 'info'} 
                    completed={currentStep === 'project' || currentStep === 'timing'}
                  >
                    {currentStep === 'project' || currentStep === 'timing' ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : '1'}
                    <StepLabel active={currentStep === 'info'}>
                      {t('finalCTA.steps.info')}
                    </StepLabel>
                  </ProgressStep>
                  
                  <ProgressStep 
                    active={currentStep === 'project'} 
                    completed={currentStep === 'timing'}
                  >
                    {currentStep === 'timing' ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : '2'}
                    <StepLabel active={currentStep === 'project'}>
                      {t('finalCTA.steps.project')}
                    </StepLabel>
                  </ProgressStep>
                  
                  <ProgressStep 
                    active={currentStep === 'timing'} 
                    completed={false}
                  >
                    3
                    <StepLabel active={currentStep === 'timing'}>
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
                    isPrimary
                    onClick={goToNextStep}
                    disabled={isNextButtonDisabled()}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
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
  );
}; 