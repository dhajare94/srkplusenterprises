import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Portfolio | SRKPLUSENTERPRISES',
    description: 'A showcase of our engineering capabilities and attention to detail across various sectors.',
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
