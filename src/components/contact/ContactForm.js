import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  FirstName: yup
    .string()
    .required("Please enter your first name")
    .min(3, "Please enter a name with minimum 3 characters"),
  LastName: yup
    .string()
    .required("Please enter your last name")
    .min(4, "Please enter a name with minimum 4 characters"),
  subject: yup.string().required("Subject is required"),
  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

function Form() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="First name" name="FirstName" ref={register} />
      {errors.name && <span>{errors.name.message}</span>}

      <input placeholder="Last name" name="LastName" ref={register} />
      {errors.name && <span>{errors.name.message}</span>}

      <select name="subject" ref={register}>
        <option className="placeholder" value="">
          Please select a subject
        </option>
        <option value="Personal inquiry">Personal inquiry</option>
        <option value="saab">Business inquiry</option>
      </select>

      <input placeholder="Email" name="email" ref={register} />
      {errors.email && <span>{errors.email.message}</span>}

      <textarea
        placeholder="Enter your message here..."
        name="message"
        ref={register}
      ></textarea>
      {errors.message && <span>{errors.message.message}</span>}

      <button className="main-button">Send</button>
    </form>
  );
}

export default Form;
