import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Learnly</span>
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link to="/terms-of-service" className="hover:text-primary">이용약관</Link>
            <Link to="#" className="hover:text-primary">개인정보처리방침</Link>
            <Link to="#" className="hover:text-primary">고객센터</Link>
          </div>
          <div className="text-sm text-muted-foreground mt-4 md:mt-0">
            © {new Date().getFullYear()} Learnly. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
