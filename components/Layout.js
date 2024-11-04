import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <nav>
                    <Link href="/">Home</Link> | 
                </nav>
            </header>
            <main>{children}</main>
            <footer>© 2024 Kyopro Library</footer>
        </div>
    );
};

export default Layout;
