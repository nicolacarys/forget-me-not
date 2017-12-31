$($ => {

	const container = $('.wrapper');

	container.on('click', 'input[type="submit"]', (e) => {
		e.preventDefault();
		let now = moment(),
				month = container.find($('.birthday-month option:selected')).text(),
				day = container.find($('.birthday-day option:selected')).text();

		// console.log(now.format('Do MMMM YYYY'));
		console.log(now.format('DD-MM-YYYY'));
		console.log(month);
		console.log(day);
	});

});