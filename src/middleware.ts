// import { NextResponse, type NextRequest } from 'next/server';
//
// export async function middleware(request: NextRequest) {
//   const supabase = supabaseMdidleware(request);
//
//   const {
//     data: { session },
//   } = await supabase.auth.getSession();
//
//   const isAuthPage = request.nextUrl.pathname.startsWith('/auth');
//   const isDashboard = request.nextUrl.pathname.startsWith('/dashboard');
//
//   if (isAuthPage && session) {
//     return NextResponse.redirect(new URL('/dashboard/settings', request.url));
//   }
//
//   if (isDashboard && !session) {
//     return NextResponse.redirect(new URL('/auth/sign-up', request.url));
//   }
//
//   return NextResponse.next();
// }
//
// export const config = {
//   matcher: ['/auth/:path*', '/dashboard/:path*'],
// };
