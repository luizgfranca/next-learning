import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/layout.module.css';
import Link from 'next/link';
import stylesUtil from '../styles/utils.module.css';

export const siteTile = 'Nest.js studies'
export const name = 'Luiz'

export function Layout({children, home}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel='icon' href='/favicon.ico'/>
                <meta 
                    name="description"
                    content="Nest.js page creation example"
                />
                <meta name="og:title" content={siteTile} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image 
                            priority
                            src={'/images/profile.jpg'}
                            className={stylesUtil.borderCircle}
                            height={100}
                            width={100}
                            alt={name}
                        />
                        <h1 className={stylesUtil.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href={'/'}>
                            <Image 
                                priority
                                src={'/images/profile.jpg'}
                                className={stylesUtil.borderCircle}
                                height={100}
                                width={100}
                                alt={name}
                            />
                        </Link>
                        <h2 className={stylesUtil.headingLg}>
                            <Link href={'/'}>
                                <a className={stylesUtil.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href={'/'}>
                        <a>Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}