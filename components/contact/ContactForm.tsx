"use client";

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';
import SuccessMessage from './SuccessMessage';
import { useTranslations } from 'next-intl';

const ContactForm = () => {
  const t = useTranslations('contact');
  const { toast } = useToast();
  const [status, setStatus] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!formData.Name.trim() || !formData.Email.trim()) {
        toast({
          title: t('errors.title'),
          description: t('errors.description'),
          variant: 'destructive',
        });
        return;
      }
      const form = new FormData();
      form.append('access_key', process.env.NEXT_PUBLIC_ACCESS_KEY as string);
      const currentDateTime = new Date().toLocaleDateString();
      form.append('Name', formData.Name);
      form.append('Email', formData.Email);
      form.append('Message', formData.Message);
      form.append('DateTime', currentDateTime);

      const response = await fetch(process.env.NEXT_PUBLIC_GETFORM_URL as string, {
        method: 'POST',
        body: form,
      });

      if (response?.ok) {
        setSuccess(true);
        setStatus(t('status.success'));
        setFormData({
          Name: '',
          Email: '',
          Message: '',
        });
      } else {
        setStatus(t('status.error'));
      }
    } catch (error) {
      console.error('Data submitting Error', error);
      setStatus(t('status.errorGeneric'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-2xl md:text-4xl text-lightSky">{t('headerForm')}</h3>
      <p>{t('description')}</p>

      <>
        {success ? (
          <SuccessMessage status={status} />
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Input
                type="text"
                id="Name"
                name="Name"
                required
                placeholder={t('placeholders.name')}
                value={formData.Name}
                onChange={handleChange}
                disabled={loading}
                className="disabled:bg-white/10"
              />
              <Input
                type="email"
                id="Email"
                name="Email"
                required
                placeholder={t('placeholders.email')}
                value={formData.Email}
                onChange={handleChange}
                disabled={loading}
                className="disabled:bg-white/10"
              />
            </div>
            <Textarea
              name="Message"
              placeholder={t('placeholders.message')}
              rows={4}
              value={formData.Message}
              onChange={handleChange}
              disabled={loading}
              className="disabled:bg-white/10"
            />
            <Button
              disabled={loading}
              type="submit"
              className="w-full py-4 bg-lightSky text-white/80 border border-lightSky/10 hover:bg-lightSky/30 hover:text-hoverColor hoverEffect"
            >
              {loading ? t('button.loading') : t('button.submit')}
            </Button>
          </form>
        )}
      </>
    </div>
  );
};

export default ContactForm;
