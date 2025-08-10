import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Marketing</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Analytics</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Commerce</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Insights</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Pricing</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Documentation</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Guides</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">API Status</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">About</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Blog</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Jobs</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Press</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Claim</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Privacy</Link></li>
              <li><Link href="#" className="text-base text-gray-500 hover:text-gray-900">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; 2024 ACME, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
