import "./styles/index.scss";
import { newsData } from './mocks/newsData'

const newsBtnClass = document.querySelector('.news__btn'),
	newsBtn = document.querySelector('.news__btn button'),
	news = document.querySelector('.news .container-lg .row')

let singleNews = ''
let count = 6

function getNews(count) {
	newsData.slice(0, count).forEach(item => {
		singleNews += `
		<div class='col-12 col-sm-6 col-xl-4 news__single'>
			<img class="news__img" src=${item.news_img} alt="" />

			<div class="news__title">
				<h6>${item.cat}</h6>
				<p>${item.data}</p>
			</div>

			<h3>${item.text}</h3>

			<div class="news__author">
			<img src=${item.auth_img} alt='author' />
			<p>${item.auth_name}</p>
			</div>
		</div>
		`
	})

	news.innerHTML = singleNews
}
getNews(count)


newsBtn.onclick = function () {
	const next = count += 2;
	singleNews = ''
	getNews(next)

	if (newsData.length <= next) {
		newsBtnClass.remove()
	}
};
