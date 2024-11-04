import { useEffect, useState } from 'react';

const Dijkstra = () => {
    const [code, setCode] = useState('');

    useEffect(() => {
        const loadCode = async () => {
            const res = await fetch('/cpp/ダイクストラ.cpp');
            const text = await res.text();
            setCode(text);
        };
        loadCode();
    }, []);

    return (
        <div>
            <h1>ダイクストラ法 (C++)</h1>
            <p>ダイクストラ法を使用して最短経路を求めるアルゴリズムです。</p>
            <pre>
                <code>{code}</code>
            </pre>
            <a href="/cpp/ダイクストラ.cpp" download="ダイクストラ.cpp">
                Download ダイクストラ.cpp
            </a>
        </div>
    );
};

export default Dijkstra;
