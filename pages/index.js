import Link from 'next/link';

const Index = () => (
  <div class="main-menu">
    <div class="menu-section">
      <h1 class="menu-section__title">RJ Salvador</h1>
    </div>
    <Link href="/code">
      <div class="menu-section">
        <h1 class="menu-section__title">Code</h1>
      </div>
    </Link>
    <Link href="/music">
      <div class="menu-section">
        <h1 class="menu-section__title">Music</h1>
      </div>
    </Link>
    <Link href="/blog">
      <div class="menu-section">
        <h1 class="menu-section__title">Blog</h1>
      </div>
    </Link>
  </div>
);

export default Index;
