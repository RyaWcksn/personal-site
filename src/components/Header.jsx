import React from 'react'
import '../assets/styles/header.css'

function Header() {
	return (
		<div className='row header'>
			<div className='col header-home'>
				<a href='/'>Pramudya Arya Wicaksana</a>
			</div>
			<div className='col header-info'>
				<div className='col header-blog'>
					<a href='https://blog.yuuriya.tech'>Blog</a>
				</div>
			</div>
		</div>
	)

}

export default Header
