document.getElementById('body').addEventListener("unload", function () {
    window.open("./index.html", '_blank');
})
let counter = 1;
function a() {
	let windoze = window.open("", "_blank", "width=1000,height=1000");
	windoze.document.write(`<body class='popup'>
	<p>CANADA IS WONDERFUL</p>
	<audio controls autoplay hidden loop>
		<source src='./music.ogx' type='audio/ogg'>
	</audio>
	<style>
		body {
			background-image: url("./canada_flag.webp");
		}
	</style>
	</body>`);
    windoze.addEventListener("unload", function () {
		counter = counter + 1;
			let x = 0;
			while ( x < counter ) {
				a();
                x=x+1;
			}
    })
}
a();
