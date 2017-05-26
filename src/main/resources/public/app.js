var sidebar = document.getElementById("sidebar");
$(document).ready(function() {
	$(".app-menu").click(function() {
		sidebar.style.display = "none";
	});
	$(".menu-icon").click(function() {
		if (sidebar.style.display === 'block') {
			sidebar.style.display = 'none';
		} else {
			sidebar.style.display = 'block';
		}
	});
});