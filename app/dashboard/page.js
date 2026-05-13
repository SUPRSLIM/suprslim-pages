import { redirect } from 'next/navigation';

export default async function DashboardHub({ searchParams }) {
  const { token } = await searchParams;

  if (!token) {
    redirect('/login');
  }

  // Routeer op basis van token
  if (token.startsWith('sander_')) {
    redirect(`/dashboard/sander?token=${token}`);
  }
  
  if (token.startsWith('kirsten_')) {
    redirect(`/dashboard/kirsten?token=${token}`);
  }

  if (token.startsWith('lizzy_')) {
    redirect(`/dashboard/team?token=${token}`);
  }

  // Default naar de login als het token niet klopt
  redirect('/login');
}
