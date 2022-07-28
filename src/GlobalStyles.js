import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
margin: 0;
padding: 0;
box-sizing: border-box;
}

	
:root {
	--color-primary: #08b2c9;
	--color-secondary: #28527a;
	--color-light: #dbf6e9;
	--color-dark: #151515;
}


html {
	font-size: 62.5%;
}

.view {
	scroll-behavior: inherit;
	
}

.list {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 1rem;
}

li {
	list-style: none;
	margin: 1rem;
	padding: 1rem;
	border: 2px solid #ccc;
	/* IMPORTANTE */
	text-align: center;
}


Button {
    font-size: 1.6rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
    background: #fff;
    color: #000;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
    &:hover {
        background: #28527a;
        color: #fff;
    }
}


body {
	
	background: var(--color-dark);
	font-family: sans-serif;
	display: flex;
    justify-content: space-evenly;
	
}

.container {
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 1rem;
	

}

.nombre-personaje {
	width: 100%;
	background: var(--color-primary);
	color: var(--color-dark);
	border-radius: 0.5rem;
	height: 3rem;
	line-height: 3rem;
	text-align: center;
	transition-property: background, color;
	font-size: 1.8rem;
	
}

.id {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	max-width: 1200px;
	padding: 0 2rem;
}


.logo {
	width: 22rem;
	margin: 4rem auto;
}
.logo img {
	width: 100%;
}

.history {
	transform: rotate(10deg);
    width: 24%;
    margin-bottom: 10px;
    height: 200px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    box-shadow: 0 0 6px 0 rgba(0,0,0,.5);
	border: 2px solid red;
	:hover {
		transition: 0.5s;
		transform: rotate(0deg);
	;
	}
}

.personaje {
	
	border-radius: 0.5rem;
	background: var(--color-secondary);
	border-radius: 0.3rem;
	box-shadow: 0 0 1rem 0 rgba(255, 255, 255, 0.1);
	transition-property: background, color;
	grid-template: 10rem auto / 1fr;
	overflow: hidden;
	animation: showCard 0.7s linear;
	width: 100%;
	display: grid;
	grid-template: auto / 1fr;
	gap: 4rem;
	height: 100%;
	border-radius: 0.5rem;
	box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
	transition: all 0.2s;
	color: var(--color-light);
}
@keyframes showCard {
	from {
		opacity: 1;
	}
}
.personaje-header {
	background: var(--color-primary);
	padding: 2rem;
	text-align: right;
	display: grid;
	grid-template: auto / 1fr;
	align-items: center;
}
.estado {
	display: flex;
	align-items: center;
	background: var(--color-secondary);
	display: inline-flex;
	color: var(--color-light);
	padding: 0.5rem 1rem;
	border-radius: 2.5rem;
	font-size: 1.2rem;
	width: auto;
	justify-content: space-between;
	align-items: center;
	column-gap: 1rem;
}
.estado span {
	display: block;
	height: 1rem;
	width: 1rem;
	border-radius: 50%;
}
.Alive {
	background: #31a703;
}
.Dead {
	background: #d34b4b;
}
.unknown {
	background: #afafaf;
}
.personaje-body {
	padding: 8rem 2rem 4rem;
	position:  relative;
}
.personaje-body figure {
	position: absolute;
	display: block;
	width: 12rem;
	height: 12rem;
	border-radius: 50%;
	top: -6rem;
	left: 50%;
	transform: translateX(-50%);
	box-shadow: 0 0 1rem 0 var(--color-light);
	overflow: hidden;
}
.personaje-body figure img {
	height: 100%;
	width: 100%;
	object-fit: cover;
}
.personaje-body h2 {
	width: 100%;
	background: var(--color-primary);
	color: var(--color-dark);
	border-radius: 0.5rem;
	height: 3rem;
	line-height: 3rem;
	text-align: center;
	transition-property: background, color;
	font-size: 1.8rem;
}
.personaje-body p {
	width: 100%;
	background: rgba(219, 246, 233, 0.9);
	color: var(--color-dark);
	border-radius: 0.5rem;
	height: 4rem;
	margin-top: 2rem;
	line-height: 4rem;
	text-align: center;
}

.btn{
	width: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	max-width: 1200px;
	padding: 0 2rem;
	
	
}
.personaje-body p span {
	font-weight: bold;
}

.loading {
	display: grid;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
}

h1 {
	font-size: 2.4rem;
	font-weight: bold;
	color: var(--color-dark);
	margin: 0 auto;
	text-align: center;
}

//responsive media queries

@media screen and (min-width: 600px) {
	.lista-personajes {
		grid-template: auto / 1fr 1fr;    
	}
    .personaje {
        grid-template: 10rem auto / 1fr;
    }
	.personaje-header {
		text-align: left;
	}
	.personaje-body {
		padding: 8rem 2rem 4rem;
	}
	.personaje-body h2 {
		font-size: 2.4rem;
	}
	.personaje-body p {
		font-size: 1.6rem;
	}
	.logo {
		width: 30rem;
	}
}

@media screen and (min-width: 1000px) {
	.container {
		grid-template: auto / 1fr 1fr;

	}
}

`;

export default GlobalStyles;