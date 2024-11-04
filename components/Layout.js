import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <nav>
                    <Link href="/">Home</Link> | 
                    <Link href="/algorithms/sorting">Sorting Algorithm</Link> | 
                    <Link href="/algorithms/dijkstra">Dijkstra Algorithm</Link>
                </nav>
            </header>
            <main>{children}</main>
            <footer>© 2024 Kyopro Library</footer>
        </div>
    );
};

export default Layout;
