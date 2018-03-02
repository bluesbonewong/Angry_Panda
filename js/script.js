!function () {
	let duration = 50

	function writeCode(prefix, code, fn) {
		// 三个参数分别是 前缀 代码 回调函数
		let codeContainer = document.querySelector('.language-css.code')
		let codeContainerWrapper = document.querySelector('pre')
		let styleTag = document.querySelector('#styleTag')
		let n = 0
		console.log(codeContainerWrapper)

		setTimeout(function run() {
			n += 1
			codeContainer.innerHTML = code.substring(0, n)
			styleTag.innerHTML = code.substring(0, n)
			codeContainer.scrollTop = codeContainer.scrollHeight
			// 注意，因为是code节点发生了变化，所以
			if (n <= code.length) {
				setTimeout(run, duration)
			} else {
				fn && fn.call()
			}
		}, duration)
	}

	let code = `/*
 *右边的按钮可以调节速度哟~~~
 */

/*
 *首先呢
 *给我们的Angry Panda来一个背景
 *颜色必须要装逼灰
 */
 
.preview-wrapper {
	background: #cccccc;
}

/*
 *接下来
 *来一个圆圆的脸蛋
 */

.face {
	width: 300px;
	height: 300px;
	border: 12px solid black;
	background: white;
	border-radius: 50%;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
}

/*
 *再来两个萌萌的耳朵
 */

.ear {
	width: 110px;
	height: 110px;
	border-radius: 50%;
	background: black;
	position: absolute;
	top: -10%;
}

.ear.right {
	left: 50%;
	transform: translateX(33%);
}

.ear.left {
	right: 50%;
	transform: translateX(-33%);
}

/*
 *加上一个可爱的鼻子
 */

.nose {
	width: 16px;
	height: 16px;
	background: #000;
	border-radius: 50%;
	position: absolute;
	left: 50%;
	top: 60%;
	transform: translateX(-50%);
}

/*
 *和不屑的冷笑
 */

.mouth {
	width: 50px;
	height: 10px;
	background: black;
	border-radius: 5px;
	position: absolute;
	right: 50%;
	transform: translateX(40%);
	bottom: 23%;
}

/*
 *再来俩眼睛
 */

.eye {
	/*注意眼睛半圆形是由一个长方形变过来的*/
	/*哎呀，不好意思，这句话是写给我自己看的*/
	/*毕竟写注释是个好习惯^_^*/
	height: 60px;
	width: 115px;
	border-radius: 0 0 115px 115px;
	background: black;
	position: absolute;
	top: 50%;
	overflow: hidden;
}

.eye.left {
	border-color: transparent transparent #000 #000;
	right: 50%;
	transform: rotate(28deg) translateX(-20%);
}

.eye.right {
	border-color: transparent #000 #000 transparent;
	left: 50%;
	transform: rotate(-28deg) translateX(20%);
}

/*
 *差点忘了，眼神必须要犀利呀
 */

.eye::before {
	content: '';
	display: block;
	position: absolute;
	border-radius: 50%;
	width: 74px;
	height: 74px;
	background: black;
	border: 12px solid red;
	left: 21px;
	top: -38px;
}
/*
 *好啦，这只Angry Panda送给
 *敲代码敲红了眼的你和我
 *产品再敢来这，一个眼神就灭了他^_^
 *design & code by <a href="https://github.com/bluesbonewong/Angry_Panda">bluesboneWong</a>
 *Welcome Fork & Star
 */
`
	writeCode('', code)

	let btnWrapper = document.querySelector('.actions')
	btnWrapper.addEventListener('click', function (e) {
		e.stopPropagation()
		for (let i = 0; i < btnWrapper.children.length; i++) {
			btnWrapper.children[i].classList.remove('active')
		}
		e.target.classList.add('active')

		let speed = e.target.getAttribute('data-speed')
		switch (speed) {
			case speed = 'slow':
				duration = 100
				break
			case speed = 'normal':
				duration = 50
				break
			case speed = 'fast':
				duration = 20
				break
		}

	})
}.call(null)


