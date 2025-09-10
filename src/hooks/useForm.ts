import { useState, useCallback } from 'react';
import type { FormData, ValidationError, FormState } from '../types';

// Validation functions
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9+\-\s()]{10,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

const validateFullName = (name: string): boolean => {
  return name.trim().length >= 2;
};

export const useForm = (initialData: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    errors: []
  });

  const updateField = useCallback((field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear field-specific errors when user starts typing
    if (formState.errors.length > 0) {
      setFormState(prev => ({
        ...prev,
        errors: prev.errors.filter(error => error.field !== field)
      }));
    }
  }, [formState.errors]);

  const validateForm = useCallback((): ValidationError[] => {
    const errors: ValidationError[] = [];

    if (!validateFullName(formData.fullName)) {
      errors.push({
        field: 'fullName',
        message: 'Họ và tên phải có ít nhất 2 ký tự'
      });
    }

    if (!validateEmail(formData.email)) {
      errors.push({
        field: 'email',
        message: 'Email không hợp lệ'
      });
    }

    if (!validatePhone(formData.phone)) {
      errors.push({
        field: 'phone',
        message: 'Số điện thoại không hợp lệ'
      });
    }

    if (!formData.agreeToTerms) {
      errors.push({
        field: 'agreeToTerms',
        message: 'Vui lòng đồng ý với điều khoản'
      });
    }

    return errors;
  }, [formData]);

  const resetForm = useCallback(() => {
    setFormData(initialData);
    setFormState({
      isSubmitting: false,
      isSuccess: false,
      errors: []
    });
  }, [initialData]);

  const handleSubmit = useCallback(async (onSubmit: (data: FormData) => Promise<void> | void) => {
    if (formState.isSubmitting) return;

    // Validate form
    const errors = validateForm();
    if (errors.length > 0) {
      setFormState(prev => ({
        ...prev,
        errors
      }));
      return;
    }

    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      errors: []
    }));

    try {
      await onSubmit(formData);
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        isSuccess: true
      }));

      // Reset form after success
      setTimeout(() => {
        resetForm();
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        errors: [{
          field: 'fullName', // Generic error
          message: 'Có lỗi xảy ra. Vui lòng thử lại sau.'
        }]
      }));
    }
  }, [formData, formState.isSubmitting, validateForm, resetForm]);

  const getFieldError = useCallback((field: keyof FormData): string | undefined => {
    const error = formState.errors.find(err => err.field === field);
    return error?.message;
  }, [formState.errors]);

  return {
    formData,
    formState,
    updateField,
    resetForm,
    handleSubmit,
    getFieldError,
    isSubmitting: formState.isSubmitting,
    isSuccess: formState.isSuccess,
    hasErrors: formState.errors.length > 0
  };
};
