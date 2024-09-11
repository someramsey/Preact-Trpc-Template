import { render } from 'preact';
import { LocationProvider, Route, Router, hydrate, prerender as ssr } from 'preact-iso';
import { useState } from 'preact/hooks';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { trpc } from './utils/trpc';

import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

import "./assets/main.css";

export function App() {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpBatchLink({
                    url: 'http://localhost:3000'
                }),
            ],
        }),
    );

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <LocationProvider>
                    <Router>
                        <Route path="/" component={Home} />
                        <Route default component={NotFound} />
                    </Router>
                </LocationProvider>
            </QueryClientProvider>
        </trpc.Provider>
    );
}

if (import.meta.env.MODE === 'development') {
    render(<App />, document.getElementById('app'));
} else if (typeof window !== 'undefined') {
    hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
    return await ssr(<App {...data} />);
}
