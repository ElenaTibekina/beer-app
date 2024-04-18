"use client"
import {Avatar, MenuButton, MenuText, SearchBar, Filters} from './components';
import {ProductsList} from './components/ProductsList';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function Home() {
    const user = {
        title: 'Mr',
        name: 'Michael'
    }

  return (
      <QueryClientProvider client={queryClient}>
          <main style={{backgroundColor: '#FAFAFA', width: '100%', minHeight: '100vh', padding: '20px'}}>
              <header style={{display: 'flex',  justifyContent: 'space-between', paddingBottom: '20px'}}>
                  <MenuButton />
                  <Avatar src="/icons/avatar.jpg" />
              </header>
              <section style={{marginBottom: '20px'}}>
                  <MenuText user={user} />
                  <SearchBar />
              </section>
              <section style={{marginBottom: '30px'}}>
                  <Filters />
              </section>
              <section>
                  <ProductsList />
              </section>
          </main>
      </QueryClientProvider>

  );
}
