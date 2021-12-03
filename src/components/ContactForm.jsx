import React from "react";

const ContactForm = () => {
	return (
		<form className="flex flex-col rounded-md m-4 dark:bg-black">
			<div className="my-4 p-2 dark:bg-gray-800 bg-blue-100">
				<label htmlFor="name" className="p-1">
					Name
				</label>
				<input
					type="text"
					id="name"
					className="w-full outline-none p-1 bg-blue-100 dark:bg-gray-800"
				/>
			</div>
			<div className="my-4 p-2 bg-blue-100 dark:bg-gray-800">
				<label htmlFor="email" className="p-1">
					Email
				</label>
				<input
					type="text"
					id="email"
					className="w-full bg-blue-100 outline-none p-1 dark:bg-gray-800"
				/>
			</div>
			<div className="my-4 p-2 bg-blue-100 dark:bg-gray-800">
				<label htmlFor="project" className="p-1">
					Project
				</label>
				<input
					type="text"
					id="project"
					className="w-full bg-blue-100 outline-none p-1 dark:bg-gray-800"
				/>
			</div>
			<div className="my-4 p-2 bg-blue-100 dark:bg-gray-800">
				<label htmlFor="text" className="p-1">
					Message
				</label>
				<textarea
					type="text"
					id="text"
					className="w-full h-48 resize-none bg-blue-100 outline-none p-1 dark:bg-gray-800"
				/>
			</div>
			<button className="flex my-5 mx-2 text-white rounded-xl w-28 h-16 bg-blue-400 transition-colors hover:bg-blue-600">
				<span className="m-auto">Send</span>
			</button>
		</form>
	);
};

export default ContactForm;
