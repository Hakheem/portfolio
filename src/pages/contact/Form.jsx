import React, { useState } from "react";

const Form = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false); // To track form submission status

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const validate = () => {
		let formErrors = {};

		if (!formData.name.trim()) {
			formErrors.name = "Name is required";
		}

		if (!formData.email.trim()) {
			formErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			formErrors.email = "Email is invalid";
		}

		if (!formData.message.trim()) {
			formErrors.message = "Message is required";
		}

		return formErrors;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formErrors = validate();
		if (Object.keys(formErrors).length === 0) {
			// If no errors, prepare form data for submission
			const formDataToSubmit = new FormData(event.target);
			formDataToSubmit.append(
				"access_key",
				"1a570ddd-3b3a-4326-9f18-c8f537568095"
			);

			const object = Object.fromEntries(formDataToSubmit.entries());
			const json = JSON.stringify(object);

			try {
				const res = await fetch("https://api.web3forms.com/submit", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
					body: json,
				});
				const result = await res.json();

				if (result.success) {
					setSubmitted(true);
					console.log("Form successfully submitted", result);
				} else {
					console.error("Form submission failed", result);
				}
			} catch (error) {
				console.error("Error submitting form", error);
			}
		} else {
			setErrors(formErrors);
		}
	};

	return (
		<form className="grid gap-4" onSubmit={handleSubmit}>
			<div>
				<input
					className={`border px-4 py-2 w-full focus:outline-none ${
						errors.name ? "border-red-500" : ""
					}`}
					type="text"
					name="name"
					id="name"
					placeholder="Your Name"
					value={formData.name}
					onChange={handleChange}
				/>
				{errors.name && <p className="text-red-500">{errors.name}</p>}
			</div>

			<div>
				<input
					className={`border px-4 py-2 w-full focus:outline-none ${
						errors.email ? "border-red-500" : ""
					}`}
					type="email"
					name="email"
					id="email"
					placeholder="Your Email"
					value={formData.email}
					onChange={handleChange}
				/>
				{errors.email && <p className="text-red-500">{errors.email}</p>}
			</div>

			<div>
				<textarea
					className={`border px-4 py-2 w-full focus:outline-none ${
						errors.message ? "border-red-500" : ""
					}`}
					name="message"
					id="message"
					placeholder="Message"
					rows={4}
					value={formData.message}
					onChange={handleChange}
				/>
				{errors.message && (
					<p className="text-red-500">{errors.message}</p>
				)}
			</div>

			<div>
				<button
					className="py-3 px-6 rounded-full border bg-primary text-white hover:bg-white hover:text-primary"
					type="submit"
				>
					Submit
				</button>
			</div>

			{submitted && (
				<p className="text-green-500">Form submitted successfully!</p>
			)}
		</form>
	);
};

export default Form;
