import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

html {
	font-size: 62.5%;
}

Button {
    font-size: 1.6rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: all 0.1s;
    background: #fff;
    color: #000;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
    &:hover {
        background: #28527a;
        color: #fff;
    }
}


:root {
	--color-primary: #08b2c9;
	--color-secondary: #28527a;
	--color-light: #dbf6e9;
	--color-dark: #151515;
}

body {
	font-size: 1.6rem;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	background: var(--color-dark);
	color: var(--color-light);
}

.container {
	width: 90%;
	max-width: 120rem;
	padding: 0 2rem;
	margin: 0 auto;
}

.logo {
	width: 22rem;
	margin: 4rem auto;
}
.logo img {
	width: 100%;
}

.lista-personajes {
	width: 100%;
	display: grid;
	grid-template: auto / 1fr;
	gap: 4rem;
}

.personaje {
	background: var(--color-secondary);
	border-radius: 0.3rem;
	box-shadow: 0 0 1rem 0 rgba(255, 255, 255, 0.1);
	display: grid;
	grid-template: 10rem auto / 1fr;
	overflow: hidden;
	animation: showCard 0.5s linear;
	width: 100%;
	display: grid;
	grid-template: auto / 1fr;
	gap: 4rem;
	height: auto;
	border-radius: 0.5rem;
	box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
	transition: all 0.3s;
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
	position: relative;
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
.personaje-body p span {
	font-weight: bold;
}

.loading {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
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
	.lista-personajes {
		grid-template: auto / repeat(3, 1fr);
	}
}

`;

export default GlobalStyles;