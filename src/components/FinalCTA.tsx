import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

const Section = styled.section`
  scroll-margin-top: 90px;
  background: var(--color-gray);
  color: var(--color-black);
  padding: 5.5rem 0 4.5rem 0;
  text-align: center;
  position: relative;
  @media (max-width: 900px) {
    padding: 3rem 1.2rem 2.2rem 1.2rem;
  }
  @media (max-width: 600px) {
    padding: 2.2rem 0.7rem 1.2rem 0.7rem;
  }
`;

const MotionDiv = styled(motion.div)``;

const Headline = styled.h2`
  font-size: 2.2rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  margin-top: 2.7rem;
  margin-bottom: 1.1rem;
  letter-spacing: -0.01em;
  line-height: 1.13;
  @media (max-width: 900px) {
    margin-top: 1.7rem;
    font-size: 1.5rem;
    margin-bottom: 0.7rem;
    line-height: 1.18;
  }
  @media (max-width: 600px) {
    margin-top: 1.1rem;
    font-size: 1.13rem;
    margin-bottom: 0.7rem;
    line-height: 1.22;
    max-width: 95vw;
    margin-left: auto;
    margin-right: auto;
    white-space: pre-line;
  }
`;

const Highlight = styled.span`
  color: var(--color-primary);
  position: relative;
  display: inline-block;
`;

const Subheadline = styled.p`
  font-size: 1.13rem;
  font-family: 'Inter', sans-serif;
  color: var(--color-dark-gray);
  margin-bottom: 2.2rem;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 900px) {
    font-size: 1rem;
    margin-bottom: 1.1rem;
    max-width: 340px;
  }
  @media (max-width: 600px) {
    font-size: 0.97rem;
    margin-bottom: 1.1rem;
    max-width: 90vw;
    line-height: 1.5;
  }
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-black) 100%);
  color: var(--color-white);
  padding: 1.2rem 0;
  border-radius: 32px;
  font-size: 1.18rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  letter-spacing: 0.04em;
  box-shadow: 0 2px 12px rgba(24,24,27,0.07);
  transition: background 0.3s, box-shadow 0.2s, filter 0.18s;
  cursor: pointer;
  border: none;
  width: 100%;
  max-width: 420px;
  margin: 2.7rem auto 2.7rem auto;
  display: block;
  position: relative;
  outline: none;
  &:hover, &:focus-visible {
    background: linear-gradient(90deg, var(--color-black) 0%, var(--color-primary) 100%);
    filter: brightness(1.13) drop-shadow(0 0 8px #e6394633);
    box-shadow: 0 4px 24px rgba(230,57,70,0.13);
  }
  animation: ctaPulse 2.2s infinite cubic-bezier(.4,0,.2,1);
  @keyframes ctaPulse {
    0% { filter: none; }
    60% { filter: brightness(1.08) drop-shadow(0 0 8px #e6394633); }
    100% { filter: none; }
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(24,24,27,0.18);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled(motion.div)`
  background: var(--color-white);
  border-radius: 24px;
  box-shadow: 0 8px 40px rgba(24,24,27,0.13);
  padding: 2.2rem 1.5rem 1.7rem 1.5rem;
  max-width: 95vw;
  width: 100%;
  max-width: 410px;
  position: relative;
  @media (max-width: 600px) {
    padding: 0.7rem 0.3rem 0.7rem 0.3rem;
    border-radius: 24px;
  }
`;

const ModalHandle = styled.div`
  width: 38px;
  height: 4px;
  background: #e5e5e5;
  border-radius: 2px;
  margin: 0.7rem auto 1.1rem auto;
  @media (max-width: 600px) {
    margin: 0.5rem auto 0.7rem auto;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  background: none;
  border: none;
  font-size: 1.3rem;
  color: var(--color-dark-gray);
  cursor: pointer;
  z-index: 2;
  padding: 0.7rem;
  border-radius: 50%;
  transition: color 0.18s, background 0.18s;
  &:hover, &:focus-visible {
    color: var(--color-primary);
    background: #f3f4f6;
    outline: none;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  margin-top: 0.7rem;
`;

const Input = styled.input`
  padding: 1.1rem 1.1rem;
  border-radius: 12px;
  border: 1.5px solid var(--color-dark-gray);
  font-size: 1.09rem;
  font-family: 'Inter', sans-serif;
  background: var(--color-white);
  color: var(--color-black);
  transition: border 0.2s, box-shadow 0.2s;
  margin-bottom: 0.1rem;
  &:focus {
    border: 1.5px solid var(--color-primary);
    outline: none;
    box-shadow: 0 2px 12px rgba(230,57,70,0.09);
  }
  &::placeholder {
    color: #b0b0b0;
    font-style: italic;
    opacity: 0.6;
    font-size: 0.98rem;
  }
  &:invalid, &[aria-invalid='true'] {
    border: 1.5px solid rgba(230,57,70,0.7);
  }
  @media (max-width: 600px) {
    padding: 0.7rem 0.7rem;
    font-size: 0.97rem;
  }
`;

const TextArea = styled.textarea`
  padding: 1.1rem 1.1rem;
  border-radius: 12px;
  border: 1.5px solid var(--color-dark-gray);
  font-size: 1.09rem;
  font-family: 'Inter', sans-serif;
  min-height: 100px;
  background: var(--color-white);
  color: var(--color-black);
  transition: border 0.2s, box-shadow 0.2s;
  margin-bottom: 0.1rem;
  &::placeholder {
    color: #b0b0b0;
    font-style: italic;
    opacity: 0.6;
    font-size: 0.98rem;
  }
  &:focus {
    border: 1.5px solid var(--color-primary);
    outline: none;
    box-shadow: 0 2px 12px rgba(230,57,70,0.09);
  }
  &:invalid, &[aria-invalid='true'] {
    border: 1.5px solid rgba(230,57,70,0.7);
  }
  @media (max-width: 600px) {
    padding: 0.7rem 0.7rem;
    font-size: 0.97rem;
  }
`;

const SubmitButton = styled(motion.button)`
  background: var(--color-black);
  color: var(--color-white);
  padding: 1.2rem 0;
  border-radius: 32px;
  font-size: 1.13rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  box-shadow: 0 4px 18px rgba(24,24,27,0.10);
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  border: none;
  margin-top: 0.5rem;
  width: 100%;
  &:hover, &:focus-visible {
    background: var(--color-primary);
    color: var(--color-white);
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 8px 32px rgba(230,57,70,0.13);
    outline: none;
  }
`;

const Privacy = styled.p`
  font-size: 0.93rem;
  color: var(--color-dark-gray);
  margin-top: 1.1rem;
  text-align: center;
  opacity: 0.7;
`;

export const FinalCTA: React.FC = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => {
    setModalOpen(false);
    setTimeout(() => setSubmitState('idle'), 400);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState('sending');
    await new Promise(res => setTimeout(res, 1400));
    setSubmitState('sent');
    setTimeout(() => {
      setSubmitState('idle');
      handleClose();
      if (formRef.current) formRef.current.reset();
    }, 1800);
  };

  return (
    <Section id="contact" className="container">
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true }}
      >
        <Headline>
          <Trans i18nKey="finalCTA.headline" components={{ 1: <Highlight /> }} />
        </Headline>
        <Subheadline>
          {t('finalCTA.subheadline')}
        </Subheadline>
        <CTAButton
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleOpen}
          aria-haspopup="dialog"
          aria-expanded={modalOpen}
        >
          {t('finalCTA.cta')}
        </CTAButton>
        <AnimatePresence>
          {modalOpen && (
            <ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={handleClose}
            >
              <ModalBox
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 80, opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                onClick={e => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
              >
                <ModalHandle />
                <CloseButton onClick={handleClose} aria-label="Close modal">×</CloseButton>
                <Headline style={{ fontSize: '1.3rem', marginBottom: '0.7rem', textAlign: 'center' }}>
                  {t('finalCTA.modalHeadline')}
                </Headline>
                <Form ref={formRef} onSubmit={handleSubmit}>
                  <Input type="text" placeholder={t('finalCTA.placeholders.name')} required autoFocus />
                  <Input type="text" placeholder={t('finalCTA.placeholders.instagram')} />
                  <Input type="email" placeholder={t('finalCTA.placeholders.email')} required />
                  <TextArea placeholder={t('finalCTA.placeholders.block')} />
                  <SubmitButton
                    type="submit"
                    whileHover={{ scale: submitState === 'idle' ? 1.07 : 1 }}
                    whileTap={{ scale: submitState === 'idle' ? 0.97 : 1 }}
                    disabled={submitState !== 'idle'}
                    aria-disabled={submitState !== 'idle'}
                  >
                    {submitState === 'idle' && t('finalCTA.send')}
                    {submitState === 'sending' && t('finalCTA.sending')}
                    {submitState === 'sent' && t('finalCTA.sent')}
                  </SubmitButton>
                </Form>
                <Privacy>{t('finalCTA.privacy')}</Privacy>
              </ModalBox>
            </ModalOverlay>
          )}
        </AnimatePresence>
      </MotionDiv>
    </Section>
  );
}; 