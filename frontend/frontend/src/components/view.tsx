import React from "react";

export type StudentRecord = {
	_id: string;
	sname: string;
	sage: string;
	splace: string;
};

type ViewProps = {
	students: StudentRecord[];
	onEdit?: (student: StudentRecord) => void;
	onDelete?: (id: string) => void;
	emptyStateMessage?: string;
};

export default function View({
	students,
	onEdit,
	onDelete,
	emptyStateMessage = "No student records yet.",
}: ViewProps) {
	return (
		<section id="view" className="panel panel--table">
			<div className="panel__header">
				<p className="panel__eyebrow">Student list</p>
				<h2>View records</h2>
				<p>Review the collection that comes back from the backend API.</p>
			</div>

			{students.length === 0 ? (
				<div className="empty-state">{emptyStateMessage}</div>
			) : (
				<div className="table-wrap">
					<table className="student-table">
						<thead>
							<tr>
								<th>Name</th>
								<th>Age</th>
								<th>Place</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{students.map((student) => (
								<tr key={student._id}>
									<td>{student.sname}</td>
									<td>{student.sage}</td>
									<td>{student.splace}</td>
									<td className="student-table__actions">
										{onEdit ? (
											<button type="button" onClick={() => onEdit(student)}>
												Edit
											</button>
										) : null}
										{onDelete ? (
											<button type="button" onClick={() => onDelete(student._id)}>
												Delete
											</button>
										) : null}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</section>
	);
}
