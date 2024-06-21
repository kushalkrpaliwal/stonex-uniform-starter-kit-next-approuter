import '@/styles/globals.scss';
import { UniformContext } from '@uniformdev/canvas-next-rsc';
//export const runtime = 'edge';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <UniformContext>{children}</UniformContext>
      </body>
    </html>
  );
}
