import Header from "../header";
import style from './style.css';

const GoodsExchange = () => (
	<>
	<Header />
	<div class="is-flex is-flex-wrap-wrap p-3">
		<div class="good-container mx-2">
			<img class={style.goodsImg} src="assets/image/test.png"/>
			<p class="is-size-7">グッズ名グッズ…</p>
			<p>¥25,555</p>
		</div>
	</div>
	</>
);

export default GoodsExchange;
