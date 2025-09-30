import { useState } from 'react';
export default function Home() {
const [url, setUrl] = useState('');
const [result, setResult] = useState('');
const [loading, setLoading] = useState(false);
async function handleProxy() {
setLoading(true);
setResult('');
try {
const res = await fetch(/api/pr0xy?url=${encodeURIComponent(url)});
const text = await res.text();
setResult(text);
} catch (error) {
setResult('Error: ' + error.message);
}
setLoading(false);
}
return (
<div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
<h1>Proxy UI</h1>
<input
type="text"
value={url}
onChange={e => setUrl(e.target.value)}
placeholder="Enter URL to proxy"
style={{ width: '80%' }}
/>
<button onClick={handleProxy} disabled={loading || !url}>
{loading ? 'Loading...' : 'Fetch'}
</button>
<pre style={{ whiteSpace: 'pre-wrap', marginTop: 20 }}>{result}</pre>
</div>
);
}
