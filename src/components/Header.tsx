import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  const navLinks = [
    { name: '홈', href: '/' },
    { name: '교과서 보기', href: '/' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/30 bg-background/60 backdrop-blur-xl">
      <div className="container flex h-16 items-center">
        <div className="mr-6 flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Learnly</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="transition-colors hover:text-primary text-foreground/80 hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button className="hidden sm:inline-flex shadow-lg shadow-primary/20" asChild>
            <Link to="/">학습 시작하기</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/80 backdrop-blur-xl">
              <div className="grid gap-4 py-4">
                <Link to="/" className="flex items-center space-x-2 mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <span className="font-bold text-lg">Learnly</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
                 <Button asChild>
                   <Link to="/">학습 시작하기</Link>
                 </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
