import Layout from '../../components/Layout'; export default function Page() { return ( <Layout><pre>{require('fs').readFileSync('public/cpp/ダイクストラ.cpp', 'utf8')}</pre></Layout> ); }
