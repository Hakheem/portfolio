import React from "react";
import Form from "../contact/Form";
import images from "../../Constants/images";

const Contact = () => {
	return (
		<div className="container mx-auto my-8">
			<div className="p-6">
				<div className="flex justify-center">
					<h1 className="text-primary p-2 border rounded-full uppercase">
						Contact
					</h1>
				</div>
				<p className="py-8 text-center">
					I would love to hear about your project and how I could
					help. Send me an email at{" "}
					<a
						href="to:ntruderleroy@gmail.com"
						className="text-primary"
					>
						hectorjohn254@gmail.com{" "}
					</a>
					or alternatively fill in the form below, and I’ll get back
					to you as soon as possible.
				</p>
				<div className="grid gap-8 md:grid-cols-2 ">
					<div>
						<Form />
					</div>
					<div className="grid gap-8">
						<div className="flex flex-col items-center">
							<img src={images.email} alt="" />
							<h2 className="text-xl py-2 font-medium">
								Email Me
							</h2>
							<p>hectorjohn254@gmail.com</p>
						</div>
						<div className="flex flex-col items-center">
							<img src={images.phone} alt="" />
							<h2 className="text-xl py-2 font-medium">
								Call Me
							</h2>
							<p>+254769403162</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
