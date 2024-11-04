import Link from 'next/link';
import algorithmLinks from '../components/algorithmLinks'; // 自動生成されたリンクリスト

const Home = () => {
    return (
        <div className="container">
            <h1>Kyopro Library</h1>
            <p>競技プログラミングで使えるアルゴリズムとデータ構造のライブラリです。</p>
            <ul className="algorithm-list">
                {algorithmLinks.map((link) => (
                    <li key={link.name}>
                        <Link href={link.url}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
