// TODO: Add proper error and validation handling
// ! https://www.emailregex.com/
// TODO: Fix CSS issues

import { useForm, SubmitHandler } from 'react-hook-form';

interface Props {
  email: string;
}

const Newsletter = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Props>();
  const onSubmit: SubmitHandler<Props> = (data) => console.log(data);

  return (
    <section id="newsletter-container">
      <div className="inner-wrapper">
        <h2>Newsletter</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          porro dicta quae suscipit quis et dolore, eum minima quas ea officiis
          quisquam veniam doloribus, earum minus expedita eaque placeat ipsa.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action="https://buttondown.email/api/emails/embed-subscribe/aufewigwinter"
          method="post"
        >
          <label htmlFor="email-input">Enter your e-mail</label>
          <input
            id="email-input"
            type="email"
            placeholder="Enter e-mail"
            {...register('email', { required: true })}
          />
          <button type="submit">Sign up</button>
        </form>
        {errors.email && (
          <>
            <br />
            <span role="alert">This field is required!</span>
          </>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
