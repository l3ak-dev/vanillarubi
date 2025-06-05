import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

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

const FormGroup = styled.div<{ fullWidth?: boolean }>`
  width: 100%;
  text-align: left;
  grid-column: ${props => props.fullWidth ? '1 / span 2' : 'auto'};
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

const OptionButton = styled.label<{ selected: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  background: ${props => props.selected ? 'rgba(90, 0, 22, 0.05)' : 'white'};
  border: 1px solid ${props => props.selected ? 'var(--color-primary)' : 'rgba(90, 0, 22, 0.15)'};
  border-radius: 2px;
  font-size: 0.85rem;
  font-family: 'Montserrat', sans-serif;
  color: var(--color-primary-dark);
  cursor: pointer;
  transition: all 0.2s;
  flex: 1 1 calc(50% - 5px);
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

const SubmitButton = styled(motion.button)`
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

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setInstagram('');
    setServices('');
    setJourneyOptions(['handsoff']);
    setReadinessOptions(['now']);
    setWaitlist('');
    
    if (formRef.current) {
      const form = formRef.current;
      form.reset();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState('sending');
    await new Promise(res => setTimeout(res, 1400));
    setSubmitState('sent');
    setTimeout(() => {
      setSubmitState('idle');
      resetForm();
    }, 1800);
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

  return (
    <LazyMotion features={domAnimation}>
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
            <FormHeadline id="contact-form-title">
              {t('finalCTA.modalHeadline')}
            </FormHeadline>
            
            <CallInfoBox>
              <CallInfoText>
                {t('finalCTA.callInfo')}
              </CallInfoText>
            </CallInfoBox>
            
            <Form ref={formRef} onSubmit={handleSubmit} aria-describedby="form-instructions">
              <div id="form-instructions" className="sr-only">{t('finalCTA.formInstructions')}</div>
              <FormRow>
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
              </FormRow>
              
              <FormGroup fullWidth>
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
              
              <FormGroup fullWidth>
                <Label htmlFor="services">{t('finalCTA.placeholders.services')}</Label>
                <TextArea 
                  id="services" 
                  value={services}
                  onChange={(e) => setServices(e.target.value)}
                  rows={3} 
                  placeholder={i18n.language === 'en' ? "Tell us about your business and services..." : i18n.language === 'pt' ? "Conte-nos sobre seu negócio e serviços..." : "Cuéntanos sobre tu negocio y servicios..."}
                />
              </FormGroup>
              
              <FormGroup fullWidth>
                <Label htmlFor="instagram">{t('finalCTA.placeholders.instagram')}</Label>
                <Input 
                  type="text" 
                  id="instagram" 
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  placeholder="@username or URL"
                />
              </FormGroup>
              
              <FormGroup fullWidth>
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
              
              <FormGroup fullWidth>
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
              
              <SubmitButton
                type="submit"
                disabled={submitState !== 'idle'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-live="polite"
              >
                <StatusContainer>
                  {submitState === 'idle' && t('finalCTA.send')}
                  {submitState === 'sending' && t('finalCTA.sending')}
                  {submitState === 'sent' && t('finalCTA.sent')}
                </StatusContainer>
              </SubmitButton>
            </Form>
            
            <Privacy>
              {t('finalCTA.privacy')}
            </Privacy>
          </FormContainer>
        </Container>
      </Section>
    </LazyMotion>
  );
}; 