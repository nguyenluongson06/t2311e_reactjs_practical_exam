import React, { useState, useEffect } from 'react';
import * as Icon from 'react-bootstrap-icons';

function App() {
	const [bookList, setBookList] = useState([
		{ name: 'Book 1', author: 'Author 1', favorite: true },
		{ name: 'Book 2', author: 'Author 2', favorite: false },
	]);

	const [newBookName, setNewBookName] = useState('');
	const [newBookAuthor, setNewBookAuthor] = useState('');
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		console.log('Book list updated:', bookList);
	}, [bookList]);

	const handleAddBook = () => {
		if (newBookName === '') {
			alert('Book name is empty, please enter');
			return;
		}
		if (newBookAuthor === '') {
			alert('Author name is empty, please enter');
			return;
		}

		const existingBook = bookList.find(
			(book) => book.name === newBookName && book.author === newBookAuthor,
		);

		if (!existingBook) {
			setBookList((prevList) => [
				...prevList,
				{ name: newBookName, author: newBookAuthor, favorite: isFavorite },
			]);
			alert('File saved successfully');
		} else {
			alert('This book already exists in the list!');
		}

		setNewBookName('');
		setNewBookAuthor('');
		setIsFavorite(false);
	};

	return (
		<div className='container-fluid'>
			<h1 className='mt-3'>A List of Books</h1>
			<table className='table mt-3 border'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Author</th>
						<th>Favorite</th>
					</tr>
				</thead>
				<tbody>
					{bookList.map((book, index) => (
						<tr key={index}>
							<td>{book.name}</td>
							<td>{book.author}</td>
							<td>
								{book.favorite ? (
									<Icon.CheckLg className='text-success'></Icon.CheckLg>
								) : (
									<Icon.Ban className='text-danger'></Icon.Ban>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<h2>Add a New Book</h2>
			<div className='d-flex justify-content-between align-items-center'>
				<input
					type='text'
					className='form-control'
					placeholder='Enter book name'
					value={newBookName}
					required
					onChange={(e) => setNewBookName(e.target.value)}
				/>
				<input
					type='text'
					className='form-control'
					placeholder='Enter author name'
					value={newBookAuthor}
					required
					onChange={(e) => setNewBookAuthor(e.target.value)}
				/>
			</div>
			<div className='d-flex justify-content-between align-items-center mt-3'>
				<div className='d-flex align-items-center'>
					<label className='mr-2'>Favorite:</label>
					<input
						type='checkbox'
						checked={isFavorite}
						onChange={() => setIsFavorite(!isFavorite)}
					/>
				</div>
				<button className='btn btn-success' onClick={handleAddBook}>
					<Icon.PlusCircleFill></Icon.PlusCircleFill>
					Add Book
				</button>
			</div>
		</div>
	);
}

export default App;
