import React from "react";

export type StudentFormValues = {
	sname: string;
	sage: string;
	splace: string;
};

type AddProps = {
	values: StudentFormValues;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	title?: string;
	description?: string;
	submitLabel?: string;
};

export default function Add({
	values,
	onChange,
	onSubmit,
	title = "Add student",
	description = "Capture the student details used by the backend collection.",
	submitLabel = "Save student",
}: AddProps) {
	return (
		<section id="add" className="panel panel--form">
			<div className="panel__header">
				<p className="panel__eyebrow">Student form</p>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>

			<form className="student-form" onSubmit={onSubmit}>
				<label className="student-form__field">
					<span>Name</span>
					<input
						type="text"
						name="sname"
						value={values.sname}
						onChange={onChange}
						placeholder="Student name"
						required
					/>
				</label>

				<label className="student-form__field">
					<span>Age</span>
					<input
						type="number"
						name="sage"
						value={values.sage}
						onChange={onChange}
						placeholder="Age"
						required
					/>
				</label>

				<label className="student-form__field">
					<span>Place</span>
					<input
						type="text"
						name="splace"
						value={values.splace}
						onChange={onChange}
						placeholder="Location"
						required
					/>
				</label>

				<button className="student-form__submit" type="submit">
					{submitLabel}
				</button>
			</form>
		</section>
	);
}
