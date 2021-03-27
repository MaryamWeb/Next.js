import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className="p-5">
			<Head>
				<title>Users | Welcome</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className="text-center pb-3">Welcome</h1>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, itaque sit. Eius voluptates dolores
				quidem et, doloribus hic repudiandae harum incidunt ipsa quas nulla delectus cum fugiat pariatur!
				Debitis voluptatibus aliquam et accusamus exercitationem at odio voluptates alias sint aspernatur.
				Accusamus, dolore veritatis. Sint adipisci ea harum aperiam. Accusamus, tempore ipsam ducimus dolorum
				maiores, quibusdam molestias ab quisquam natus rerum consequatur tenetur architecto assumenda id aut
				minus autem velit, officia atque veritatis ipsum temporibus? Alias adipisci, vero quod repellendus
				maiores temporibus ducimus maxime. Saepe id ullam delectus.
			</p>
		</div>
	);
}
