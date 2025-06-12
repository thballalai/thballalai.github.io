import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Form, Label, ErrorMessage } from './styles';

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      reset(); // Limpa os campos após envio bem-sucedido
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <Label>Nome:</Label>
        <input
          type="text"
          {...register('name', {
            required: 'O nome é obrigatório.',
            pattern: {
              value: /^[A-Za-z0-9 ]+$/,
              message: 'Use apenas letras e números.',
            },
          })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </div>

      <div>
        <Label>Email:</Label>
        <input
          type="text"
          {...register('email', {
            required: 'O e-mail é obrigatório.',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
              message: 'Digite um e-mail válido.',
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </div>

      <div>
        <Label>Mensagem:</Label>
        <textarea
          {...register('message', {
            required: 'A mensagem é obrigatória.',
          })}
        />
        {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>

      {isSubmitSuccessful && isSubmitted && <p>Mensagem enviada com sucesso!</p>}
    </Form>
  );
}

export default ContactForm;