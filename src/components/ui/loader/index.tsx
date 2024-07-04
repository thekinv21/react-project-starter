import styles from './index.module.scss'

interface ILoader {
	content?: string
}

export function Loader({ content }: ILoader) {
	return (
		<section className={styles.loader_container}>
			<div className={styles['wifi-loader']}>
				<svg className={`${styles.circle} ${styles.outer}`} viewBox='0 0 86 86'>
					<circle className={styles.back} cx='43' cy='43' r='40'></circle>
					<circle className={styles.front} cx='43' cy='43' r='40'></circle>
				</svg>
				<svg
					className={`${styles.circle} ${styles.middle}`}
					viewBox='0 0 60 60'
				>
					<circle className={styles.back} cx='30' cy='30' r='27'></circle>
					<circle className={styles.front} cx='30' cy='30' r='27'></circle>
				</svg>
				<svg className={`${styles.circle} ${styles.inner}`} viewBox='0 0 34 34'>
					<circle className={styles.back} cx='17' cy='17' r='14'></circle>
					<circle className={styles.front} cx='17' cy='17' r='14'></circle>
				</svg>
				{content && <div className={styles.text} data-text={content}></div>}
			</div>
		</section>
	)
}
