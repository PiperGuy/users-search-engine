export const handleUserSearch = (users, searchKey) => {
	const searchFilteredResult = users.filter(
		({
			name: { first, last },
			location: {
				street: { number, name },
				city,
				country,
			},
		}) => {
			const nameSearchSpace = `${first} ${last}`.toLowerCase();
			const addressSearchSpace = `${number || ''} ${name || ''}, ${city || ''}, ${country || ''}`.toLowerCase();
			// compare the search key with name and address and return if it is matching.
			return nameSearchSpace.includes(searchKey.toLowerCase()) || addressSearchSpace.includes(searchKey.toLowerCase());
		}
	);
	// return resultant array from filter.
	return searchFilteredResult || [];
};
