import $ from "jquery";

class Navbar {
  constructor() {
	this.menuIcon = $(".navbar__icon-box");
	this.navbar = $(".navbar");

	console.log(this.menuIcon);
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
	this.menuIcon.toggleClass("active");
	this.navbar.toggleClass("active");
  }
}

export default Navbar;
