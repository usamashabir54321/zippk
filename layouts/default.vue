<template>
	<div :class="is_sidebar ? 'mobile-menu-visible' : ''">
		<WebHdr @open_sibar="is_sidebar = true" @close_sibar="is_sidebar = false" />
		<main>
			<Nuxt keep-alive />
		</main>
		<WebFtr />
	</div>
</template>

<script>
	export default {
		data () {
			return {
				is_sidebar: false,
			}
		}
	}
</script>

<style>
		/*HEADER STYLING*/
	.header-style-two {position: relative;}
	.header-style-two .menu-area {background: #252631;padding: 8px 0;}
	.menu-area .mobile-nav-toggler {
	    position: relative;
	    float: right;
	    font-size: 30px;
	    cursor: pointer;
	    line-height: 1;
	    color: #fff;
	    display: none;
	    margin-top: 7px;
	}
	.menu-nav {
	    display: flex;
	    align-items: center;
	    flex-wrap: wrap;
	    justify-content: flex-start;
	}
	.navbar-wrap {display: flex;flex-grow: 1;}
	.navbar-wrap > ul {
	    display: flex;
	    flex-direction: row;
	    flex-wrap: wrap;
	    margin-left: auto;
	    margin-right: auto;
	}
	.mobile-menu .ul_social {
	    justify-content: center;
	    display: flex;
	    margin-top: 30px;
	}
	.navbar-wrap > ul > li {display: block;position: relative;}
	.navbar-wrap > ul > li > a {
	    font-size: 14px;
	    font-weight: 700;
	    text-transform: uppercase;
	    color: #f0f0f0;
	    padding: 38px 23px;
	    display: block;
	    line-height: 1;
	    position: relative;
	    z-index: 1;
	}
	.sticky-menu {
	    left: 0;
	    padding: 0 0;
	    margin: auto;
	    position: fixed;
	    top: 0;
	    width: 100%;
	    z-index: 99;
	    background: #171d22;
	    -webkit-animation: 1000ms ease-in-out 0s normal none 1 running fadeInDown;
	    animation: 1000ms ease-in-out 0s normal none 1 running fadeInDown;
	    -webkit-box-shadow: 0 10px 15px rgb(25 25 25 / 10%);
	    box-shadow: 0 10px 15px rgb(25 25 25 / 10%);
	    border-radius: 0;
	}
	.header-action > ul {display: flex;align-items: center;margin-left: 10px;}.header-action > ul > li {position: relative;margin-left: 30px;}.header-action > ul > li:first-child {margin-left: 0;}
	.header-style-two .menu-area.sticky-menu {padding: 0 0;}
		/*COMMON CSS*/
	*, ::after, ::before {margin: 0;padding: 0;box-sizing: border-box;outline: none;text-decoration: none;}
	body {font-family: -webkit-pictograph;font-weight: 900;font-style: normal;font-size: 14px;color: #bcbcbc;background:black;}
	html::-webkit-scrollbar {width: 6px;}
	html::-webkit-scrollbar-thumb {
	    background: #434343;
	    box-shadow: inset 2px 2px 2px hsl(0deg 0% 100% / 25%), inset -2px -2px 2px rgb(0 0 0 / 25%);
	}
	html::-webkit-scrollbar-track {background: linear-gradient(90deg,#434343,#434343 1px,#111 0,#111);}
	.img {max-width: 100%;transition: all 0.3s ease-out 0s;}
	a,.button {transition: all 0.3s ease-out 0s;}
	a:focus,.btn:focus,.button:focus {text-decoration: none;outline: none;box-shadow: none;}
	a:hover,.portfolio-cat a:hover,.footer -menu li a:hover {color: #2B96CC;text-decoration: none;}
	a,button {color: #1696e7;outline: medium none;}
	button:focus,input:focus,input:focus,textarea,textarea:focus{outline: 0}
	h1,h2,h3,h4,h5,h6 {font-family: -webkit-pictograph;color: #fff;margin-top: 0px;font-style: normal;font-weight: 700;text-transform: normal;}
	h1 a,h2 a,h3 a,h4 a,h5 a,h6 a {color: inherit;}h1 {font-size: 40px;font-weight: 500;}
	h2 {font-size: 35px;}h3 {font-size: 28px;}h4 {font-size: 22px;}h5 {font-size: 18px;}h6 {font-size: 16px;}ul {margin: 0px;padding: 0px;}li {list-style: none}
	p {font-size: 14px;font-weight: 500;line-height: 26px;color: #bcbcbc;margin-bottom: 15px;}
	button, input {overflow: visible;}
	button, input, optgroup, select, textarea {margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;}
	hr {border-bottom: 1px solid #eceff8;border-top: 0 none;margin: 30px 0;padding: 0;}
	img {vertical-align: middle;border-style: none;}
	label {color: #7e7e7e;cursor: pointer;font-size: 14px;font-weight: 400;}
	*::-moz-selection {background: #d6b161;color: #fff;text-shadow: none;}
	::-moz-selection {background: #444;color: #fff;text-shadow: none;}
	::selection {background: #444;color: #fff;text-shadow: none;}
	*::-moz-placeholder {color: #555555;font-size: 14px;opacity: 1;}
	*::placeholder {color: #555555;font-size: 14px;opacity: 1;}
	.container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl {
	    width: 100%;
	    padding-right: 15px;
	    padding-left: 15px;
	    margin-right: auto;
	    margin-left: auto;
	}
	.row {display: flex;flex-wrap: wrap;margin-right: -15px;margin-left: -15px;}
	.btn:not(:disabled):not(.disabled) {cursor: pointer;}
	.btn {
	    user-select: none;
	    -moz-user-select: none;
	    background: #12151e none repeat scroll 0 0;
	    border: 2px solid #e4d804;
	    border-radius: 50px;
	    color: #e3dfdf;
	    cursor: pointer;
	    display: inline-block;
	    font-size: 12px;
	    font-weight: 700;
	    letter-spacing: 1px;
	    line-height: 1.5;
	    margin-bottom: 0;
	    padding: 16px 34px;
	    text-align: center;
	    text-transform: uppercase;
	    touch-action: manipulation;
	    transition: all 0.3s ease 0s;
	    vertical-align: middle;
	    white-space: nowrap;
	    max-width: 200px;
	}
	.col-12 {flex: 0 0 100%;max-width: 100%;}.custom-container {max-width: 1420px;}
	.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8,.col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
		position: relative;
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
	}
		/*COMMON MEDIA QUERIES*/
	@media (min-width: 576px) {.container, .container-sm {max-width: 540px;}}
	@media (min-width: 768px) {
		.container, .container-md, .container-sm {max-width: 720px;}
		.col-md-7 {flex: 0 0 58.333333%;max-width: 58.333333%;}
		.col-md-5 {flex: 0 0 41.666667%;max-width: 41.666667%;}
		.d-md-block {display: block!important;}
	}
	@media (max-width: 992px) {.d-lg-none {display: none !important;}}
	@media (min-width: 992px) {
		.container, .container-lg, .container-md, .container-sm {max-width: 960px;}
		.col-lg-3 {flex: 0 0 25%;max-width: 25%;}
		.col-lg-4 {flex: 0 0 33.333333%;max-width: 33.333333%;}
		.col-lg-8 {flex: 0 0 66.666667%;max-width: 66.666667%;}
		.col-lg-9 {flex: 0 0 75%;max-width: 75%;}
		.d-lg-flex {display: flex!important;}
	}
	@media (min-width: 1200px) {
		.col-xl-3 {flex: 0 0 25%;max-width: 25%;}
		.col-xl-6 {flex: 0 0 50%;max-width: 50%;}
		.container, .container-lg, .container-md, .container-sm, .container-xl {max-width: 1330px;}
		.d-xl-block {display: block!important;}
	}
		/*COMMON UTILITIES*/
	.mt-25 {margin-top: 25px;}.mb-40 {margin-bottom: 40px;}.f-left {float: left}.f-right {float: right}.fix {overflow: hidden}.uppercase {text-transform: uppercase;}.capitalize {text-transform: capitalize;}.justify-content-center {justify-content: center!important;}.text-center {text-align: center!important;}.align-items-center {align-items: center!important;}.position-relative {position: relative!important;}.pl-0 {padding-left: 0;}.d-flex {display: flex;}.d-none {display: none !important;}
		/*NUXT STYLEING*/
	.nuxt-link-exact-active {color: #e4eb16 !important;}.page-enter-active,.page-leave-active {transition: opacity 0.9s;}.page-enter,.page-leave-to {opacity: 0;}
		/*COMMON WEB ELEMENTS STYLE*/
	.web_logo {width: 250px;}.web_logo img {width: 170px;}
	.main_search form {min-width: 285px;position: relative;margin-left: 30px;}
	.main_search form input {
	    width: 100%;
	    border: none;
	    background: #12151e;
	    color: #fff;
	    padding: 14px 20px;
	    font-size: 12px;
	    border-radius: 30px;
	    padding-right: 60px;
	    box-shadow: inset 0px 4px 9px 0px rgb(0 0 0 / 25%);
	}
	.main_search form input::placeholder {color: #656870;font-weight: 900;font-size: 12px;}
	.main_search form button {
	    position: absolute;
	    right: 20px;
	    top: 51%;
	    transform: translateY(-50%);
	    border: none;
	    background: transparent;
	    font-size: 13px;
	    color: #e4d804;
	    padding: 0;
	}
	.main_search form button::before {
		content: "|";
		position: absolute;
		left: -15px;
		top: 42%;
		transform: translateY(-50%);
		color: #d5d7dd;
		opacity: 0.8;
	}
	.quick-link-list ul, .ul_social ul {
	    display: flex;
	    align-items: center;
	    flex-wrap: wrap;
	}
	.ul_social ul {justify-content: flex-end;}.ul_social ul li {margin-right: 8px;}.ul_social ul li:last-child {margin-right: 0;}
	.ul_social ul li a {
	    display: block;
	    width: 36px;
	    height: 36px;
	    border-radius: 50%;
	    box-shadow: inset 0px 4px 9px 0px rgb(0 0 0 / 25%);
	    background-color: rgb(18, 21, 30);
	    text-align: center;
	    line-height: 36px;
	    font-size: 12px;
	    color: #bcbcbc;
	}
		/*HOME CSS*/
	.tr-movie-bg2 {
	    background-position: top center;
	    background-size: cover;
	    padding: 120px 0 120px;
	}
	.movie-item-row {justify-content: center;}
	.tr-movie-btn .btn {
	    letter-spacing: 0;
	    background: #e4d804;
	    color: #1a1e21;
	}
	.tr-movie-btn .btn:hover {background: transparent;color: #fff;}
	.title-style-three.text-center {padding-bottom: 30px;}
	.title-style-three {position: relative;padding-bottom: 20px;}
	.title-style-three.text-center::before {right: 0;margin: 0 auto;}
	.title-style-three::before {
	    content: "";
	    position: absolute;
	    left: 0;
	    bottom: 0;
	    background-image: url('/web/img/images/title_shape.png');
	    width: 98px;
	    height: 7px;
	}
	.navbar-wrap > ul > li.active > a, .navbar-wrap > ul > li:hover > a, .mobile-menu .navigation li.active > a, .header-lang form .icon, .banner-content .sub-title, .banner-content .title > span, .banner-meta ul li.release-time > span > i, .banner-meta ul li.category > a:hover, .section-title .sub-title, .movie-content .top .date, .movie-content .bottom ul li .quality, .movie-content .bottom ul li > span i, .movie-content .top .title a:hover, .ucm-active .owl-nav button:hover, .ucm-active-two .owl-nav button:hover, .tr-movie-menu-active button.active, .footer-menu nav .navigation li:hover > a, .quick-link-list ul li a:hover, .ul_social ul li a:hover, .copyright-text > p > a, .mobile-menu .social-links li a:hover, .header-top-link .quick-link li a:hover, .header-top-link .header-social li a:hover, .header-top-subs > p > span, .movie-item-two .movie-content .title a:hover, .movie-content-bottom ul li.tag a:hover {
		color: #e4d804;
	}
	.section-title .title {margin-bottom: 0;font-size: 36px;}
	.movie-item-row .custom-col- {
	    -ms-flex: 0 0 19.2%;
	    flex: 0 0 19.2%;
	    max-width: 19.2%;
	    width: 100%;
	    padding-right: 15px;
	    padding-left: 15px;
	}
	.movie-item-row .custom-col- .movie-item-two {margin-bottom: 25px;}
	.movie-item-two {
	    text-align: center;
	    background: #1f1e24;
	    padding: 15px;
	}
	.movie-poster {margin-bottom: 23px;position: relative;}.movie-item-row .movie-poster {position: relative;}.movie-content {padding-right: 10px;}.movie-item-two .movie-content {padding: 0;}
	.movie-item-row .movie-poster::before, .movie-item-three .movie-poster::before {
	    content: "";
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 100%;
	    background: #04050a;
	    transition: .3s linear;
	    opacity: 0;
	}
	.movie-poster img {max-width: 100%;border-radius: 5px;}
	.movie-item-two .movie-content > .rating {
		font-size: 16px;
		letter-spacing: 3.5px;
		color: #e4d804;
		margin-bottom: 10px;
	}
	.movie-item-two .movie-content .title {
	    font-size: 16px;
	    font-weight: 600;
	    color: #d5d5d5;
	    margin-bottom: 12px;
	}
	.tr-movie-menu-active {
	    display: flex;
	    align-items: center;
	    flex-wrap: wrap;
	    justify-content: center;
	    margin-bottom: 40px;
	}
	.tr-movie-menu-active button {
	    border: none;
	    border-radius: 4px;
	    box-shadow: inset 0px 3px 7px 0px rgb(0 0 0 / 77%);
	    background: #0b1110;
	    font-size: 13px;
	    text-transform: uppercase;
	    font-weight: 900;
	    color: #cdcaca;
	    padding: 17px 25px;
	    position: relative;
	    margin: 0 7.5px 15px;
	}
	.tr-movie-menu-active button.active::before, .tr-movie-menu-active button.active::after {opacity: 1;}
	.tr-movie-menu-active button.active {text-shadow: 0px 3px 24px rgb(228 216 4 / 50%);}
	.tr-movie-menu-active button::before, .tr-movie-menu-active button::after {
	    content: "";
	    position: absolute;
	    left: 0;
	    top: 50%;
	    transform: translateY(-50%);
	    width: 2px;
	    height: 16px;
	    transition: .3s linear;
	    opacity: 0;
	}
	.tr-movie-menu-active button::after {left: auto;right: 0;}
	.scroll-top, .btn:hover, .navbar-wrap > ul > li .submenu li a::before, .title-style-two .sub-title::before, .tr-movie-menu-active button::before, .tr-movie-menu-active button::after {background: #e4d804;}
	[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {cursor: pointer;}
		/*SINGLE PAGE STYLING*/
	.movie-details-area {
	    background-position: top center;
	    background-size: cover;
	    padding: 175px 0 120px;
	}
	.movie-details-btn .download-btn {
	    background: #e4d804;
	    text-transform: uppercase;
	    font-size: 13px;
	    font-weight: 900;
	    color: #14141d;
	    letter-spacing: 5px;
	    position: absolute;
	    bottom: 65px;
	    right: -50px;
	    transform: rotate(90deg);
	    padding: 43px 49px;
	    border-radius: 6px;
	}
	.download-btn img {max-width: 21px;transform: rotate(-90deg);padding-left: 4px;}
	.movie-details-img {position: relative;}.movie-details-img img {border-radius: 5px;}
	.movie-details-img .popup-video {
	    position: absolute;
	    left: 50%;
	    top: 50%;
	    transform: translate(-50%, -50%);
	    z-index: 1;
	}
	.movie-details-img img {border-radius: 5px;}.movie-details-content {margin-left: 23px;}.movie-details-content h2 {font-size: 60px;margin-bottom: 20px;}.banner-meta {margin-bottom: 35px;}.banner-meta ul {display: flex;flex-wrap: wrap;}
	.banner-meta ul li {
	    display: flex;
	    align-items: center;
	    margin-bottom: 15px;
	    margin-right: 18px;
	}
	.banner-meta ul li.quality > span {
	    font-size: 11px;
	    text-transform: uppercase;
	    font-weight: 700;
	    line-height: 1;
	}
	.banner-meta ul li.quality > span {
	    background: transparent;
	    color: #fff;
	    margin-left: 9px;
	    border: 2px solid #fff;
	    padding: 5px 10px;
	}
	.movie-details-content .banner-meta {margin-bottom: 15px;}.movie-details-content p {font-weight: 600;padding-left: 10px;}.movie-details-prime {padding-left: 10px;}
	.movie-details-prime .btn {
	    font-size: 12px;
	    padding: 9px 26px 12px;
	    letter-spacing: 1px;
	    margin-right: 5px;
	    margin-top: 9px;
	    background: transparent;
	}
	.movie-details-prime .btn:hover {background: #e4d804;color: black;}.movie-details-prime .btn .play {font-size: 14px;}
		/*FOOTER STYLING*/
	.footer-top-wrap {
	    background-image: url(/web/img/bg/footer_bg.jpg);
	    background-position: center center;
	    background-size: cover;
	    padding: 80px 0 55px;
	}
	.footer-menu-wrap {position: relative;padding-bottom: 35px;}.footer-quick-link-wrap {padding-top: 40px;}
	.footer-menu-wrap::before {
	    content: "";
	    position: absolute;
	    left: 0;
	    bottom: -1px;
	    width: 100%;
	    height: 1px;
	    background-color: rgb(18, 21, 30);
	    box-shadow: 0px 3px 0px 0px rgb(143 143 143 / 14%);
	}
	.footer-menu nav {display: flex;align-items: center;justify-content: flex-end;}
	.footer-menu nav .navigation {display: flex;align-items: center;flex-wrap: wrap;}
	.footer-menu nav .navigation li {margin-right: 27px;}
	.footer-menu nav .navigation li:last-child {margin-right: 0;}
	.footer-menu nav .navigation li a {
	    display: block;
	    text-transform: uppercase;
	    color: #c3c3c3;
	    font-weight: 700;
	    padding: 10px 10px;
	    line-height: 1;
	}
	.quick-link-list ul li {margin-right: 50px;margin: 5px 50px 5px 0px;}
	.quick-link-list ul li a {
	    color: #bcbcbc;
	    display: block;
	    font-weight: 900;
	    font-size: 13px;
	    text-transform: uppercase;
	}
	.quick-link-list ul li:last-child {margin-right: 0px;}svg.ftr_soc_icon {width: 12px;height: 12px;}.footer-menu .navigation a.active {color: #ddd106;}
		/*MENU BAR STYLE*/
	/* 4. Mobile-menu */
	.nav-outer .mobile-nav-toggler {
		position: relative;
		float: right;
		font-size: 40px;
		line-height: 50px;
		cursor: pointer;
		display: none;
		color: #fff;
		margin-right: 30px;
		top: 15px;
	}
	.mobile-menu {
		position: fixed;
		right: 0;
		top: 0;
		width: 300px;
		padding-right: 30px;
		max-width: 100%;
		height: 100%;
		opacity: 0;
		visibility: hidden;
		z-index: 99;
		border-radius: 0px;
		transition: all 700ms ease;
		transform: translateX(101%);
	}
	.mobile-menu .nav-logo {position: relative;padding: 30px 25px;text-align: left;}.mobile-menu-visible {overflow: hidden;}
	.mobile-menu-visible .mobile-menu {opacity: 1;visibility: visible;transform: translateX(0%);}.mobile-menu .navigation li.current>a:before {height: 100%;}
	.menu-backdrop {
	    position: fixed;
	    right: 0;
	    top: 0;
	    width: 100%;
	    height: 100%;
	    z-index: 2;
	    transition: all 700ms ease;
	    opacity: 0;
	    visibility: hidden;
	    background: #171d22;
	}
	.mobile-menu-visible .menu-backdrop {opacity: 0.80;visibility: visible;}
	.mobile-menu .menu-box {
		position: absolute;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 100%;
		max-height: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		background: #171d22;
		padding: 0px 0px;
		z-index: 5;
		box-shadow: -9px 0 14px 0px rgb(0 0 0 / 6%);
	}
	.mobile-menu-visible .mobile-menu .menu-box {opacity: 1;visibility: visible;}
	.mobile-menu .close-btn {
	    position: absolute;
	    right: 25px;
	    top: 32px;
	    line-height: 30px;
	    width: 35px;
	    text-align: center;
	    font-size: 20px;
	    color: #fff;
	    cursor: pointer;
	    z-index: 10;
	    transition: all 0.9s ease;
	}
	.mobile-menu-visible .mobile-menu .close-btn {transform: rotate(360deg);}
	.mobile-menu .navigation {position: relative;display: block;width: 100%;float: none;}
	.mobile-menu .navigation li {position: relative;display: block;border-top: 1px solid rgb(255 255 255 / 10%);}
	.mobile-menu .navigation > li:last-child {border-bottom: 1px solid rgb(255 255 255 / 10%);}
	.mobile-menu .navigation li > ul > li:first-child {border-top: 1px solid rgb(255 255 255 / 10%);}
	.mobile-menu .navigation li > a {
	    position: relative;
	    display: block;
	    line-height: 24px;
	    padding: 10px 25px;
	    font-size: 15px;
	    font-weight: 900;
	    color: #fff;
	    text-transform: capitalize;
	    transition: all 500ms ease;
	    border: none;
	}
	.mobile-menu .navigation li ul li > a {font-size: 15px;margin-left: 20px;text-transform: capitalize;}
	.mobile-menu .navigation li > a:before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		height: 0;
		-webkit-transition: all 500ms ease;
		-o-transition: all 500ms ease;
		transition: all 500ms ease;
	}
	.menu-area .mobile-nav-toggler {
	    position: relative;
	    float: right;
	    font-size: 30px;
	    cursor: pointer;
	    line-height: 1;
	    color: #fff;
	    display: none;
	    margin-top: 7px;
	}
		/*MAIN MEDIA QUERIES*/
	/* Extra large devices (large desktops, 1800px and up) */
	@media (max-width: 1500px) {
		.custom-container {max-width: 1330px;}.header-style-two::after {display: none;}
	}
	/* Extra large devices (large desktops, 1200px and up) */
	@media (max-width: 1199.98px) {
		.custom-container {max-width: 960px;}.navbar-wrap > ul {margin-right: 0;}.navbar-wrap > ul > li > a {padding: 38px 20px;}
		.quick-link-list ul li {margin: 5px 40px 5px 0px;}.movie-item-row .custom-col- {flex: 0 0 33.333%;max-width: 33.333%;}.header-action {display: flex;flex-grow: 1;justify-content: center;}
		.header-action .main_search {width: 200px;}.header-action .main_search form {min-width: 150px !important;}.web_logo {width: 200px;}.web_logo img {width: 130px;}
		.movie-item-row .movie-poster img {width: 100%;}.movie-item-row {justify-content: center;}.movie-details-btn {display: block;margin-top: 20px;text-align: center;}
		.movie-details-btn .download-btn {font-size: 11px;position: unset;bottom: 0;right: 0;transform: unset;padding: 20px 35px;display: inline-block;margin-left: 15px;}
		.movie-details-btn .download-btn img {max-width: 16px;margin-bottom: 2px;transform: rotate(0deg);}.movie-details-img img {max-width: 100%;}.movie-details-content h2 {font-size: 54px;}
	}
	/* Large devices (desktops, 992px and up) */
	@media (max-width: 991.98px) {
		.custom-container {max-width: 720px;}.mobile-nav-toggler {position: absolute !important;top: 0%;right: 0%;}.navbar-wrap {display: none;}
		.header-action {display: flex;flex-grow: 0.9;justify-content: flex-start;width: 40%;}.header-action .main_search {width: 160%;}.menu-area {padding: 25px 0;}.menu-area.sticky-menu {padding: 20px 0;}
		.menu-nav {justify-content: space-between;}.menu-area .mobile-nav-toggler {display: block !important;}.movie-poster img {width: 100%;}
		.movie-bg .tr-movie-menu-active {justify-content: center;}.header-style-two .menu-area,.header-style-two .menu-area.sticky-menu {padding: 20px 0;}
		.title-style-three.text-lg-left::before {left: 0;right: 0;margin: 0 auto;}.movie-item-row .custom-col- {flex: 0 0 50%;max-width: 50%;}.movie-details-content {margin-left: 0;}
		.movie-details-btn {margin-top: 30px;}.movie-details-content h2 {font-size: 50px;}.quick-link-list ul, .ul_social ul {justify-content: center !important;}
		.movie-details-img {max-width: 303px;margin: 0 auto 50px;}footer .web_logo {text-align: center;margin-bottom: 45px;width: 100%;}
		.quick-link-list ul li {margin: 5px 30px 5px 0px;}
		.quick-link-list ul li {margin: 5px 20px !important;}.quick-link-list ul li a {font-size: 10px !important;}
	}
	/* Medium devices (tablets, 768px and up) */
	@media (max-width: 767.98px) {
		.section-title .title {font-size: 32px;}.footer-menu nav {display: block !important;}.main_search form {min-width: 100% !important;margin-left: 0 !important;margin-top: 20px;}
		.ul_social ul {margin-top: 20px;justify-content: center;}.footer-menu nav .navigation {justify-content: center;}
		.movie-item-row .custom-col- {flex: 0 0 100%;max-width: 100%;}
		.movie-details-content h5 {font-size: 20px;}.movie-details-content h2 {font-size: 36px;}
	}
	/* Small devices (landscape phones, 576px and up) */
	@media only screen and (min-width: 576px) and (max-width: 767px) {
		.custom-container {max-width: 540px;}.movie-item-row .custom-col- {flex: 0 0 50%;max-width: 50%;}.movie-details-content h2 {font-size: 46px;}.movie-details-prime ul li.watch {margin-left: auto;}
		.movie-details-content h5 {font-size: 22px;}.comment-avatar-info h5 {font-size: 18px;}
	}
	@media (max-width: 576px) {
		.footer-menu nav .navigation li {margin-right: 0px;}.header-action {display: none;}.mobile-nav-toggler {right: 10%;}
	}
</style>